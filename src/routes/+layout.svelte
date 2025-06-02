<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<div class="bg-gray-950 min-h-screen py-4 dark flex flex-col justify-between">
  <div
    class="mb-4 px-4 p-2 w-full max-w-screen-lg bg-primary-700 border border-primary-600 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg flex justify-between items-center"
  >
    <a href="/"
      ><span class="text-xl font-bold">scr.valbuilds.xyz</span></a
    >
    <a href="https://www.valbuilds.xyz" class="hover:underline">Main website</a>
  </div>

  <div class="mb-auto">
    {@render children()}
  </div>

  <div class="border-t border-white/50 mt-2 text-white">
    <div class="max-w-screen-xl px-3 pt-3 mx-auto">
      <p class="font-bold text-lg">Made with ❤️ by Valentine. 🏳️‍⚧️</p>
      <p>
        This website is open source! Check out the source code <a
          href="https://github.com/valbuildr/scr.valbuilds.xyz"
          class="hover:underline">here</a
        >.
      </p>
    </div>
  </div>
</div>
