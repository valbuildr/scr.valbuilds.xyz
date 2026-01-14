<script lang="ts">
  import { STATIONS } from "$lib/platform-station-redesign";

  let tocCollapsed: boolean = $state(true);
</script>

<div
  class="mb-4 p-2 max-w-screen-lg bg-yellow-950/50 border border-yellow-200/50 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg"
>
  ⚠️ <span class="font-bold"
    >This website is in no way affiliated with Stepford County Railway or it's
    management.</span
  >
  If you need help in-game, please direct your inquiry to the correct channel in
  the
  <a href="https://discord.com/scr" class="hover:underline text-blue-400"
    >SCR Official Discord</a
  >.
</div>

<div
  class="mb-4 p-2 max-w-screen-lg bg-blue-950/50 border border-blue-200/50 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg"
>
  🐇 <span class="font-bold"
    >Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz.</span
  >
  Read more
  <a class="hover:underline text-blue-400" href="/posts/01-same-work-new-place"
    >here</a
  >.
</div>

<div
  class="mb-4 p-2 max-w-screen-lg bg-blue-950/50 border border-blue-200/50 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg"
>
  🐇 <span class="font-bold"
    >All of these signs are available for download in both SVG and PNG format!</span
  >
  Simply click on the station sign you want, and you'll be taken to Github to download
  it.
</div>

<!-- ToC/Github Tip -->
<div
  class="mb-4 p-2 max-w-screen-lg bg-gray-900/50 border border-gray-200/50 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg"
