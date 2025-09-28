<template>
  <StaticPage 
    :breadcrumbs="[
      { label: 'Home', link: '/' },
      { label: 'Explore' }
    ]"
    title="Tourism & Culture"
    subtitle="Tourism & Culture in Denpasar invites you to explore vibrant traditions, stunning beaches, and the authentic spirit of Bali in one captivating journey."
    background="/images/bg4.png"
  >
    <!-- Hero Title -->
    <h1 class="text-3xl font-bold mb-6 text-cyan-700">Discover the Charm of Denpasar</h1>
    <p class="mb-4 text-gray-700 leading-relaxed">
      Denpasar offers a variety of exciting destinations, from beautiful beaches and cultural sites to authentic Balinese cuisine and modern entertainment venues. 
      Discover unforgettable experiences around every corner of the city when you're staying here. 
    </p>

    <!-- Loading & Error -->
    <div v-if="loading" class="text-center py-10">Loading data...</div>
    <div v-if="error" class="text-center py-10 text-red-600">{{ error }}</div>

    <div v-else>
      <!-- Destinasi Populer -->
      <InterestingPoi />

      <!-- Rekomendasi -->
      <h2 class="text-2xl font-semibold mt-8 mb-4">Recomended for you to try</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="item in recommendedPoi" :key="item.id" class="bg-white rounded-lg shadow p-4">
          <router-link :to="`${item.slug}`" class="no-underline text-blue-600 dark:text-sky-400 font-medium">
          <img :src="item.thumbnail" :alt="item.name" class="rounded-md mb-3 w-full h-40 object-cover" />
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <p class="text-sm text-gray-600">{{ item.short_desc }}</p>
          </router-link>
        </div>
      </div>

      <!-- Card Blog -->
      <div class="max-w-[85rem] py-10 lg:py-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Recomended for you to try</h2>
          <p class="mt-1 text-gray-600 dark:text-neutral-400">Stay in the know with insights from industry experts.</p>
        </div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card -->
          <a class="group flex flex-col focus:outline-hidden" href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
              <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                Sponsored
              </span>
            </div>

            <div class="mt-7">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Studio by Preline
              </h3>
              <p class="mt-3 text-gray-800 dark:text-neutral-200">
                Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                Read more
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </p>
            </div>
          </a>
          <!-- End Card -->

          <!-- Card -->
          <a class="group flex flex-col focus:outline-hidden" href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
            </div>

            <div class="mt-7">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Onsite
              </h3>
              <p class="mt-3 text-gray-800 dark:text-neutral-200">
                Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                Read more
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </p>
            </div>
          </a>
          <!-- End Card -->

          <!-- Card -->
          <a class="group relative flex flex-col w-full min-h-60 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition" href="#">
            <div class="flex-auto p-4 md:p-6">
              <h3 class="text-xl text-white/90 group-hover:text-white"><span class="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>
            </div>
            <div class="pt-0 p-4 md:p-6">
              <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
                Visit the site
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </a>
          <!-- End Card -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Blog -->

      <!-- Semua Kategori -->
      <h2 class="text-2xl font-semibold mt-8 mb-4">Things To Do in Denpasar</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="cat in categoriesPoi" :key="cat.id"
          class="bg-cyan-50 hover:bg-cyan-100 transition rounded-lg p-6 text-center cursor-pointer">
          <router-link :to="`/point-of-interest/${cat.id}`" class="text-blue-600 no-underline dark:text-sky-400 font-medium">
            <div class="text-3xl mb-2">{{ cat.icon }}</div>
            <h3 class="font-semibold text-cyan-700">{{ cat.name }}</h3>
          </router-link>
          
        </div>
      </div>
    </div>
  </StaticPage>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import StaticPage from "@/layouts/StaticPage.vue";
import { useHead } from '@vueuse/head'
import InterestingPoi from "@/components/InterestingPoi.vue";


const destinations = ref([]);
const recommended = ref([]);
const categories = ref([]);

const loading = ref(true);
const error = ref(null);

// const categories = [
//   { id: "beach", name: "Beach", icon: "🌊" },
//   { id: "culture", name: "Culture", icon: "🏯" },
//   { id: "culinary", name: "Culinary", icon: "🍜" },
//   { id: "entertainment", name: "Entertainment", icon: "🎉" },
//   { id: "transportation", name: "Transportation", icon: "🚌" }
// ];

const popularDestinations = computed(() => destinations.value.slice(0, 6));
const recommendedPoi = computed(() => recommended.value.slice(0, 6));
const categoriesPoi = computed(() => categories.value.slice(0, 6));

onMounted(async () => {
  try {
    const res = await fetch("/api-tourism/api-contoh/citynet/tourism-index.json");
    if (!res.ok) throw new Error("Gagal memuat data API");
    const data = await res.json();
    destinations.value = data.popular || [];
    recommended.value = data.recommended || [];
    categories.value = data.categories || [];
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
