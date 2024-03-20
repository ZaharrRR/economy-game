<template>
  <div
    class="container mx-auto px-3 h-screen w-screen flex flex-col justify-between"
  >
    <header class="flex items-center justify-between py-1">
      <div class="flex flex-col">
        <span class="font-bold text-xl">ECONOMY GAME</span>
        <span class="text-sm">Next day after 0h 16m 13s</span>
      </div>

      <div class="flex flex-col items-end">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:account-circle" size="30px" />
          <span class="font-bold">User</span>
          <button class="ms-3 rounded p-1 text-gray-300 hover:bg-[#424242]">
            Log out
          </button>
        </div>

        <div class="text-sm">
          cash: <span class="font-bold">43m</span> GP:
          <span class="font-bold">185</span>
        </div>

        <div class="text-sm">
          date: <span class="font-bold">Mon 20.04.0000</span>
        </div>
      </div>
    </header>

    <div class="h-full border">
      <slot />
    </div>

    <footer class="h-[100px] flex items-center justify-between py-1">
      <div>
        <nav class="flex gap-3 text-sm">
          <NuxtLink to="https://t.me/chelovekkq">About us</NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq">About game</NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq">Blog</NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq">Confidence</NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq">Map of the site</NuxtLink>
        </nav>
      </div>

      <div class="flex flex-col gap-2">
        <button class="flex gap-2 text-sm">
          <Icon name="material-symbols:real-estate-agent-rounded" size="20px" />
          <span>send a message to admin</span>
        </button>

        <div class="flex gap-3 opacity-75">
          <NuxtLink to="https://t.me/chelovekkq">
            <img
              class="h-[30px]"
              src="../assets/images/discord-icon-svgrepo-com.svg"
              alt="discord img"
            />
          </NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq">
            <img
              class="h-[30px]"
              src="../assets/images/Telegram_logo.svg"
              alt="discord img"
            />
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
