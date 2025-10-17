<template>
  <main class="bg-white dark:bg-neutral-900 text-gray-800 dark:text-neutral-200">
    <!-- Breadcrumb -->
    <Breadcrumb
      class="mb-4"
      :breadcrumbs="breadcrumbs"
      :title="title"
      :subtitle="subtitle"
      :background="background"
    />

    <!-- Intro Section -->
    <section class="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ area.name }}</h1>
          <p class="text-lg text-gray-700 dark:text-neutral-300 leading-relaxed">
            {{ area.description }}
          </p>
        </div>
        <div>
          <img
            :src="area.image || fallbackImage"
            class="w-full h-80 object-cover rounded-xl shadow-md"
            alt="Area image"
            @error="handleImageError"
          />
        </div>
      </div>
    </section>

    <!-- Highlight Features -->
    <section class="bg-gray-50 dark:bg-neutral-800 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-2xl font-semibold mb-8">Highlights of {{ area.name }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white dark:bg-neutral-900 rounded-xl shadow p-6 flex flex-col items-center text-center"
          >
            <img
              :src="feature.image || fallbackImage"
              class="w-32 h-32 object-cover rounded-full mb-4"
              @error="handleImageError"
            />
            <h3 class="font-semibold text-lg mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-neutral-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Useful Information -->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-semibold mb-6">Useful Information</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl">
          <h3 class="font-semibold mb-2">🚌 Nearest Bus Stops</h3>
          <ul class="list-disc list-inside text-gray-600 dark:text-neutral-400">
            <li v-for="(stop, index) in area.busStops" :key="index">{{ stop }}</li>
          </ul>
        </div>
        <div class="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl">
          <h3 class="font-semibold mb-2">🚶 Walking Guide</h3>
          <p class="text-gray-600 dark:text-neutral-400">{{ area.walkingGuide }}</p>
        </div>
        <div class="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl">
          <h3 class="font-semibold mb-2">🔗 Social Links</h3>
          <div class="space-x-3">
            <a v-for="(link, index) in area.socialLinks" :key="index" :href="link.url" class="text-blue-600 hover:underline">{{ link.name }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Things To Do -->
    <section class="bg-gray-50 dark:bg-neutral-800 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-2xl font-semibold mb-8">Things To Do</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in thingsToDo"
            :key="item.id"
            class="bg-white dark:bg-neutral-900 rounded-xl shadow hover:shadow-md transition"
          >
            <img :src="item.image || fallbackImage" class="w-full h-40 object-cover rounded-t-xl" @error="handleImageError" />
            <div class="p-4">
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-neutral-400">{{ item.short_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Where to Shop / Eat / Stay -->
    <section v-for="section in [shops, eats, stays]" :key="section.title" class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-semibold mb-6">{{ section.title }}</h2>
      <div class="overflow-x-auto">
        <div class="flex space-x-6">
          <div
            v-for="item in section.items"
            :key="item.id"
            class="min-w-[250px] bg-white dark:bg-neutral-900 rounded-xl shadow hover:shadow-md transition"
          >
            <img :src="item.image || fallbackImage" class="w-full h-40 object-cover rounded-t-xl" @error="handleImageError" />
            <div class="p-4">
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-neutral-400">{{ item.short_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Where to Explore -->
    <ExploreMap :places="mapData.places" :center="[mapData.center.lat, mapData.center.lng]" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import ExploreMap from '@/components/ExploreMap.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

// Simulasi data — nanti bisa diganti fetch dari API
const mapData = ref({
  id: 0,
  name: 'Sanur Area',
  description: 'Sanur terkenal dengan pantai sunrise dan suasana tenang.',
  center: { lat: -8.6955, lng: 115.2624 },
  places: [
    {
      id: 1,
      name: 'Pantai Sanur',
      description: 'Pantai indah dan tenang.',
      image: '/images/bg2.png',
      lat: -8.6955,
      lng: 115.2624
    },
    {
      id: 2,
      name: 'Museum Le Mayeur',
      description: 'Museum seni karya pelukis Belgia.',
      image: '/images/bg2.png',
      lat: -8.6939,
      lng: 115.265
    }
  ]
})

const route = useRoute()
const slug = route.params.slug // /interesting-place/:slug

const api = axios.create({
  baseURL: 'https://ndb.kreatifitas.site/api/v2',
  headers: {
    'xc-token': import.meta.env.VITE_API_TOKEN,
  },
})

const fallbackImage = '/images/bg2.png'

const area = ref({})
const features = ref([])
const thingsToDo = ref([])
const shops = ref({ title: 'Where to Shop', items: [] })
const eats = ref({ title: 'Where to Eat', items: [] })
const stays = ref({ title: 'Where to Stay', items: [] })

const handleImageError = (e) => {
  e.target.src = fallbackImage
}

onMounted(async () => {
  try {
    // ambil data area berdasarkan slug
    const resArea = await api.get('/tables/mij6tb6xn3lvymj/records', {
      params: { where: `(slug,eq,${slug})` },
    })
    area.value = resArea.data.list[0] || {}

    // contoh ambil konten terkait area
    const [resFeature, resThings, resShop, resEat, resStay] = await Promise.all([
      api.get('/tables/features/records', { params: { where: `(area,eq,${slug})` } }),
      api.get('/tables/things_to_do/records', { params: { where: `(area,eq,${slug})` } }),
      api.get('/tables/shops/records', { params: { where: `(area,eq,${slug})` } }),
      api.get('/tables/eats/records', { params: { where: `(area,eq,${slug})` } }),
      api.get('/tables/stays/records', { params: { where: `(area,eq,${slug})` } }),
    ])

    features.value = resFeature.data.list
    thingsToDo.value = resThings.data.list
    shops.value.items = resShop.data.list
    eats.value.items = resEat.data.list
    stays.value.items = resStay.data.list
  } catch (err) {
    console.error(err)
  }
})
</script>

<style scoped>
/* Scroll snap untuk card slide */
section .overflow-x-auto {
  scroll-snap-type: x mandatory;
}
section .overflow-x-auto > div > div {
  scroll-snap-align: start;
}
</style>