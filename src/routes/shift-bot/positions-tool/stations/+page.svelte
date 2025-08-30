<script lang="ts">
  import { STATIONS, Operator } from "$lib/shift-bot/positions-tool/index";
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
  <p class="text-3xl sm:text-4xl font-bold text-white mt-2 z-11">Stations</p>
  <input
    type="text"
    bind:value={search}
    placeholder="Search"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 my-2"
  />
</div>

<div class="flex flex-col gap-2">
  {#each Object.entries(STATIONS).filter(([, station], i, arr) => !search || station.name
        .toLowerCase()
        .includes(search.toLowerCase()) || station.operators.some((op) => op
          .toLowerCase()
          .includes(search.toLowerCase())) || station.managers.some((mgr) => mgr
          .toLowerCase()
          .includes(search.toLowerCase())) || (station.signal_zone && station.signal_zone.some( (z) => z
              .toLowerCase()
              .includes(search.toLowerCase()) )) || (station.headcode && station.headcode
          .toLowerCase()
          .includes(search.toLowerCase())) || (station.dispatch_groups && station.dispatch_groups.some( (g) => g
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()) )) || arr[i][0]
        .toLowerCase()
        .includes(search.toLowerCase())) as station}
    <div
      class="max-w-screen-lg p-2 mx-auto w-full text-white {station[1]
        .managers[0] == Operator.Airlink
        ? 'bg-airlink/50'
        : station[1].managers[0] == Operator.Connect
          ? 'bg-connect/50'
          : station[1].managers[0] == Operator.Express
            ? 'bg-express/50'
            : station[1].managers[0] == Operator.Waterline
              ? 'bg-waterline/50'
              : station[1].managers[0] == Operator.Metro
                ? 'bg-metro/50'
                : 'bg-gray-500/50'} lg:rounded-lg"
      id={station[0]}
    >
      <!-- Station Name -->
      <p class="text-xl font-bold mb-2 my-0.5">
        <span class="relative group">
          <a href={"#" + station[0]}>{station[1].name}</a>
          <span
            class="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <LinkOutline class="w-5 h-5 inline text-white/60" />
          </span>
        </span>
      </p>

      <!-- Station Code -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Station Code:</p>
        <p>{station[0]}</p>
      </div>

      <!-- Operators -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Operator(s):</p>
        {#each station[1].operators as operator}
          {#if operator == Operator.Airlink}
            <p class="px-1 mx-1 bg-airlink rounded">
              {operator}
            </p>
          {:else if operator == Operator.Connect}
            <p class="px-1 mx-1 bg-connect rounded">
              {operator}
            </p>
          {:else if operator == Operator.Express}
            <p class="px-1 mx-1 bg-express rounded">
              {operator}
            </p>
          {:else if operator == Operator.Waterline}
            <p class="px-1 mx-1 bg-waterline rounded">
              {operator}
            </p>
          {:else if operator == Operator.Metro}
            <p class="px-1 mx-1 bg-metro rounded">
              {operator}
            </p>
          {:else}
            <p class="px-1 mx-1 bg-gray-500/50 rounded">
              {operator}
            </p>
          {/if}
        {/each}
      </div>

      <!-- Managers -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Station Manager(s):</p>
        {#each station[1].managers as manager}
          {#if manager == Operator.Airlink}
            <p class="px-1 mx-1 bg-airlink rounded">
              {manager}
            </p>
          {:else if manager == Operator.Connect}
            <p class="px-1 mx-1 bg-connect rounded">
              {manager}
            </p>
          {:else if manager == Operator.Express}
            <p class="px-1 mx-1 bg-express rounded">
              {manager}
            </p>
          {:else if manager == Operator.Waterline}
            <p class="px-1 mx-1 bg-waterline rounded">
              {manager}
            </p>
          {:else if manager == Operator.Metro}
            <p class="px-1 mx-1 bg-metro rounded">
              {manager}
            </p>
          {:else}
            <p class="px-1 mx-1 bg-black/50 rounded">
              {manager}
            </p>
          {/if}
        {/each}
      </div>

      <!-- Signal Zone -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Signal Zone:</p>
        {#each station[1].signal_zone as zone}
          <p>
            <a
              href={"/shift-bot/positions-tool/signal-zones#" + zone}
              class="hover:underline">{zone}</a
            >
          </p>
        {/each}
      </div>

      <!-- Electrified -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Electrified:</p>
        {#if station[1].electrification}
          <p class="text-green-400">Yes</p>
        {:else}
          <p class="text-red-400">No</p>
        {/if}
      </div>

      <!-- Dispatchable -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Dispatchable:</p>
        {#if station[1].dispatchable}
          <p class="text-green-400">Yes</p>
        {:else}
          <p class="text-red-400">No</p>
        {/if}
      </div>

      {#if station[1].dispatchable}
        <div class="flex items-center gap-1 ml-3 my-0.5">
          <p class="font-medium text-lg">Dispatch Groups:</p>
          {#if station[1].dispatch_groups}
            {#each station[1].dispatch_groups as group}
              <p
                class="px-1 mx-1 {station[1].managers[0] == Operator.Airlink
                  ? 'bg-airlink/50'
                  : station[1].managers[0] == Operator.Connect
                    ? 'bg-connect/50'
                    : station[1].managers[0] == Operator.Express
                      ? 'bg-express/50'
                      : station[1].managers[0] == Operator.Waterline
                        ? 'bg-waterline/50'
                        : station[1].managers[0] == Operator.Metro
                          ? 'bg-metro/50'
                          : 'bg-gray-500/50'} rounded"
              >
                {group.toString().replaceAll(",", ", ")}
              </p>
            {/each}
          {:else}
            <p class="px-1 mx-1 bg-yellow-500/50 rounded">[GROUPS MISSING]</p>
          {/if}
        </div>
      {/if}

      {#if station[1].headcode}
        <div class="flex items-center gap-1 my-0.5">
          <p class="font-medium text-lg">Headcode:</p>
          <p class="text-white/50">
            x<span class="text-white">{station[1].headcode}</span>xx
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
