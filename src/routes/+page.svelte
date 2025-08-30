<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { PROJECTS } from "$lib";

  let search: string | undefined = $state(undefined);
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
  📝 <span class="font-bold"
    >This website is not currently receiving updates.</span
  >
  Read more on why that is
  <a class="hover:underline text-blue-400" href="/roblox">here</a>.
</div>

<div class="max-w-screen-lg mx-auto mb-2">
  <input
    type="text"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
    bind:value={search}
    placeholder="Search"
  />
</div>

{#each Object.values(PROJECTS)
  .filter((project) => project.status != "draft")
  .filter((project) => !search || project.title
        .toLowerCase()
        .includes(search.toLowerCase())) as project}
  <div
    class="mb-4 p-6 bg-cover max-w-screen-lg aspect-video bg-primary-700 border border-gray-600 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg flex flex-col items-start justify-end relative"
    style={"background-image: url(" + project.bgImage + ");"}
  >
    {#if project.status == "draft"}
      <p
        class="px-2 bg-yellow-500/50 border border-yellow-500 rounded-lg text-yellow-100 z-60 mb-2"
      >
        Draft
      </p>
    {:else if project.status == "alpha"}
      <p
        class="px-3 bg-blue-500/50 border border-blue-500 rounded-lg text-blue-100 z-60 mb-2"
      >
        Alpha
      </p>
    {:else if project.status == "beta"}
      <p
        class="px-2 bg-cyan-500/50 border border-cyan-500 rounded-lg text-cyan-100 z-60 mb-2"
      >
        Beta
      </p>
    {:else if project.status == "released"}
      <p
        class="px-2 bg-green-500/50 border border-green-500 rounded-lg text-green-100 z-60 mb-2"
      >
        Released
      </p>
    {:else if project.status == "eol"}
      <p
        class="px-2 bg-red-500/50 border border-red-500 rounded-lg text-red-100 z-60 mb-2"
      >
        End-of-Life
      </p>
    {/if}
    <p class="text-3xl sm:text-4xl font-bold text-white mb-2 z-11">
      {project.title}
    </p>
    <Button href={project.href} class="z-11">{project.buttonText}</Button>
    {#if project.darkBg}
      <div
        class="absolute inset-0 bg-black/35 rounded-lg pointer-events-none"
      ></div>
      <div class="relative z-10"></div>
    {/if}
  </div>
{/each}
{#if Object.values(PROJECTS)
  .filter((project) => project.status != "draft")
  .filter((project) => !search || project.title
        .toLowerCase()
        .includes(search.toLowerCase())).length == 0}
  <p class="text-center text-white/75">No results</p>
{/if}
