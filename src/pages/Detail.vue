<template>
  <div class="p-6">
    <router-link to="/list" class="text-blue-600 hover:underline">&larr; Back to List</router-link>
    <div v-if="loading" class="mt-4 text-gray-500">Loading detail...</div>

    <div v-else class="mt-4">
      <h1 class="text-2xl font-bold mb-2">{{ post.title }}</h1>
      <p class="text-gray-700">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    post.value = await res.json()
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>
