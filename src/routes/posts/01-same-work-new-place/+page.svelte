<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  const pubDate = new Date("2026-01-14");
</script>

<div class="p-2 max-w-screen-lg mx-auto text-white">
  <Breadcrumb class="mb-2">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/posts">Posts</BreadcrumbItem>
    <BreadcrumbItem
      >Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz</BreadcrumbItem
    >
  </Breadcrumb>

  <h1 class="text-3xl font-bold mb-2">
    Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz
  </h1>
  <div class="flex items-center mb-2 gap-2">
    <img
      src="https://valbuilds.xyz/pfp.png"
      class="h-6 rounded-full"
      alt="valbuildr"
    />
    <p class="text-white/75 pr-2 border-r-2 border-r-white/75">valbuildr</p>
    <p class="text-white/75">{pubDate.toLocaleDateString()}</p>
  </div>

  <div class="space-y-2">
    <p>
      In order to widen my scope and organize all of my projects, I've decided
      to move this website and all of my SCR-related projects to a new domain:
      <a href="https://rblx.valbuilds.xyz" class="text-blue-400 hover:underline"
        >https://rblx.valbuilds.xyz</a
      >.
    </p>
    <p>
      From now on, all of my SCR-related projects will share a website with any
      other Roblox-related projects.
    </p>
    <p>
      scr.valbuilds.xyz website will become read-only, and the Github repository
      will be archived.
    </p>

    <img
      src="/post-assets/01/move-ad-l.png"
      alt="Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz"
      class="max-w-screen-md mx-auto rounded-lg mt-6"
    />
  </div>
</div>
