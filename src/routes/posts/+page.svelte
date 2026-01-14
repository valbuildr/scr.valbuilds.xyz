<script lang="ts">
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

  const posts = [
    {
      slug: "/posts/00-roblox-needs-to-switch-paths",
      title: "Roblox needs to switch paths.",
      pubDate: "2025-08-29",
      author: "valbuildr",
    },
    {
      slug: "/posts/01-same-work-new-place",
      title:
        "Same work, New place. scr.valbuilds.xyz is now rblx.valbuilds.xyz",
      pubDate: "2026-01-14",
      author: "valbuildr",
    },
  ];

  const authors = {
    valbuildr: {
      img: "https://valbuilds.xyz/pfp.png",
    },
  };

  let search: string | undefined = $state(undefined);
</script>

<div class="p-2 max-w-screen-lg mx-auto text-white">
  <Breadcrumb class="mb-2">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem>Posts</BreadcrumbItem>
  </Breadcrumb>
  <h2 class="text-2xl font-bold text-white">Posts</h2>
</div>

<div class="max-w-screen-lg mx-auto mb-2">
  <input
    type="text"
    class="w-full bg-gray-500/50 text-white border-0 rounded-lg focus:ring-gray-300 placeholder:text-gray-400 mb-2"
    bind:value={search}
    placeholder="Search"
  />
</div>

<div class="space-y-4">
  {#each posts
    .filter((post) => !search || post.title
          .toLowerCase()
          .includes(search.toLowerCase()))
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()) as post}
    <a href={post.slug} class="max-w-screen-lg mx-auto block">
      <div
        class="border border-gray-600 hover:border-gray-300 transition-colors duration-300 bg-gray-950 hover:bg-gray-900 rounded-lg max-w-screen-lg mx-auto p-2 px-4 text-white flex items-center justify-between"
      >
        <div>
          <p class="text-lg font-medium mb-1">{post.title}</p>
          <div class="flex gap-2 items-center">
            <img
              src={authors[post.author].img}
              class="h-4 rounded-full"
              alt={post.author}
            />
            <p class="text-sm text-white/75 pr-2 border-r-1 border-r-white/75">
              valbuildr
            </p>
            <p class="text-sm text-white/75">
              {new Date(post.pubDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <ArrowRightOutline class="shrink-0 h-6 w-6" />
      </div>
    </a>
  {/each}
</div>

{#if posts.filter((post) => !search || post.title
      .toLowerCase()
      .includes(search.toLowerCase())).length == 0}
  <div class="p-2 max-w-screen-lg mx-auto text-white">
    <p>No posts found.</p>
  </div>
{/if}
