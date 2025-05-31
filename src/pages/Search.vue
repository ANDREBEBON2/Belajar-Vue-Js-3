<script setup>
import { ref, watch } from "vue";
import Quis from "../data/quiz.json";
import Card from "@/components/Card.vue";

const quis = ref(Quis);
const search = ref("");

watch(search, () => {
  quis.value = Quis.filter((q) => {
    return (
      q.title.toLowerCase().includes(search.value.toLowerCase()) ||
      q.questions.length.toString().includes(search.value)
    );
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
          <!-- component card -->
          <Card v-for="q in quis" :key="q.id" :data="q" />

          <!-- ./component card -->
        </div>
      </div>
      <!-- ./Content -->
    </div>
  </main>
</template>
