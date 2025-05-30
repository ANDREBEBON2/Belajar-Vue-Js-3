<script setup>
import { ref } from "vue";

const showModal = ref(false);

const memo = ref("");
const bankMemo = ref([]);
const ErrorMessage = ref("");
const SuccessMessage = ref(false);

function buttonShow() {
  showModal.value = true;
}
function buttonHidden() {
  ErrorMessage.value = "";
  showModal.value = false;
}
function saveMemo() {
  if (!memo.value) {
    ErrorMessage.value = "Memo is required.";
    return;
  }
  bankMemo.value.push({
    id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    content: memo.value,
    date: new Date().toLocaleDateString("id-ID"),
    bg: randomCollor(),
  });
  ErrorMessage.value = "";
  memo.value = "";
  showModal.value = false;
  notify();
  setTimeout(() => {
    SuccessMessage.value = false;
  }, 2000);
}
function deleteObject(id) {
  bankMemo.value = bankMemo.value.filter((mem) => mem.id !== id);
}

function notify() {
  SuccessMessage.value = true;
}

function randomCollor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
</script>
<template>
  <main class="container relative w-full h-screen">
    <!-- Heading -->
    <div class="flex items-center justify-between py-2">
      <h1 class="text-6xl font-bold text-gray-900">Memo</h1>
      <button
        @click="buttonShow"
        class="px-2 py-2 text-white transition-all duration-150 bg-gray-800 rounded-full outline-none hover:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
    <!--./ Heading -->
    <div class="fixed left-0 z-10 h-10 px-3 w-fit top-1">
      <h1
        class="px-4 py-2 text-xl font-bold text-white transition-all duration-500 ease-in-out transform -translate-x-full bg-green-400 bg-opacity-50 rounded ps-3"
        :class="SuccessMessage ? 'opacity-100 -translate-x-0' : 'opacity-0'"
      >
        Data berhasil ditambah...
      </h1>
    </div>
    <!-- Card -->
    <div class="grid grid-cols-4 gap-2 mt-3">
      <div
        v-for="m in bankMemo"
        :key="m.id"
        class="flex flex-col items-baseline justify-between h-64 p-2 space-y-3 text-white rounded"
        :style="{ backgroundColor: m.bg }"
      >
        <h1 class="text-justify">{{ m.content }}</h1>
        <div class="flex justify-between w-full">
          <p>{{ m.date }}</p>
          <button
            @click="deleteObject(m.id)"
            class="px-2 py-1 bg-gray-800 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- ./Card -->

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
    >
      <div
        class="relative flex flex-col items-center justify-center px-10 py-10 bg-gray-800 rounded w-fit gap-y-1"
      >
        <!-- Label -->
        <div class="w-full">
          <label for="memo" class="block font-extrabold text-white text-start"
            >Your Memo</label
          >
        </div>
        <!-- ./Label -->

        <!-- TextArea -->
        <textarea
          v-model="memo"
          class="block rounded outline-teal-600"
          name="memo"
          id="memo"
          cols="30"
          rows=""
        ></textarea>
        <!-- ./TextArea -->

        <!-- Validasi -->
        <div class="w-full">
          <p class="text-sm font-bold text-red-700">{{ ErrorMessage }}</p>
        </div>
        <!-- ./Validasi -->

        <!-- Closing Tag -->
        <button
          @click="buttonHidden"
          class="absolute text-xl text-white bg-teal-600 rounded w-7 h-7 top-1 right-1 hover:bg-red-700"
        >
          &times;
        </button>
        <!-- ./Closing Tag -->

        <!-- Button Save -->
        <button
          @click="saveMemo"
          class="w-1/2 py-1 mt-5 font-bold text-white duration-150 bg-teal-600 rounded hover:bg-teal-700 active:scale-95"
        >
          Save
        </button>
        <!-- ./Button Save -->
      </div>
    </div>
    <!-- ./Modal -->
  </main>
</template>
