<template>
  <section class="max-w-7xl mx-auto px-6 py-12">
    <header class="mb-8 text-center">
      <h2 class="text-3xl font-semibold">Iconic &amp; Interesting Places in Denpasar</h2>
      <p class="mt-2 text-sm text-gray-600">Explore handpicked landmarks, cultural hubs, beaches and local favourites across the city.</p>
    </header>

    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div class="flex items-center flex-wrap gap-2">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="['px-3 py-1 rounded-full text-sm border transition', selectedTags.includes(tag) ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200']">
          {{ tag }}
        </button>
        <button @click="clearFilters" class="ml-2 px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600">Clear</button>
      </div>

      <div class="flex items-center gap-3">
        <input v-model="q" type="search" placeholder="Search places..." class="px-3 py-2 border rounded-md w-64" />
        <select v-model="sortBy" class="px-3 py-2 border rounded-md">
          <option value="popular">Most Popular</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="place in filteredPlaces" :key="place.id" class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
        <a :href="place.link" target="_blank" class="block">
          <div class="h-44 w-full bg-gray-100 overflow-hidden">
            <img :src="place.image" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-1">{{ place.name }}</h3>
            <p class="text-xs text-gray-500 mb-2">{{ place.category }} • {{ place.location }}</p>
            <p class="text-sm text-gray-700">{{ place.summary }}</p>
            <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span class="inline-flex items-center gap-2">⭐ {{ place.popularity }}</span>
              <span class="inline-flex items-center gap-2">⏱ {{ place.time }} mins</span>
            </div>
          </div>
        </a>
      </article>
    </div>

    <footer class="mt-8 text-center text-sm text-gray-500">Data and images are illustrative; replace image URLs with your assets.</footer>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const q = ref('')
const sortBy = ref('popular')
const selectedTags = ref([])

const places = ref([
  {
    id: 1,
    name: 'Sanur Beach',
    category: 'Beaches',
    location: 'Sanur',
    summary: 'Relaxed seaside promenade, sunrise views and water sport options.',
    image: 'https://theworldtravelguy.com/wp-content/uploads/2021/05/DSCF9924-3.jpg',
    link: '#',
    tags: ['Beaches', 'Nature'],
    popularity: 4.8,
    time: 15
  },
  {
    id: 2,
    name: 'Bajra Sandhi Monument',
    category: 'Landmarks',
    location: 'Central Denpasar',
    summary: 'Iconic monument commemorating Balinese struggle, with a museum and rooftop views.',
    image: 'https://balistarisland.com/wp-content/uploads/2016/03/bajrasandhimonument2-800x600.jpg',
    link: '#',
    tags: ['Landmarks', 'Heritage'],
    popularity: 4.6,
    time: 20
  },
  {
    id: 3,
    name: 'Bali Museum',
    category: 'Art & Museums',
    location: 'Central Denpasar',
    summary: 'Collections of Balinese art, archaeology, and cultural artifacts.',
    image: 'https://balistarisland.com/wp-content/uploads/2016/04/balimuseum-800x600.jpg',
    link: '#',
    tags: ['Art & Museums', 'Culture'],
    popularity: 4.4,
    time: 60
  },
  {
    id: 4,
    name: 'Pasar Badung',
    category: 'Shopping',
    location: 'Kec. Denpasar Barat',
    summary: 'Traditional market selling fresh produce, textiles and local crafts.',
    image: 'https://source.unsplash.com/featured/?market,bali',
    link: '#',
    tags: ['Shopping', 'Culture'],
    popularity: 4.2,
    time: 30
  },
  {
    id: 5,
    name: 'Werdhi Budaya Art Center',
    category: 'Art & Museums',
    location: 'Denpasar',
    summary: 'Main venue for Balinese arts and the annual Bali Arts Festival.',
    image: 'https://source.unsplash.com/featured/?artcenter,bali',
    link: '#',
    tags: ['Art & Museums', 'Festivals'],
    popularity: 4.5,
    time: 45
  },
  {
    id: 6,
    name: 'Kumbasari Market & Craft Row',
    category: 'Shopping',
    location: 'Kumbasari',
    summary: 'Handicraft sellers and souvenir shops concentrated near the market.',
    image: 'https://source.unsplash.com/featured/?crafts,bali',
    link: '#',
    tags: ['Shopping', 'Heritage'],
    popularity: 4.1,
    time: 25
  }
])

const allTags = computed(() => {
  const set = new Set()
  places.value.forEach(p => p.tags.forEach(t => set.add(t)))
  return Array.from(set)
})

function toggleTag(tag) {
  const idx = selectedTags.value.indexOf(tag)
  if (idx === -1) selectedTags.value.push(tag)
  else selectedTags.value.splice(idx, 1)
}

function clearFilters() {
  selectedTags.value = []
  q.value = ''
  sortBy.value = 'popular'
}

const filteredPlaces = computed(() => {
  let list = places.value.slice()
  if (selectedTags.value.length) {
    list = list.filter(p => selectedTags.value.every(t => p.tags.includes(t)))
  }
  if (q.value.trim()) {
    const ql = q.value.toLowerCase()
    list = list.filter(p => [p.name, p.summary, p.category, p.location].join(' ').toLowerCase().includes(ql))
  }
  if (sortBy.value === 'name') list.sort((a,b)=> a.name.localeCompare(b.name))
  else list.sort((a,b)=> b.popularity - a.popularity)
  return list
})
</script>

<style scoped>
/* minimal custom styling; Tailwind should handle most needs */
</style>
