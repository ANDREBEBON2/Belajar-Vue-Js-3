<script setup>
import { ref, watch } from "vue";
import Quis from "./data/quiz.json";
const quis = ref(Quis);
const search = ref("");

watch(search, () => {
  quis.value = Quis.filter((q) => {
    return q.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <main class="container mx-auto">
    <div class="p-2">
      <!-- Heading -->
      <div class="items-center justify-between md:flex max-md:space-y-7">
        <div class="flex items-start justify-start text-4xl font-bold">
          Quezsy
        </div>

        <div class="relative flex items-center">
          <input
            v-model.trim="search"
            id="search"
            type="text"
            class="flex px-3 py-1 transition-all border-none rounded outline-none ps-1 pe-1 bg-zinc-500 focus:outline-teal-500 hover:outline-teal-400 hover:duration-300"
          />
        </div>
      </div>
      <!-- ./Heading -->

      <!-- Content -->
      <div class="w-full mt-10">
        <div
          class="grid grid-cols-1 gap-x-5 gap-y-7 md:grid-cols-3 lg:grid-cols-4"
        >
          <!-- Card -->
          <div
            class="overflow-hidden rounded-t-sm shadow shadow-black"
            v-for="q in quis"
            :key="q.id"
          >
            <!-- Image -->
            <img
              class="object-cover w-full h-72"
              :src="q.image"
              :alt="q.title"
            />
            <!-- ./Image -->

            <!-- Text -->
            <div class="px-2 py-5 mt-3 space-y-3">
              <h1 class="text-3xl font-semibold">{{ q.title }}</h1>
              <h2>{{ q.questions.length }} Questions</h2>
            </div>
            <!-- ./Text -->
          </div>
          <!-- ./Card -->
        </div>
      </div>
      <!-- ./Content -->
    </div>
  </main>
</template>
