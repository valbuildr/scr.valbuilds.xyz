<script lang="ts">
  import { Button } from "flowbite-svelte";
  import {
    ClipboardListOutline,
    ChevronLeftOutline,
  } from "flowbite-svelte-icons";

  import SupervisorPositions from "$lib/shift-bot/positions-tool/SupervisorPositions.svelte";
  import SpecialPositions from "$lib/shift-bot/positions-tool/SpecialPositions.svelte";
  import SignallerPositions from "$lib/shift-bot/positions-tool/SignallerPositions.svelte";
  import DispatcherPositions from "$lib/shift-bot/positions-tool/DispatcherPositions.svelte";
  import DriverPositions from "$lib/shift-bot/positions-tool/DriverPositions.svelte";
  import GuardPositions from "$lib/shift-bot/positions-tool/GuardPositions.svelte";

  import type {
    SVPosition,
    SGPosition,
    GDPosition,
    DSPosition,
    QDPosition,
    SPPosition,
  } from "$lib/shift-bot/positions-tool/index";

  let shiftName: string | undefined = $state(undefined);
  let shiftHost: string | undefined = $state(undefined);
  let shiftCohost: string | undefined = $state(undefined);
  let shiftDate: string | undefined = $state(undefined);
  let shiftTime: string | undefined = $state(undefined);
  let shiftDuration: string | undefined = $state(undefined);
  let shiftRuleset: string | undefined = $state(undefined);
  let shiftScenario: string | undefined = $state(undefined);
  let shiftNotes: string | undefined = $state(undefined);

  let svPositions: SVPosition[] = $state([]);
  let spPositions: SPPosition[] = $state([]);
  let sgPositions: SGPosition[] = $state([]);
  let gdPositions: GDPosition[] = $state([]);
  let dsPositions: DSPosition[] = $state([]);
  let qdPositions: QDPosition[] = $state([]);
</script>

<div class="max-w-screen-lg p-2 mx-auto">
  <div class="flex gap-2">
    <a
      class="text-white/75 hover:text-white transition-colors hover:underline"
      href="/shift-bot"
    >
      <ChevronLeftOutline class="w-5 h-5 inline" /> Back to Shift Bot
    </a>
    <a
      class="text-white/75 hover:text-white transition-colors hover:underline"
      href="/shift-bot/positions-tool/stations"
    >
      <ClipboardListOutline class="w-5 h-5 inline" /> All stations
    </a>
    <a
      class="text-white/75 hover:text-white transition-colors hover:underline"
      href="/shift-bot/positions-tool/signal-zones"
    >
      <ClipboardListOutline class="w-5 h-5 inline" /> All signal zones
    </a>
    <a
      class="text-white/75 hover:text-white transition-colors hover:underline"
      href="/shift-bot/positions-tool/routes"
    >
      <ClipboardListOutline class="w-5 h-5 inline" /> All routes
    </a>
  </div>
  <p class="text-3xl sm:text-4xl font-bold text-white mt-2 z-11">
    Shift Bot Positions Tool
  </p>
</div>

