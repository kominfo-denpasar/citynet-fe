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
      <!-- Overview -->
      <OverviewSection />
      <!-- End Overview -->

      <!-- Destinasi Populer -->
      <InterestingPoi :places="interestingPoi" />

      <!-- Rekomendasi -->
      <RecommendedSection :datas="recommendedPoi" />
      <!-- End recommended -->

      <!-- Semua Kategori -->
      <!-- Title -->
			<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Explore Denpasar by Category</h2>
				<p class="mt-1 text-gray-600 dark:text-neutral-400">Check and find out all the things in Denpasar.</p>
			</div>
			<!-- End Title -->
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
  import OverviewSection from "@/components/OverviewSection.vue";
  import RecommendedSection from "../../../components/RecommendedSection.vue";

  const recommended = ref([]);
  const categories = ref([]);
  const places = ref([]);

  const loading = ref(true);
  const error = ref(null);

  const recommendedPoi = computed(() => recommended.value.slice(0, 6));
  const categoriesPoi = computed(() => categories.value.slice(0, 6));
  const interestingPoi = computed(() => places.value.slice(0, 6));

  onMounted(async () => {
    try {
      const res = await fetch("/api-tourism/api-contoh/citynet/tourism-index.json");
      if (!res.ok) throw new Error("Gagal memuat data API");
      const data = await res.json();
      recommended.value = data.recommended || [];
      categories.value = data.categories || [];
      places.value = data.interesting || [];

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
