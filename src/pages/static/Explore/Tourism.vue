<template>
  <StaticPage 
    :breadcrumbs="[
      { label: 'Home', link: '/' },
      { label: 'Pariwisata' }
    ]"
    title="Pariwisata Denpasar"
    subtitle="Temukan destinasi wisata populer, kuliner, budaya, dan pengalaman terbaik di Kota Denpasar."
    background="/images/bg-pariwisata.jpg"
  >
    <!-- Hero Title -->
    <h1 class="text-3xl font-bold mb-6 text-cyan-700">Pariwisata di Denpasar</h1>
    <p class="mb-4 text-gray-700 leading-relaxed">
      Denpasar menawarkan beragam destinasi menarik mulai dari pantai indah, situs budaya,
      kuliner khas Bali, hingga pusat hiburan modern. Temukan pengalaman tak terlupakan
      di setiap sudut kota.
    </p>

    <!-- Loading & Error -->
    <div v-if="loading" class="text-center py-10">Loading data...</div>
    <div v-if="error" class="text-center py-10 text-red-600">{{ error }}</div>

    <div v-else>
      <!-- Destinasi Populer -->
      <h2 class="text-2xl font-semibold mt-8 mb-4">Destinasi Populer</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="item in popularDestinations" :key="item.id" class="bg-white rounded-lg shadow p-4">
          <img :src="item.thumbnail" :alt="item.name" class="rounded-md mb-3 w-full h-40 object-cover" />
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <p class="text-sm text-gray-600">{{ item.short_description }}</p>
        </div>
      </div>

      <!-- Semua Kategori -->
      <h2 class="text-2xl font-semibold mt-8 mb-4">Kategori Pariwisata</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="cat in categories" :key="cat.id"
          class="bg-cyan-50 hover:bg-cyan-100 transition rounded-lg p-6 text-center cursor-pointer">
          <div class="text-3xl mb-2">{{ cat.icon }}</div>
          <h3 class="font-semibold text-cyan-700">{{ cat.name }}</h3>
        </div>
      </div>
    </div>
  </StaticPage>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import StaticPage from "@/layouts/StaticPage.vue";
import { useHead } from '@vueuse/head'

const destinations = ref([]);
const loading = ref(true);
const error = ref(null);

const categories = [
  { id: "pantai", name: "Pantai", icon: "🌊" },
  { id: "budaya", name: "Budaya", icon: "🏯" },
  { id: "kuliner", name: "Kuliner", icon: "🍜" },
  { id: "hiburan", name: "Hiburan", icon: "🎉" }
];

const popularDestinations = computed(() => destinations.value.slice(0, 6));

onMounted(async () => {
  try {
    const res = await fetch("/api-tourism/api-contoh/citynet/tourism-index.json");
    if (!res.ok) throw new Error("Gagal memuat data API");
    const data = await res.json();
    destinations.value = data.popular || [];
    console.log(data);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

useHead({
  title: "Denpasar Tourism | CityNet 2025",
  meta: [
    {
      name: "description",
      content: "Temukan destinasi populer, rekomendasi, dan kategori wisata di Denpasar."
    },
    {
      property: "og:title",
      content: "Pariwisata Denpasar | CityNet 2025"
    },
    {
      property: "og:description",
      content: "Destinasi populer, rekomendasi, dan kategori pariwisata di Kota Denpasar."
    },
    {
      property: "og:image",
      content: "https://citynet-ap.org/data/event/1FDkRfb11VhvsceQ3KK0U6j84IUOvNezDrbc4zN8eUN9kKAfp.uvk6v5ycayih.png"
    }
  ]
})
</script>
