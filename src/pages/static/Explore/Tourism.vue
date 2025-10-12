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
    <!-- Loading & Error -->
    <div v-if="loading" class="text-center py-10">Loading data...</div>
    <div v-if="error" class="text-center py-10 text-red-600">{{ error }}</div>

    <div v-else>
      <!-- Destinasi Populer -->
      <InterestingPoi :places="interestingPoi" />

      <!-- Rekomendasi -->
      <RecommendedSection :recommended-poi="recommendedPoi" :recommended2-poi="recommended2Poi" />
      <!-- End recommended -->

      <!-- Semua Kategori -->
      <!-- Title -->
			<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Explore Denpasar by Category</h2>
				<p class="mt-1 text-gray-600 dark:text-neutral-400">Check and find out all the things in Denpasar.</p>
			</div>
			<!-- End Title -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="cat in categoriesPoi" :key="cat.Id"
          class="bg-cyan-50 hover:bg-cyan-100 transition rounded-lg p-6 text-center cursor-pointer">
          <router-link :to="`/category/${cat.slug}`" class="text-blue-600 no-underline dark:text-sky-400 font-medium">
            <div class="text-3xl mb-2"></div>
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
  import RecommendedSection from "@/components/RecommendedSection.vue";

  import axios from "axios";

  const recommended = ref([]);
  const recommended2 = ref([]);
  const categories = ref([]);
  const places = ref([]);

  const loading = ref(true);
  const error = ref(null);

  const recommendedPoi = computed(() => recommended.value);
  const recommended2Poi = computed(() => recommended2.value);
  const categoriesPoi = computed(() => categories.value);
  const interestingPoi = computed(() => places.value);

  // Buat instance Axios dengan token dari .env
  const api = axios.create({
    baseURL: "https://ndb.kreatifitas.site/api/v2",
    headers: {
      "xc-token": import.meta.env.VITE_API_TOKEN,
    },
  });

  onMounted(async () => {
    try {
      // Panggil beberapa API sekaligus
      const [res1, res2, res3, res4] = await Promise.all([
        api.get("/tables/mij6tb6xn3lvymj/records", {
          params: { offset: 0, limit: 25, where: "(poi_category,like,Featured Neighbourhood)", viewId: "vwhcpnq57a1h8azm" },
        }),
        api.get("/tables/mij6tb6xn3lvymj/records", {
          params: { offset: 0, limit: 4, where: "(poi_category,eq,Things To Do Items)", viewId: "vwhcpnq57a1h8azm" },
        }),
        api.get("/tables/mij6tb6xn3lvymj/records", {
          params: { offset: 4, limit: 2, where: "(poi_category,eq,Things To Do Items)", viewId: "vwhcpnq57a1h8azm" },
        }),
        api.get("/tables/mij6tb6xn3lvymj/records", {
          params: { offset: 0, limit: 10, where: "(poi_category,eq,Things To Do)", viewId: "vwhcpnq57a1h8azm" },
        }),
      ]);

      // Masukkan hasilnya ke state
      places.value = res1.data.list || [];
      recommended.value = res2.data.list || [];
      recommended2.value = res3.data.list || [];
      categories.value = res4.data.list || [];

      console.log("Places:", res1.data.list);
      console.log("Recommended:", res2.data.list);
      console.log("Categories:", res4.data.list);
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
