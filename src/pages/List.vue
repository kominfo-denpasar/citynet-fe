<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">List Page</h1>
    <p class="mb-4">Contoh fetch API menggunakan jsonplaceholder.</p>

    <div v-if="loading" class="text-gray-500">Loading data...</div>
    <ul v-else class="space-y-2">
      <li v-for="post in posts" :key="post.id" class="p-4 border rounded hover:bg-gray-50">
        <router-link :to="`/detail/${post.id}`" class="text-blue-600 hover:underline">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    posts.value = await res.json()
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>
