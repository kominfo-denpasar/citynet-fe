<template>
  <div>
    <!-- Filter bar -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div class="flex items-center flex-wrap gap-2">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="[
            'px-3 py-1 rounded-full text-sm border transition',
            selectedTags === tag
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-700 border-gray-200'
          ]">
          {{ tag }}
        </button>
        <button @click="clearFilters" class="ml-2 px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600">
          Clear
        </button>
      </div>

      <div class="flex items-center gap-3">
        <input v-model="q" type="search" placeholder="Search places..." class="px-3 py-2 border rounded-md w-64" />
        <select v-model="sortBy" class="px-3 py-2 border rounded-md">
          <option value="popular">Most Popular</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
    </div>

    <!-- Loading / Error -->
    <div v-if="loading" class="text-center py-10 text-gray-500">Loading places...</div>
    <div v-else-if="error" class="text-center py-10 text-red-500">{{ error }}</div>

    <!-- Places grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="place in filteredPlaces"
        :key="place.id"
        class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
        <a :href="place.link" target="_blank" class="block">
          <div class="h-44 w-full bg-gray-100 overflow-hidden">
            <img :src="place.image" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-1">{{ place.name }}</h3>
            <div class="mb-2 flex items-center justify-between text-xs text-gray-500">
              <span class="inline-flex items-center gap-2">⭐ {{ place.popularity }}</span>
              <!-- <span class="inline-flex items-center gap-2">⏱ {{ place.time }} mins</span> -->
            </div>
            <p class="text-xs text-gray-500 mb-2">{{ place.tags.join(', ') }} • {{ place.location }}</p>
            <p class="text-sm text-gray-700">{{ place.summary }}</p>
          </div>
        </a>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";

// STATE
const q = ref("");
const sortBy = ref("popular");
const selectedTags = ref(null);
const places = ref([]);
const loading = ref(true);
const error = ref(null);

// --- BUAT INSTANCE AXIOS ---
const api = axios.create({
  baseURL: "https://ndb.kreatifitas.site/api/v2",
  headers: {
    "xc-token": import.meta.env.VITE_API_TOKEN,
  },
});

// --- FETCH DATA DARI NOCOBD ---
async function fetchPlaces() {
  loading.value = true;
  error.value = null;

  try {
    const params = {
      offset: 0,
      limit: 100,
      viewId: "vwhcpnq57a1h8azm", // ganti sesuai view ID kamu
    };

    const response = await api.get("/tables/mij6tb6xn3lvymj/records", { params });

    console.log("Fetched places:", response.data.list);

    places.value = response.data.list.map((r) => ({
      id: r.Id || r.id,
      name: r.Name || r.name,
      location: r.Location || r.location || "",
      summary: r.short_desc || "",
      image: r.Image || r.image || "/images/bg2.png",
      link: r.url || "https://denpasartourism.com",
      tags:
        typeof r.poi_tags === "string"
          ? JSON.parse(r.poi_tags)
          : r.poi_tags || (r.poi_tags ? r.poi_tags.split(",") : []),
      popularity: r.rating || 0,
      time: r.Time || r.time || 0,
    }));
  } catch (err) {
    error.value = err.message;
    console.error("Failed to fetch data:", err);
  } finally {
    loading.value = false;
    
  }
}

onMounted(fetchPlaces);

// --- COMPUTED FILTERS & SORT ---
const allTags = computed(() => {
  const set = new Set();
  places.value.forEach((p) => p.tags?.forEach((t) => set.add(t)));
  return Array.from(set);
});

function toggleTag(tag) {
  if (selectedTags.value === tag) {
    selectedTags.value = null
  } else {
    selectedTags.value = tag
  }
}

function clearFilters() {
  selectedTags.value = null;
  q.value = "";
  sortBy.value = "popular";
}

const filteredPlaces = computed(() => {
  let list = places.value.slice();

  // Filter berdasarkan tag (single select)
  if (selectedTags.value) {
    list = list.filter((p) => p.tags.includes(selectedTags.value));
  }

  // Filter berdasarkan pencarian teks
  if (q.value.trim()) {
    const ql = q.value.toLowerCase();
    list = list.filter((p) =>
      [p.name, p.summary, p.category, p.location]
        .join(" ")
        .toLowerCase()
        .includes(ql)
    );
  }

  // Urutkan berdasarkan pilihan
  if (sortBy.value === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    list.sort((a, b) => b.popularity - a.popularity);
  }

  return list;
});


// optional: refetch saat ubah sort atau search
watch([sortBy, q], fetchPlaces);
</script>
