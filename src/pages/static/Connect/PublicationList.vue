<template>
  <section class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8">Publications</h1>

    <!-- List Publications -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in paginatedData"
        :key="item.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
      >
        <img :src="item.image" alt="" class="w-full h-40 object-cover rounded-t-lg" />
        <div class="p-4">
          <p class="text-sm text-gray-500">{{ formatDate(item.date) }}</p>
          <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {{ item.excerpt }}
          </p>
          <router-link
            :to="`/publications/${item.id}`"
            class="text-blue-600 dark:text-sky-400 font-medium hover:underline"
          >
            Read more →
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-8 space-x-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        Prev
      </button>

      <span class="px-4 py-2">
        Page {{ currentPage }} of {{ totalPages }}
      </span>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import pubData from "@/data/publications.json";

const publications = ref([]);
const currentPage = ref(1);
const perPage = 6; // tampilkan 6 item per halaman

onMounted(() => {
  publications.value = pubData;
});

const totalPages = computed(() =>
  Math.ceil(publications.value.length / perPage)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return publications.value.slice(start, start + perPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>
