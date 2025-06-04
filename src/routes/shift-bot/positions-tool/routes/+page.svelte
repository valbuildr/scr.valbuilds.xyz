<script lang="ts">
  import {
    SIGNAL_ZONES,
    ROUTES,
    STATIONS,
    Operator,
  } from "$lib/shift-bot/positions-tool/index";
  import { LinkOutline, ChevronLeftOutline } from "flowbite-svelte-icons";

  let search: string = $state("");
</script>

<div class="max-w-screen-lg p-2 mx-auto">
  <a
    class="text-white/75 hover:text-white transition-colors hover:underline"
    href="/shift-bot/positions-tool"
  >
    <ChevronLeftOutline class="w-5 h-5 inline" /> Back to positions tool
  </a>
  <p class="text-3xl sm:text-4xl font-bold text-white mt-2 z-11">Routes</p>
  <input
    type="text"
    bind:value={search}
    placeholder="Search"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 my-2"
  />
</div>

<div class="flex flex-col gap-2">
  {#each Object.entries(ROUTES).filter(([key, value]) => !search || key
        .toLowerCase()
        .includes(search.toLowerCase())) as route}
    <div
      class="max-w-screen-lg p-2 mx-auto w-full text-white {route[1].operator ==
      Operator.Airlink
        ? 'bg-airlink/50'
        : route[1].operator == Operator.Connect
          ? 'bg-connect/50'
          : route[1].operator == Operator.Express
            ? 'bg-express/50'
            : route[1].operator == Operator.Waterline
              ? 'bg-waterline/50'
              : route[1].operator == Operator.Metro
                ? 'bg-metro/50'
                : 'bg-gray-500/50'} lg:rounded-lg"
      id={route[0]}
    >
      <!-- Route Name -->
      <div class="flex justify-between items-center">
        <p class="text-xl font-bold mb-2 my-0.5">
          <span class="relative group">
            {#if route[1].alternate_name != undefined}
              <a href={"#" + route[0]}
                >{route[0]}: {route[1].alternate_name}
                <span class="text-white/50 text-lg"
                  >({STATIONS[route[1].inbound_destination].name} &lt;&gt; {STATIONS[
                    route[1].outbound_destination
                  ].name})</span
                ></a
              >
            {:else}
              <a href={"#" + route[0]}
                >{route[0]}: {STATIONS[route[1].inbound_destination].name} &lt;&gt;
                {STATIONS[route[1].outbound_destination].name}</a
              >
            {/if}
            <span
              class="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <LinkOutline class="w-5 h-5 inline text-white/60" />
            </span>
          </span>
        </p>
      </div>

      <!-- Operator -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Operator:</p>
        {#if route[1].operator == Operator.Airlink}
          <p class="px-1 mx-1 bg-airlink rounded">
            {route[1].operator}
          </p>
        {:else if route[1].operator == Operator.Connect}
          <p class="px-1 mx-1 bg-connect rounded">
            {route[1].operator}
          </p>
        {:else if route[1].operator == Operator.Express}
          <p class="px-1 mx-1 bg-express rounded">
            {route[1].operator}
          </p>
        {:else if route[1].operator == Operator.Waterline}
          <p class="px-1 mx-1 bg-waterline rounded">
            {route[1].operator}
          </p>
        {:else if route[1].operator == Operator.Metro}
          <p class="px-1 mx-1 bg-metro rounded">
            {route[1].operator}
          </p>
        {:else}
          <p class="px-1 mx-1 bg-gray-500/50 rounded">
            {route[1].operator}
          </p>
        {/if}
      </div>

      <!-- Inbound Route -->
      <div class="my-0.5">
        <p class="font-medium text-lg">
          Inbound ({route[1].type}{STATIONS[route[1].inbound_destination]
            .headcode}<span class="text-white/50">xx</span>) Route:
        </p>
        {#each route[1].inbound_route as entry}
          {#if Object.keys(STATIONS).includes(entry)}
            <p>
              <a
                href="/shift-bot/positions-tool/stations#{entry}"
                class="hover:underline">{STATIONS[entry]?.name}</a
              >
            </p>
          {:else}
            <p class="ml-2 w-fit text-blue-300">
              <i>
                {entry}
              </i>
            </p>
          {/if}
        {/each}
      </div>

      <!-- Outbound Route -->
      <div class="my-0.5">
        <p class="font-medium text-lg">
          Outbound ({route[1].type}{STATIONS[route[1].outbound_destination]
            .headcode}<span class="text-white/50">xx</span>) Route:
        </p>
        {#each route[1].outbound_route as entry}
          {#if Object.keys(STATIONS).includes(entry)}
            <p>
              <a
                href="/shift-bot/positions-tool/stations#{entry}"
                class="hover:underline">{STATIONS[entry]?.name}</a
              >
            </p>
          {:else}
            <p class="ml-2 w-fit text-blue-300">
              <i>
                {entry}
              </i>
            </p>
          {/if}
        {/each}
      </div>

      <!-- Electric Trains Allowed -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Electric Trains Allowed:</p>
        {#if route[1].electric_trains}
          <p class="text-green-400">Yes</p>
        {:else}
          <p class="text-red-400">No</p>
        {/if}
      </div>

      {#if route[1].notes}
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium text-lg">Notes:</p>
          <p>
            {route[1].notes}
          </p>
        </div>
      {/if}
    </div>
  {/each}

  <p class="max-w-screen-lg w-full mx-auto text-white/75">
    <i
      >If any of this data is wrong or outdated, please open an issue on <a
        href="https://github.com/valbuildr/scr.valbuilds.xyz/issues/new"
        target="_blank"
        class="hover:underline">Github</a
      >.</i
    >
  </p>
</div>
