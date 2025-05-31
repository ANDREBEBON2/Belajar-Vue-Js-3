<template>
  <nav class="fixed top-0 left-0 z-30 items-center w-full h-14 bg-zinc-950">
    <div class="container flex items-center h-full mx-auto space-x-5">
      <RouterLink
        class="px-1 py-1 rounded hover:bg-teal-500 active:bg-teal-600"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="px-1 py-1 rounded hover:bg-teal-500 active:bg-teal-600"
        to="/about"
        >About</RouterLink
      >
      <RouterLink
        class="px-1 py-1 rounded hover:bg-teal-500 active:bg-teal-600"
        to="/memo"
        >Memo</RouterLink
      >
      <RouterLink
        class="px-1 py-1 rounded hover:bg-teal-500 active:bg-teal-600"
        to="/quis"
        >Quiz</RouterLink
      >
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
