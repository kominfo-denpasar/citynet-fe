<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <router-link to="/publications" class="text-blue-600 dark:text-sky-400 hover:underline">← Back</router-link>

    <article v-if="pubItem" class="mt-6">
      <h1 class="text-4xl font-bold mb-4">{{ pubItem.title }}</h1>
      <p class="text-gray-500 mb-4">{{ formatDate(pubItem.date) }}</p>
      <img :src="pubItem.image" alt="" class="w-full rounded-lg mb-6" />
      <div v-html="pubItem.content" class="prose prose-lg dark:prose-invert max-w-none"></div>
    </article>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import pubData from "@/data/publications.json";

const route = useRoute();
const pubItem = ref(null);

onMounted(() => {
  const id = parseInt(route.params.id);
  pubItem.value = pubData.find((n) => n.id === id);
});

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>
