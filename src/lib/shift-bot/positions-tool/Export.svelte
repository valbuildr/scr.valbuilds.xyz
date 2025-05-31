<script lang="ts">
  import {
    type SVPosition,
    type SPPosition,
    type SGPosition,
    type GDPosition,
    type DSPosition,
    type QDPosition,
  } from ".";

  interface Props {
    svPositions: SVPosition[];
    spPositions: SPPosition[];
    sgPositions: SGPosition[];
    gdPositions: GDPosition[];
    dsPositions: DSPosition[];
    qdPositions: QDPosition[];
    shiftName: string | undefined;
    shiftHost: string | undefined;
    shiftCohost: string | undefined;
    shiftDate: string | undefined;
    shiftTime: string | undefined;
    shiftDuration: string | undefined;
    shiftRuleset: string | undefined;
    shiftScenario: string | undefined;
    shiftNotes: string | undefined;
  }

  let {
    svPositions,
    spPositions,
    sgPositions,
    gdPositions,
    dsPositions,
    qdPositions,
    shiftName,
    shiftHost,
    shiftCohost,
    shiftDate,
    shiftTime,
    shiftDuration,
    shiftRuleset,
    shiftScenario,
    shiftNotes,
  }: Props = $props();

  import { Button } from "flowbite-svelte";
</script>

<div
  class="max-w-screen-lg p-2 mx-auto w-full text-white bg-primary-900/50 lg:rounded-lg"
>
  <Button
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
