<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import {
    DiscordSolid,
    GithubSolid,
    BookOpenSolid,
    EditSolid,
  } from "flowbite-svelte-icons";
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

<div
  class="mb-4 p-2 max-w-screen-lg bg-blue-950/50 border border-blue-200/50 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg"
>
  🐇 <span class="font-bold">The bot is not ready yet!</span>
  This project is considered to be in 'Alpha' because of the
  <a href="/shift-bot/positions-tool" class="hover:underline text-blue-400"
    >Positions Tool</a
  >.
</div>

<div
  class="mb-4 p-6 bg-cover max-w-screen-lg aspect-video bg-primary-700 border border-gray-600 lg:border-x border-x-0 text-white mx-auto lg:rounded-lg flex flex-col items-center justify-center relative bg-[url(/shift.png)]"
>
  <p class="text-4xl sm:text-5xl font-bold text-white mb-2 z-11">
    Custom shifts, made easier.
  </p>
  <p class="text-2xl sm:text-3xl font-medium text-white mb-2 z-11">
    All it takes is one command.
  </p>

  <div
    class="absolute inset-0 bg-black/35 rounded-lg pointer-events-none"
  ></div>
  <div class="relative z-10"></div>
</div>

<div
  class="mb-4 max-w-screen-lg text-white mx-auto sm:grid sm:grid-cols-2 gap-3 items-center bg-rose-900/50 lg:rounded-lg border border-rose-600 lg:border-x border-x-0"
>
  <div class="p-3">
    <p class="text-2xl font-medium mb-2">Simple to understand design</p>
    <p>
      Using Discord's new components system, shift announcements look amazing
      and easy to understand.
    </p>
  </div>
  <img
    class="w-full aspect-video lg:rounded-r-lg lg:rounded-l-none sm:rounded-l-lg"
    src="/shift.png"
    alt="An example shift announcement."
  />
</div>

<div
  class="mb-4 max-w-screen-lg text-white mx-auto sm:grid sm:grid-cols-2 gap-3 items-center bg-green-900/50 lg:rounded-lg border border-green-600 lg:border-x border-x-0"
>
  <img
    class="w-full aspect-video lg:rounded-l-lg lg:rounded-r-none sm:rounded-r-lg"
    src="/shift.png"
    alt="An example shift sign up tracker."
  />
  <div class="p-3">
    <p class="text-2xl font-medium mb-2">Advanced capabilities</p>
    <p>
      Track signups, ping signed up users, track attendance, sync with server
      events, and more! Best part, it's all customizable.
    </p>
  </div>
</div>

<div
  class="mb-4 max-w-screen-lg text-white mx-auto sm:grid sm:grid-cols-2 gap-3 items-center bg-sky-900/50 lg:rounded-lg border border-sky-600 lg:border-x border-x-0"
>
  <div class="p-3">
    <p class="text-2xl font-medium mb-2">Built with privacy in mind</p>
    <p class="mb-1">The bot is entirely self-hostable and open source.</p>
    <!-- <Button href="/shift-bot/self-host" color="primary" disabled -->
    <Button color="primary" disabled
      ><BookOpenSolid class="me-2 h-5 w-5" /> Self-hosting guide</Button
    >
    <!-- <Button href="https://github.com/valbuildr/shift-bot" color="dark" disabled -->
    <Button color="dark" disabled
      ><GithubSolid class="me-2 h-5 w-5" /> Check out the source code</Button
    >
  </div>
  <img
    class="w-full aspect-video lg:rounded-r-lg lg:rounded-l-none sm:rounded-l-lg"
    src="/shift.png"
    alt="A section of the bot's source code."
  />
</div>

<div
  class="mb-4 max-w-screen-lg text-white mx-auto justify-center text-center mt-3"
>
  <p class="text-2xl font-bold mb-1">Resources</p>
  <Button href="/shift-bot/positions-tool" color="dark"
    ><EditSolid class="me-2 h-5 w-5" /> Positions Tool</Button
  >
  <!-- <Button href="https://discord.gg/" color="dark" disabled -->
  <Button color="dark" disabled
    ><DiscordSolid class="me-2 h-5 w-5" /> Support Server</Button
  >
  <!-- <Button href="/shift-bot/self-host" color="dark" disabled -->
  <Button color="dark" disabled
    ><BookOpenSolid class="me-2 h-5 w-5" /> Self-hosting guide</Button
  >
</div>