>
  <button
    class="text-lg font-bold"
    onclick={() => {
      tocCollapsed = !tocCollapsed;
    }}
    >Table of Contents <span class="font-light text-gray-300"
      >{#if tocCollapsed}(click to expand){:else}(click to collapse){/if}</span
    ></button
  >

  {#if !tocCollapsed}
    <a
      href="#tfs"
      class="ml-2 mt-2 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
    >
      <img
        src="https://raw.githubusercontent.com/valbuildr/scr-signs-concept/21a23311f75e99600d45d32e2ce9dfae28e4eb4a/src/tfs-logo/light/icon.png?raw=true"
        alt=""
        class="h-6"
      />
      <p>Transport for Stepford/National Rail</p>
    </a>
    {#each STATIONS.tfs_nr as station}
      <a
        href={"#" + station.code.toUpperCase()}
        class="ml-8 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
      >
        <img
          src={"https://raw.githubusercontent.com/valbuildr/scr-signs-concept/21a23311f75e99600d45d32e2ce9dfae28e4eb4a/src/stations/" +
            station.code.toUpperCase() +
            "/icon.png?raw=true"}
          alt=""
          class="h-6"
        />
        <p>{station.name}</p>
      </a>
    {/each}

    <a
      href="#cn"
      class="ml-2 mt-2 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
    >
      <img
        src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/connect-icon.png?raw=true"
        alt=""
        class="h-6"
      />
      <p>Stepford Connect</p>
    </a>
    {#each STATIONS.connect as station}
      <a
        href={"#" + station.code.toUpperCase()}
        class="ml-8 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
      >
        <img
          src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/connect-icon.png?raw=true"
          alt=""
          class="h-6"
        />
        <p>{station.name}</p>
      </a>
    {/each}

    <a
      href="#wl"
      class="ml-2 mt-2 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
    >
      <img
        src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/waterline-icon.png?raw=true"
        alt=""
        class="h-6"
      />
      <p>Waterline</p>
    </a>
    {#each STATIONS.waterline as station}
      <a
        href={"#" + station.code.toUpperCase()}
        class="ml-8 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
      >
        <img
          src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/waterline-icon.png?raw=true"
          alt=""
          class="h-6"
        />
        <p>{station.name}</p>
      </a>
    {/each}

    <a
      href="#al"
      class="ml-2 mt-2 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
    >
      <img
        src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/airlink-icon.png?raw=true"
        alt=""
        class="h-6"
      />
      <p>Airlink</p>
    </a>
    {#each STATIONS.airlink as station}
      <a
        href={"#" + station.code.toUpperCase()}
        class="ml-8 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
      >
        <img
          src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/airlink-icon.png?raw=true"
          alt=""
          class="h-6"
        />
        <p>{station.name}</p>
      </a>
    {/each}

    <a
      href="#ex"
      class="ml-2 mt-2 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
    >
      <img
        src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/express-icon.png?raw=true"
        alt=""
        class="h-6"
      />
      <p>Express</p>
    </a>
    {#each STATIONS.express as station}
      <a
        href={"#" + station.code.toUpperCase()}
        class="ml-8 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
      >
        <img
          src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/express-icon.png?raw=true"
          alt=""
          class="h-6"
        />
        <p>{station.name}</p>
      </a>
    {/each}

    <a
      href="#mt"
      class="ml-2 mt-2 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
    >
      <img
        src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/metro-icon.png?raw=true"
        alt=""
        class="h-6"
      />
      <p>Metro</p>
    </a>
    {#each STATIONS.metro as station}
      <a
        href={"#" + station.code.toUpperCase()}
        class="ml-8 mb-1 flex gap-2 items-center hover:underline text-gray-300 hover:text-gray-100"
      >
        <img
          src="https://github.com/valbuildr/scr-signs-concept/blob/main/src/metro-icon.png?raw=true"
          alt=""
          class="h-6"
        />
        <p>{station.name}</p>
      </a>
    {/each}
  {/if}
</div>

<!-- TfS/NR -->
<div class="p-2 max-w-screen-sm mx-auto text-white">
  <div class="flex items-center justify-between">
    <p class="text-3xl font-bold mb-2" id="tfs">
      Transport for Stepford/National Rail
    </p>
    <a class="text-gray-300 hover:text-gray-100 hover:underline" href="#top">
      back to top
    </a>
  </div>
  <p class="mb-4">Simple, yet unique to every staton.</p>
  <div class="flex flex-col gap-2">
    {#each STATIONS.tfs_nr as station}
      <div>
        <p class="text-2xl font-medium pb-1" id={station.code.toUpperCase()}>
          {station.name}
        </p>
        <a
          href={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
            station.code.toUpperCase()}
        >
          <img
            class="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto"
            src={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
              station.code.toUpperCase() +
              "/" +
              station.code.toLowerCase() +
              ".png?raw=true"}
            alt={station.name}
          />
        </a>
        {#if station.note}
          <p class="text-gray-300 mt-1"><i>{station.note}</i></p>
        {/if}
      </div>
    {/each}
  </div>
  <p class="mt-4 text-white/50">
    Font: <a
      href="https://fonts.google.com/specimen/Instrument+Sans"
      class="hover:underline">Instrument Sans</a
    >
  </p>
</div>

<hr class="border-white/50 my-2 max-w-screen-lg mx-auto" />

<!-- Connect -->
<div class="p-2 max-w-screen-sm mx-auto text-white">
  <div class="flex items-center justify-between">
    <p class="text-3xl font-bold mb-2" id="cn">Stepford Connect</p>
    <a class="text-gray-300 hover:text-gray-100 hover:underline" href="#top">
      back to top
    </a>
  </div>
  <p class="mb-4">Shines a light.</p>
  <div class="flex flex-col gap-2">
    {#each STATIONS.connect as station}
      <div>
        <p class="text-2xl font-medium pb-1" id={station.code.toUpperCase()}>
          {station.name}
        </p>
        <a
          href={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
            station.code.toUpperCase()}
        >
          <img
            class="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto"
            src={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
              station.code.toUpperCase() +
              "/" +
              station.code.toLowerCase() +
              ".png?raw=true"}
            alt={station.name}
          />
        </a>
        {#if station.note}
          <p class="text-gray-300 mt-1"><i>{station.note}</i></p>
        {/if}
      </div>
    {/each}
  </div>
  <p class="mt-4 text-white/50">
    Font: <a
      href="https://fonts.google.com/specimen/Public+Sans"
      class="hover:underline">Pubic Sans</a
    >
  </p>
</div>

<hr class="border-white/50 my-2 max-w-screen-lg mx-auto" />

<!-- Waterline -->
<div class="p-2 max-w-screen-sm mx-auto text-white">
  <div class="flex items-center justify-between">
    <p class="text-3xl font-bold mb-2" id="wl">Waterline</p>
    <a class="text-gray-300 hover:text-gray-100 hover:underline" href="#top">
      back to top
    </a>
  </div>
  <p class="mb-4">Angled.</p>
  <div class="flex flex-col gap-2">
    {#each STATIONS.waterline as station}
      <div>
        <p class="text-2xl font-medium pb-1" id={station.code.toUpperCase()}>
          {station.name}
        </p>
        <a
          href={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
            station.code.toUpperCase()}
        >
          <img
            class="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto"
            src={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
              station.code.toUpperCase() +
              "/" +
              station.code.toLowerCase() +
              ".png?raw=true"}
            alt={station.name}
          />
        </a>
        {#if station.note}
          <p class="text-gray-300 mt-1"><i>{station.note}</i></p>
        {/if}
      </div>
    {/each}
  </div>
  <p class="mt-4 text-white/50">
    Font: <a
      href="https://fonts.google.com/specimen/Raleway"
      class="hover:underline">Raleway</a
    >
  </p>
</div>

<hr class="border-white/50 my-2 max-w-screen-lg mx-auto" />

<!-- Airlink -->
<div class="p-2 max-w-screen-sm mx-auto text-white">
  <div class="flex items-center justify-between">
    <p class="text-3xl font-bold mb-2" id="al">Airlink</p>
    <a class="text-gray-300 hover:text-gray-100 hover:underline" href="#top">
      back to top
    </a>
  </div>
  <p class="mb-4">The line is broken.</p>
  <div class="flex flex-col gap-2">
    {#each STATIONS.airlink as station}
      <div>
        <p class="text-2xl font-medium pb-1" id={station.code.toUpperCase()}>
          {station.name}
        </p>
        <a
          href={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
            station.code.toUpperCase()}
        >
          <img
            class="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto"
            src={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
              station.code.toUpperCase() +
              "/" +
              station.code.toLowerCase() +
              ".png?raw=true"}
            alt={station.name}
          />
        </a>
        {#if station.note}
          <p class="text-gray-300 mt-1"><i>{station.note}</i></p>
        {/if}
      </div>
    {/each}
  </div>
  <p class="mt-4 text-white/50">
    Font: <a
      href="https://fonts.google.com/specimen/Red+Hat+Display"
      class="hover:underline">Red Hat Display</a
    >
  </p>
</div>

<hr class="border-white/50 my-2 max-w-screen-lg mx-auto" />

<!-- Express -->
<div class="p-2 max-w-screen-sm mx-auto text-white">
  <div class="flex items-center justify-between">
    <p class="text-3xl font-bold mb-2" id="ex">Stpford Express</p>
    <a class="text-gray-300 hover:text-gray-100 hover:underline" href="#top">
      back to top
    </a>
  </div>
  <p class="mb-4">Switching tracks.</p>
  <div class="flex flex-col gap-2">
    {#each STATIONS.express as station}
      <div>
        <p class="text-2xl font-medium pb-1" id={station.code.toUpperCase()}>
          {station.name}
        </p>
        <a
          href={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
            station.code.toUpperCase()}
        >
          <img
            class="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto"
            src={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
              station.code.toUpperCase() +
              "/" +
              station.code.toLowerCase() +
              ".png?raw=true"}
            alt={station.name}
          />
        </a>
        {#if station.note}
          <p class="text-gray-300 mt-1"><i>{station.note}</i></p>
        {/if}
      </div>
    {/each}
  </div>
  <p class="mt-4 text-white/50">
    Font: <a
      href="https://fonts.google.com/specimen/DM+Mono"
      class="hover:underline">DM Mono</a
    >
  </p>
</div>

<hr class="border-white/50 my-2 max-w-screen-lg mx-auto" />

<!-- Metro -->
<div class="p-2 max-w-screen-sm mx-auto text-white">
  <div class="flex items-center justify-between">
    <p class="text-3xl font-bold mb-2" id="mt">Metro</p>
    <a class="text-gray-300 hover:text-gray-100 hover:underline" href="#top">
      back to top
    </a>
  </div>
  <p class="mb-4">Bubbles. (inspired by the current design)</p>
  <div class="flex flex-col gap-2">
    {#each STATIONS.metro as station}
      <div>
        <p class="text-2xl font-medium pb-1" id={station.code.toUpperCase()}>
          {station.name}
        </p>
        <a
          href={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
            station.code.toUpperCase()}
        >
          <img
            class="w-full h-auto max-w-screen-sm sm:max-w-screen rounded-lg mx-auto"
            src={"https://github.com/valbuildr/scr-signs-concept/blob/main/src/stations/" +
              station.code.toUpperCase() +
              "/" +
              station.code.toLowerCase() +
              ".png?raw=true"}
            alt={station.name}
          />
        </a>
        {#if station.note}
          <p class="text-gray-300 mt-1"><i>{station.note}</i></p>
        {/if}
      </div>
    {/each}
  </div>
  <p class="mt-4 text-white/50">
    Font: <a
      href="https://fonts.google.com/specimen/Montserrat"
      class="hover:underline">Montserrat</a
    >
  </p>
</div>
