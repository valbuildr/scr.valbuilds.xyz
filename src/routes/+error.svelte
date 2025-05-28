<script lang="ts">
    import { page } from "$app/state";

    import { Button } from "flowbite-svelte";
</script>

<div class="mb-4 p-2 max-w-screen-lg text-white mx-auto">
    <p class="text-3xl font-bold mb-3">Uh oh! An error occurred.</p>

    <p class="text-2xl font-medium">{page.status}</p>
    <p class="mb-3">{page.error?.message}</p>

    <Button href="/">Return to safety</Button>
</div>
