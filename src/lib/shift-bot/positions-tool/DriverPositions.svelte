<script lang="ts">
  import { STATIONS, ROUTES, type QDPosition } from ".";

  interface Props {
    positions: QDPosition[];
    disableAdd: boolean;
  }

  let { positions = $bindable([]), disableAdd = false }: Props = $props();

  import { Button, Modal } from "flowbite-svelte";

  let showModal: boolean = $state(false);

  type ModalData = {
    leg_1: undefined | string;
    leg_2: undefined | string;
    leg_3: undefined | string;
    spawn_depot: undefined | string;
  };

  let modalData: ModalData = $state({
    leg_1: undefined,
    leg_2: undefined,
    leg_3: undefined,
    spawn_depot: undefined,
  });

  let repeatTimes: number = $state(0);

  const resetModal = () => {
    modalData = {
      leg_1: undefined,
      leg_2: undefined,
      leg_3: undefined,
      spawn_depot: undefined,
    };
    repeatTimes = 0;
  };
</script>

<div
  class="max-w-screen-lg p-2 mx-auto w-full text-white bg-qd/50"
>
  <div class="flex justify-between items-center mb-1">
    <p class="text-xl font-bold">Drivers</p>
    <div>
      <Button
        size="sm"
        color="light"
        disabled={positions.length >= Object.keys(ROUTES).length || disableAdd}
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
      <div class="w-full bg-qd/50 rounded-lg p-2">
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium">ID:</p>
          <p>{positions.indexOf(pos) + 1}</p>
        </div>
        {#if pos.leg_1}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Leg 1:</p>
            {#if ROUTES[pos.leg_1].alternate_name != undefined}
              <p>
                {ROUTES[pos.leg_1].alternate_name}
                <span class="text-white/75"
                  >{ROUTES[pos.leg_1].inbound_destination} &lt;&gt; {ROUTES[
                    pos.leg_1
                  ].outbound_destination}</span
                >
              </p>
            {:else}
              <p>
                {ROUTES[pos.leg_1].inbound_destination} &lt;&gt; {ROUTES[
                  pos.leg_1
                ].outbound_destination}
              </p>
            {/if}
          </div>
        {:else}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Leg 1:</p>
            <p>Any</p>
          </div>
        {/if}

        {#if pos.spawn_depot}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Spawn Depot:</p>
            <p>{pos.spawn_depot}</p>
          </div>
        {:else}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Spawn Depot:</p>
            <p>Any</p>
          </div>
        {/if}

        {#if pos.leg_2}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Leg 2:</p>
            {#if ROUTES[pos.leg_2].alternate_name != undefined}
              <p>
                {ROUTES[pos.leg_2].alternate_name}
                <span class="text-white/75"
                  >{ROUTES[pos.leg_2].inbound_destination} &lt;&gt; {ROUTES[
                    pos.leg_2
                  ].outbound_destination}</span
                >
              </p>
            {:else}
              <p>
                {ROUTES[pos.leg_2].inbound_destination} &lt;&gt; {ROUTES[
                  pos.leg_2
                ].outbound_destination}
              </p>
            {/if}
          </div>
        {/if}

        {#if pos.leg_3}
          <div class="flex items-center gap-1 my-0.5">
            <p class="font-medium">Leg 3:</p>
            {#if ROUTES[pos.leg_3].alternate_name != undefined}
              <p>
                {ROUTES[pos.leg_3].alternate_name}
                <span class="text-white/75"
                  >{ROUTES[pos.leg_3].inbound_destination} &lt;&gt; {ROUTES[
                    pos.leg_3
                  ].outbound_destination}</span
                >
              </p>
            {:else}
              <p>
                {ROUTES[pos.leg_3].inbound_destination} &lt;&gt; {ROUTES[
                  pos.leg_3
                ].outbound_destination}
              </p>
            {/if}
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
    <div class="w-full bg-qd/50 rounded-lg p-2 my-1">
      <p>No driving positions added.</p>
    </div>
  {/if}
</div>

<Modal
  bind:open={showModal}
  onclose={resetModal}
  outsideclose
  title="New Driver Position"
>
  <p class="pl-1 mb-0 text-white">Leg 1</p>
  <select
    bind:value={modalData["leg_1"]}
    placeholder="Leg 1"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
  >
    <option selected disabled value={undefined}
      >Select a route... Leave blank for any.</option
    >
    {#each Object.entries(ROUTES) as [routeCode, route]}
      {#if route.alternate_name != undefined}
        <option value={routeCode}
          >{route.alternate_name} ({STATIONS[route.inbound_destination].name} &lt;&gt;
          {STATIONS[route.outbound_destination].name})</option
        >
      {:else}
        <option value={routeCode}
          >{STATIONS[route.inbound_destination].name} &lt;&gt;
          {STATIONS[route.outbound_destination].name}</option
        >
      {/if}
    {/each}
  </select>

  <p class="pl-1 mb-0 text-white">Spawn Depot</p>
  <select
    bind:value={modalData["spawn_depot"]}
    placeholder="Spawn Depot"
    disabled={modalData["leg_1"] == undefined}
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2 disabled:text-white/50"
  >
    <option selected disabled value={undefined}>
      {#if modalData["leg_1"] == undefined}
        Select a route for Leg 1 first.
      {:else}
        Select a depot... Leave blank for any.
      {/if}
    </option>

    {#if modalData["leg_1"] != undefined}
      {#each ROUTES[modalData["leg_1"]].inbound_route as entry}
        {#if !Object.keys(STATIONS).includes(entry)}
          <option
            value="{entry} towards {ROUTES[modalData['leg_1']]
              .inbound_destination}"
            >{entry} (towards {STATIONS[
              ROUTES[modalData["leg_1"]].inbound_destination
            ].name})</option
          >
        {/if}
      {/each}
      {#each ROUTES[modalData["leg_1"]].outbound_route as entry}
        {#if !Object.keys(STATIONS).includes(entry)}
          <option
            value="{entry} towards {ROUTES[modalData['leg_1']]
              .outbound_destination}"
            >{entry} (towards {STATIONS[
              ROUTES[modalData["leg_1"]].outbound_destination
            ].name})</option
          >
        {/if}
      {/each}
    {/if}
  </select>

  <p class="pl-1 mb-0 text-white">Leg 2</p>
  <select
    bind:value={modalData["leg_2"]}
    placeholder="Leg 2"
    disabled={modalData["leg_1"] == undefined}
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2 disabled:text-white/50"
  >
    <option selected disabled value={undefined}>
      {#if modalData["leg_1"] == undefined}
        Select a route for Leg 1 first.
      {:else}
        Select a route... Leave blank for any.
      {/if}
    </option>
    {#each Object.entries(ROUTES) as [routeCode, route]}
      {#if route.alternate_name != undefined}
        <option value={routeCode}
          >{route.alternate_name} ({STATIONS[route.inbound_destination].name} &lt;&gt;
          {STATIONS[route.outbound_destination].name})</option
        >
      {:else}
        <option value={routeCode}
          >{STATIONS[route.inbound_destination].name} &lt;&gt;
          {STATIONS[route.outbound_destination].name}</option
        >
      {/if}
    {/each}
  </select>

  <p class="pl-1 mb-0 text-white">Leg 3</p>
  <select
    bind:value={modalData["leg_3"]}
    placeholder="Leg 3"
    disabled={modalData["leg_2"] == undefined}
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2 disabled:text-white/50"
  >
    <option selected disabled value={undefined}>
      {#if modalData["leg_2"] == undefined}
        Select a route for Leg 2 first.
      {:else}
        Select a route... Leave blank for any.
      {/if}
    </option>
    {#each Object.entries(ROUTES) as [routeCode, route]}
      {#if route.alternate_name != undefined}
        <option value={routeCode}
          >{route.alternate_name} ({STATIONS[route.inbound_destination].name} &lt;&gt;
          {STATIONS[route.outbound_destination].name})</option
        >
      {:else}
        <option value={routeCode}
          >{STATIONS[route.inbound_destination].name} &lt;&gt;
          {STATIONS[route.outbound_destination].name}</option
        >
      {/if}
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
