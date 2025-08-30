<script lang="ts">
  import { SIGNAL_ZONES, STATIONS } from "$lib/shift-bot/positions-tool/index";
  import { LinkOutline, ChevronLeftOutline } from "flowbite-svelte-icons";

  let search: string = $state("");
</script>

<div
  class="mb-4 p-2 max-w-screen-lg bg-blue-950/50 border border-blue-200/50 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg"
>
  📝 <span class="font-bold"
    >This website is not currently receiving updates.</span
  >
  Read more on why that is
  <a class="hover:underline text-blue-400" href="/roblox">here</a>.
</div>

<div class="max-w-screen-lg p-2 mx-auto">
  <a
    class="text-white/75 hover:text-white transition-colors hover:underline"
    href="/shift-bot/positions-tool"
  >
    <ChevronLeftOutline class="w-5 h-5 inline" /> Back to positions tool
  </a>
  <p class="text-3xl sm:text-4xl font-bold text-white mt-2 z-11">
    Signal Zones
  </p>
  <input
    type="text"
    bind:value={search}
    placeholder="Search"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 my-2"
  />
</div>

<div class="flex flex-col gap-2">
  {#each Object.entries(SIGNAL_ZONES).filter(([key, zone]) => zone.name
        .toLowerCase()
        .includes(search.toLowerCase()) || key
        .toLowerCase()
        .includes(search.toLowerCase()) || zone.stations.some((station) => STATIONS[station]?.name
            ?.toLowerCase()
            .includes(search.toLowerCase()) || station
            .toLowerCase()
            .includes(search.toLowerCase()))) as zone}
    <div
      class="max-w-screen-lg p-2 mx-auto w-full text-white bg-gray-500/50 lg:rounded-lg"
      id={zone[0]}
    >
      <!-- Zone Name -->
      <p class="text-xl font-bold mb-2 my-0.5">
        <span class="relative group">
          <a href={"#" + zone[0]}>{zone[0]}: {zone[1].name}</a>
          <span
            class="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <LinkOutline class="w-5 h-5 inline text-white/60" />
          </span>
        </span>
      </p>

      <!-- Desk Location -->
      <div class="flex items-center gap-1 my-0.5">
        <p class="font-medium text-lg">Desk Location:</p>
        <p>
          <a
            href="/shift-bot/positions-tool/stations#{zone[1].desk_location}"
            class="hover:underline">{STATIONS[zone[1].desk_location]?.name}</a
          >
        </p>
      </div>

      <!-- Stations -->
      <div class="my-0.5">
        <p class="font-medium text-lg">Stations:</p>
        {#each zone[1].stations as station}
          <p>
            <a
              href="/shift-bot/positions-tool/stations#{station}"
              class="hover:underline">{STATIONS[station]?.name}</a
            >
          </p>
        {/each}
      </div>
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
