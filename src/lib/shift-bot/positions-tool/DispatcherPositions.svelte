<script lang="ts">
  import { STATIONS, type DSPosition } from ".";

  interface Props {
    positions: DSPosition[];
    disableAdd: boolean;
  }

  let dispatchableStations = Object.entries(STATIONS).filter((value, index) => {
    return value[1].dispatchable == true;
  });

  let { positions = $bindable([]), disableAdd = false }: Props = $props();

  import { Button, Modal } from "flowbite-svelte";

  let showModal: boolean = $state(false);

  type ModalData = {
    station: undefined | string;
    platform_group: undefined | string;
  };

  let modalData: ModalData = $state({
    station: undefined,
    platform_group: undefined,
  });

  let repeatTimes: number = $state(0);

  const resetModal = () => {
    modalData = { station: undefined, platform_group: undefined };
    repeatTimes = 0;
  };
</script>

<div
  class="max-w-screen-lg p-2 mx-auto w-full text-white bg-ds/50 lg:rounded-lg"
>
  <div class="flex justify-between items-center mb-1">
    <p class="text-xl font-bold">Dispatchers</p>
    <div>
      <Button
        size="sm"
        color="light"
        disabled={positions.length >= dispatchableStations.length || disableAdd}
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
      <div class="w-full bg-ds/50 rounded-lg p-2">
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">ID:</p>
          <p>{positions.indexOf(pos) + 1}</p>
        </div>
        {#if pos.station}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Station:</p>
            <p>{STATIONS[pos.station].name}</p>
          </div>
        {:else}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Station:</p>
            <p>Any</p>
          </div>
        {/if}

        {#if pos.platform_group != undefined}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Platform Group:</p>
            <p class="px-1 mx-1 bg-ds/50 rounded">
              <!-- This gives an error in the IDE but works perfectly fine. -->
              {STATIONS[pos.station].dispatch_groups[pos.platform_group]
                .toString()
                .replaceAll(",", ", ")}
            </p>
          </div>
        {:else}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Platform Group:</p>
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
    <div class="w-full bg-ds/50 rounded-lg p-2 my-1">
      <p>No dispatcher positions added.</p>
    </div>
  {/if}
</div>

<Modal
  bind:open={showModal}
  onclose={resetModal}
  outsideclose
  title="New Dispatcher Position"
>
  <p class="pl-1 mb-0 text-white">Station</p>
  <select
    bind:value={modalData["station"]}
    placeholder="Station"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
  >
    <option selected disabled value={undefined}
      >Select a station... Leave blank for any.</option
    >
    {#each dispatchableStations as station}
      <option value={station[0]}>{station[1].name}</option>
    {/each}
  </select>

  <p class="pl-1 mb-0 text-white">Platform Group</p>
  <select
    bind:value={modalData["platform_group"]}
    placeholder="Platform Group"
    disabled={modalData["station"] == undefined}
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2 disabled:text-white/50"
  >
    <option selected disabled value={undefined}>
      {#if modalData["station"] == undefined}
        Select a station first.
      {:else}
        Select a platform group... Leave blank for any.
      {/if}
    </option>
    <!-- This gives an error in the IDE, but works perfectly fine because the menu is disabled if a station isnt selected -->
    {#each STATIONS[modalData.station ? modalData.station : "SAC"].dispatch_groups as group, idx}
      <option value={idx}>{group}</option>
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
        console.log(positions);
        resetModal();
        showModal = false;
      }}>Add</Button
    >
  {/snippet}
</Modal>
