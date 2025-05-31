<script lang="ts">
  import { type GDPosition, type QDPosition } from ".";

  interface Props {
    positions: GDPosition[];
    driver_positions: QDPosition[];
    disableAdd: boolean;
  }

  let {
    positions = $bindable([]),
    driver_positions = [],
    disableAdd = false,
  }: Props = $props();

  import { Button, Modal } from "flowbite-svelte";

  let showModal: boolean = $state(false);

  type ModalData = {
    train: undefined | string;
    player: undefined | string;
  };

  let modalData: ModalData = $state({
    train: undefined,
    player: undefined,
  });

  let repeatTimes: number = $state(0);

  const resetModal = () => {
    modalData = {
      train: undefined,
      player: undefined,
    };
    repeatTimes = 0;
  };
</script>

<div
  class="max-w-screen-lg p-2 mx-auto w-full text-white bg-gd/50 lg:rounded-lg"
>
  <div class="flex justify-between items-center mb-2">
    <p class="text-xl font-bold">Guards</p>
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

  {#each positions as pos}
    <div class="w-full bg-gd/50 rounded-lg p-2 my-1">
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium">ID:</p>
        <p>{positions.indexOf(pos) + 1}</p>
      </div>
      {#if pos.train}
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">Train:</p>
          <p>{pos.train}</p>
        </div>
      {:else}
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">Train:</p>
          <p>Any</p>
        </div>
      {/if}

      {#if pos.player}
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">Player:</p>
          <p>{pos.player}</p>
        </div>
      {:else}
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">Player:</p>
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
  {#if positions.length == 0}
    <div class="w-full bg-gd/50 rounded-lg p-2 my-1">
      <p>No guard positions added.</p>
    </div>
  {/if}
</div>

<Modal
  bind:open={showModal}
  onclose={resetModal}
  outsideclose
  title="New Guard Position"
>
  <p class="pl-1 mb-0 text-white">Train</p>
  <select
    bind:value={modalData["train"]}
    placeholder="Train"
    disabled={driver_positions.length == 0}
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2 disabled:text-white/50"
  >
    <option selected disabled value={undefined}>
      {#if driver_positions.length == 0}
        Add driver positions to select a train.
      {:else}
        Select a train... Leave blank for any.
      {/if}
    </option>
    {#each driver_positions as driverPos, i}
      {#if driverPos.leg_3}
        <option value={i + 1}
          >{i + 1}: {driverPos.leg_1}, {driverPos.leg_2}, {driverPos.leg_3}</option
        >
      {:else if driverPos.leg_2}
        <option value={i + 1}
          >{i + 1}: {driverPos.leg_1}, {driverPos.leg_2}</option
        >
      {:else}
        <option value={i + 1}>{i + 1}: {driverPos.leg_1}</option>
      {/if}
    {/each}
  </select>

  <p class="pl-1 mb-0 text-white">Player</p>
  <input
    type="text"
    bind:value={modalData["player"]}
    placeholder="Player (leave blank for any)"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-0"
  />
  <p class="mt-0 mb-2 text-white/50">
    <i>This should be the player's Roblox username.</i>
  </p>

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
