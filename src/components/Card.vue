<script setup>
// const props = defineProps(["data"]);
const { data } = defineProps(["data"]);
</script>

<template>
  <!-- Card -->
  <div class="overflow-hidden rounded-t-sm shadow shadow-black">
    <!-- Image -->
    <img class="object-cover w-full h-72" :src="data.image" :alt="data.title" />
    <!-- ./Image -->

    <!-- Text -->
    <div class="px-2 py-5 mt-3 space-y-3">
      <h1 class="text-3xl font-semibold">{{ data.title }}</h1>
      <h2>{{ data.questions.length }} datauestions</h2>
    </div>
    <!-- ./Text -->
  </div>
  <!-- ./Card -->
</template>
