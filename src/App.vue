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
  <main class="container h-screen w-full relative">
    <!-- Heading -->
    <div class="flex justify-between items-center py-2">
      <h1 class="text-6xl font-bold text-gray-900">Memo</h1>
      <button
        @click="buttonShow"
        class="py-2 px-2 bg-gray-800 text-white rounded-full outline-none hover:scale-95 transition-all duration-150"
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
    <div class="w-fit px-3 h-10 fixed z-10 top-1 left-0">
      <h1
        class="py-2 px-4 ps-3 bg-green-400 rounded text-white font-bold bg-opacity-50 text-xl duration-500 transition-all transform ease-in-out -translate-x-full"
        :class="SuccessMessage ? 'opacity-100 -translate-x-0' : 'opacity-0'"
      >
        Data berhasil ditambah...
      </h1>
    </div>
    <!-- Card -->
    <div class="grid grid-cols-4 mt-3 gap-2">
      <div
        v-for="m in bankMemo"
        :key="m.id"
        class="space-y-3 text-white p-2 h-64 flex flex-col items-baseline justify-between rounded"
        :style="{ backgroundColor: m.bg }"
      >
        <h1 class="text-justify">{{ m.content }}</h1>
        <div class="flex justify-between w-full">
          <p>{{ m.date }}</p>
          <button
            @click="deleteObject(m.id)"
            class="py-1 px-2 bg-gray-800 rounded"
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
      class="fixed z-10 top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div
        class="bg-gray-800 flex flex-col items-center justify-center py-10 px-10 rounded w-fit gap-y-1 relative"
      >
        <!-- Label -->
        <div class="w-full">
          <label for="memo" class="block text-white text-start font-extrabold"
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
          <p class="text-red-700 text-sm font-bold">{{ ErrorMessage }}</p>
        </div>
        <!-- ./Validasi -->

        <!-- Closing Tag -->
        <button
          @click="buttonHidden"
          class="text-xl bg-teal-600 w-7 h-7 rounded text-white absolute top-1 right-1 hover:bg-red-700"
        >
          &times;
        </button>
        <!-- ./Closing Tag -->

        <!-- Button Save -->
        <button
          @click="saveMemo"
          class="bg-teal-600 py-1 w-1/2 rounded text-white mt-5 font-bold hover:bg-teal-700 duration-150 active:scale-95"
        >
          Save
        </button>
        <!-- ./Button Save -->
      </div>
    </div>
    <!-- ./Modal -->
  </main>
</template>
