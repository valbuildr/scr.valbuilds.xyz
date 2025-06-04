<script lang="ts">
  import { SIGNAL_ZONES, type SGPosition } from ".";

  interface Props {
    positions: SGPosition[];
    disableAdd: boolean;
  }

  let { positions = $bindable([]), disableAdd = false }: Props = $props();

  import { Button, Modal } from "flowbite-svelte";

  let showModal: boolean = $state(false);

  type ModalData = {
    zone: undefined | string;
  };

  let modalData: ModalData = $state({ zone: undefined });

  let repeatTimes: number = $state(0);

  const resetModal = () => {
    modalData = { zone: undefined };
    repeatTimes = 0;
  };
</script>

<div
  class="max-w-screen-lg p-2 mx-auto w-full text-white bg-sg/50"
>
  <div class="flex justify-between items-center mb-1">
    <p class="text-xl font-bold">Signallers</p>
    <div>
      <Button
        size="sm"
        color="light"
        disabled={disableAdd}
        onclick={() => {
          showModal = true;
        }}>Add</Button
      >
      <Button
        size="sm"
        color="light"
        disabled={positions.length <= 0}
        onclick={() => {
          positions = [];
        }}>Clear</Button
      >
    </div>
  </div>

  <div class="flex flex-col gap-2">
    {#each positions as pos}
      <div class="w-full bg-sg/50 rounded-lg p-2">
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">ID:</p>
          <p>{positions.indexOf(pos) + 1}</p>
        </div>
        {#if pos.zone}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Zone:</p>
            <p>{pos.zone} ({SIGNAL_ZONES[pos.zone].name})</p>
          </div>
        {:else}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Zone:</p>
            <p>Any</p>
          </div>
        {/if}
        <Button
          color="light"
          onclick={() => {
            positions.splice(positions.indexOf(pos), 1);
          }}>Remove</Button
        >
      </div>
    {/each}
  </div>
  {#if positions.length == 0}
    <div class="w-full bg-sg/50 rounded-lg p-2 my-1">
      <p>No signaller positions added.</p>
    </div>
  {/if}
</div>

<Modal
  bind:open={showModal}
  onclose={resetModal}
  outsideclose
  title="New Signaller Position"
>
  <p class="pl-1 mb-0 text-white">Zone</p>
  <select
    bind:value={modalData["zone"]}
    placeholder="Zone"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
  >
    <option selected disabled value={undefined}
      >Select a zone... Leave blank for any.</option
    >
    {#each Object.entries(SIGNAL_ZONES) as [zoneKey, zoneValue]}
      <option value={zoneKey}>{zoneKey}: {zoneValue.name}</option>
    {/each}
  </select>

  <p class="pl-1 mb-0 text-white">Repeat Times</p>
  <input
    type="number"
    min="0"
    max="74"
    bind:value={repeatTimes}
    placeholder="Repeat Times"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-0"
  />
  <p class="mt-0 text-white/50">
    <i>This will add {repeatTimes + 1} position(s).</i>
  </p>

  {#snippet footer()}
    <Button
      color="light"
      onclick={() => {
        for (let i = 0; i < repeatTimes + 1; i++) {
          positions.push({ ...modalData });
        }
        resetModal();
        showModal = false;
      }}>Add</Button
    >
  {/snippet}
</Modal>
