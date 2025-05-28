<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<div class="bg-gray-950 min-h-screen py-4 dark">
  <div
    class="mb-4 px-4 p-2 max-w-screen-lg bg-primary-700 border border-primary-600 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg flex justify-between items-center"
  >
    <a href="/"><span class="text-xl font-bold">scr.valbuilds.xyz</span></a>
    <a href="https://www.valbuilds.xyz" class="hover:underline">Main website</a>
  </div>

  {@render children()}
</div>
