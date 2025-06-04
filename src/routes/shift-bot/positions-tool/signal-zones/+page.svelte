<script lang="ts">
  import { SIGNAL_ZONES, STATIONS } from "$lib/shift-bot/positions-tool/index";
  import { LinkOutline, ChevronLeftOutline } from "flowbite-svelte-icons";
</script>

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
</div>

<div class="flex flex-col gap-2">
  {#each Object.entries(SIGNAL_ZONES) as zone}
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
