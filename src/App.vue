<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/element/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="container h-screen mx-auto mt-14">
    <div class="">
      <RouterView />
    </div>
  </main>
</template>
