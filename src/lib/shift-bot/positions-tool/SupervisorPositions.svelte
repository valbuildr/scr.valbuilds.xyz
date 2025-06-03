<script lang="ts">
  import type { SVPosition } from ".";

  interface Props {
    positions: SVPosition[];
    disableAdd: boolean;
  }

  let { positions = $bindable([]), disableAdd = false }: Props = $props();

  import { Button, Modal } from "flowbite-svelte";

  let showModal: boolean = $state(false);

  let modalData: SVPosition = $state({ customSpawningInformation: undefined });

  let repeatTimes: number = $state(0);

  const resetModal = () => {
    modalData = { customSpawningInformation: undefined };
    repeatTimes = 0;
  };
</script>

<div
  class="max-w-screen-lg p-2 mx-auto w-full text-white bg-sv/50 lg:rounded-lg"
>
  <div class="flex justify-between items-center mb-1">
    <p class="text-xl font-bold">Supervisors</p>
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
      <div class="w-full bg-sv/50 rounded-lg p-2">
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">ID:</p>
          <p>{positions.indexOf(pos) + 1}</p>
        </div>
        {#if pos.customSpawningInformation}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Custom Spawning Information:</p>
            <p>{pos.customSpawningInformation}</p>
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
    <div class="w-full bg-sv/50 rounded-lg p-2 my-1">
      <p>
        No supervisor positions added. One is required, remember to add a spot
        for yourself!
      </p>
    </div>
  {/if}
</div>

<Modal
  bind:open={showModal}
  onclose={resetModal}
  outsideclose
  title="New Supervisor Position"
>
  <p class="pl-1 mb-0 text-white">Custom Spawning Information</p>
  <input
    type="text"
    bind:value={modalData["customSpawningInformation"]}
    placeholder="Custom Spawning Information"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
  />

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