<div class="flex flex-col">
  <div
    class="max-w-screen-lg p-2 mx-auto w-full text-white bg-gray-900/50 lg:rounded-t-lg"
  >
    <p class="text-xl font-bold mb-2">General Information</p>

    <p class="pl-1">Shift Name*</p>
    <input
      type="text"
      bind:value={shiftName}
      placeholder="Name*"
      class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
    />

    <p class="pl-1">Host*</p>
    <input
      type="text"
      bind:value={shiftHost}
      placeholder="Host*"
      class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400"
    />
    <p class="text-gray-500/50 mb-2">
      <i>This should be the host's Roblox username.</i>
    </p>

    <p class="pl-1">Co-host(s)</p>
    <input
      type="text"
      bind:value={shiftCohost}
      placeholder="Co-Host(s)"
      class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400"
    />
    <p class="text-gray-500/50 mb-2">
      <i
        >This should be the co-host's Roblox username. Seperate cohosts with
        ','.</i
      >
    </p>

    <p class="pl-1">Start Date & Time*</p>
    <div class="flex gap-2">
      <input
        type="date"
        bind:value={shiftDate}
        placeholder="Start Date*"
        class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400"
        style="color-scheme: dark;"
      />
      <input
        type="time"
        bind:value={shiftTime}
        placeholder="Start Time*"
        class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400"
        style="color-scheme: dark;"
      />
    </div>
    <p class="text-gray-500/50 mb-2">
      <i
        >This should be in UK time, or whatever your community has agreed upon.
        Visit <a
          href="https://www.timeanddate.com/worldclock/converter.html"
          target="_blank"
          class="hover:underline">this website</a
        > for conversions.</i
      >
    </p>

    <p class="pl-1">Duration*</p>
    <input
      type="time"
      bind:value={shiftDuration}
      placeholder="Duration*"
      class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
    />

    <p class="pl-1">Ruleset*</p>
    <select
      bind:value={shiftRuleset}
      placeholder="Ruleset*"
      class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
    >
      <option selected disabled value="">Select a ruleset...</option>
      <option value="normal">Normal: All operational rules apply.</option>
      <option value="relaxed">Relaxed: Some rules may not apply.</option>
      <option value="none">None: Little to no rules apply.</option>
      <option value="custom">Custom: Depends on host.</option>
    </select>

    <p class="pl-1">Scenario</p>
    <input
      type="text"
      bind:value={shiftScenario}
      placeholder="Scenario"
      class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
    />

    <p class="pl-1">Notes</p>
    <input
      type="text"
      bind:value={shiftNotes}
      placeholder="Notes"
      class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
    />
  </div>

  <DriverPositions
    bind:positions={qdPositions}
    disableAdd={svPositions.length +
      sgPositions.length +
      spPositions.length +
      gdPositions.length +
      dsPositions.length +
      qdPositions.length >=
      75}
  />

  <DispatcherPositions
    bind:positions={dsPositions}
    disableAdd={svPositions.length +
      sgPositions.length +
      spPositions.length +
      gdPositions.length +
      dsPositions.length +
      qdPositions.length >=
      75}
  />

  <GuardPositions
    bind:positions={gdPositions}
    driver_positions={qdPositions}
    disableAdd={svPositions.length +
      sgPositions.length +
      spPositions.length +
      gdPositions.length +
      dsPositions.length +
      qdPositions.length >=
      75}
  />

  <SignallerPositions
    bind:positions={sgPositions}
    disableAdd={svPositions.length +
      sgPositions.length +
      spPositions.length +
      gdPositions.length +
      dsPositions.length +
      qdPositions.length >=
      75}
  />

  <SpecialPositions
    bind:positions={spPositions}
    disableAdd={svPositions.length +
      sgPositions.length +
      spPositions.length +
      gdPositions.length +
      dsPositions.length +
      qdPositions.length >=
      75}
  />

  <SupervisorPositions
    bind:positions={svPositions}
    disableAdd={svPositions.length +
      sgPositions.length +
      spPositions.length +
      gdPositions.length +
      dsPositions.length +
      qdPositions.length >=
      75}
  />

  <div
    class="max-w-screen-lg flex gap-2 p-2 mx-auto w-full text-white bg-gray-900/50 lg:rounded-b-lg"
  >
    <Button color="light" disabled size="lg" title="Coming soon..."
      >Import</Button
    >

    <Button
      color="light"
      disabled={shiftName == undefined ||
        shiftName == "" ||
        shiftHost == undefined ||
        shiftHost == "" ||
        shiftDate == undefined ||
        shiftTime == undefined ||
        shiftDuration == undefined ||
        shiftRuleset == undefined ||
        svPositions.length < 1 ||
        svPositions.length +
          spPositions.length +
          sgPositions.length +
          gdPositions.length +
          dsPositions.length +
          qdPositions.length <
          1}
      size="lg"
      onclick={() => {
        const obj = {
          meta: {
            name: shiftName,
            host: shiftHost,
            cohost: shiftCohost,
            date: shiftDate,
            time: shiftTime,
            duration: shiftDuration,
            ruleset: shiftRuleset,
            scenario: shiftScenario,
            notes: shiftNotes,
          },
          svPositions,
          spPositions,
          sgPositions,
          gdPositions,
          dsPositions,
          qdPositions,
          hello: "world",
          version: "1",
        };
        const dataStr =
          "data:text/json;charset=utf-8," +
          encodeURIComponent(JSON.stringify(obj, null, 2));

        const dlAnchorElem = document.createElement("a");
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "positions.json");
        document.body.append(dlAnchorElem);
        dlAnchorElem.click();
        document.body.removeChild(dlAnchorElem);
      }}
    >
      Export
    </Button>
  </div>
</div>
