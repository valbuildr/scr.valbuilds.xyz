<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { PROJECTS } from "$lib";
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

{#each Object.values(PROJECTS) as project}
  <div
    class="mb-4 p-6 bg-cover max-w-screen-lg aspect-video bg-primary-700 border border-gray-600 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg flex flex-col items-start justify-end relative"
    style={"background-image: url(" + project.bgImage + ");"}
  >
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
