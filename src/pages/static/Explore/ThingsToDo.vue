<template>
  <StaticPage 
    :breadcrumbs="[
      { label: 'Home', link: '/' },
      { label: 'Explore' },
      { label: 'Tourism & Culture', link: '/tourism' },
    ]"
    title="Things To Do"
    subtitle="Explore handpicked landmarks, cultural hubs, beaches and local favourites across the city."
    background="/images/bg4.png"
  >
    <ThingsToDo />
  </StaticPage>
</template>

<script setup>
  import { ref, onMounted, computed } from "vue";
  import StaticPage from "@/layouts/StaticPage.vue";
  import { useHead } from '@vueuse/head'
  import ThingsToDo from "@/components/ListTourism.vue";

  import axios from "axios";

const recommended = ref([]);
const categories = ref([]);
const places = ref([]);

const loading = ref(true);
const error = ref(null);

const recommendedPoi = computed(() => recommended.value);
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
    const [res1, res2, res3] = await Promise.all([
      api.get("/tables/mij6tb6xn3lvymj/records", {
        params: { offset: 0, limit: 2, viewId: "vwhcpnq57a1h8azm" },
      }),
      api.get("/tables/mij6tb6xn3lvymj/records", {
        params: { offset: 0, limit: 10, where: "(poi_category,like,Things To Do)", viewId: "vwhcpnq57a1h8azm" },
      }),
      api.get("/tables/mij6tb6xn3lvymj/records", {
        params: { offset: 0, limit: 25, where: "(poi_category,like,Featured Neighbourhood)", viewId: "vwhcpnq57a1h8azm" },
      }),
    ]);

    // Masukkan hasilnya ke state
    recommended.value = res1.data.list || [];
    categories.value = res2.data.list || [];
    places.value = res3.data.list || [];

    console.log("Recommended:", res1.data.list);
    console.log("Categories:", res2.data.list);
    console.log("Places:", res3.data.list);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

  // onMounted(async () => {
  //   try {
  //     const res = await fetch("/api-tourism/api-contoh/citynet/tourism-index.json");
  //     if (!res.ok) throw new Error("Gagal memuat data API");
  //     const data = await res.json();
  //     recommended.value = data.recommended || [];
  //     categories.value = data.categories || [];
  //     places.value = data.interesting || [];

  //     console.log(data);
  //   } catch (err) {
  //     error.value = err.message;
  //   } finally {
  //     loading.value = false;
  //   }
  // });

  useHead({
    title: "Things To Do | Denpasar - CityNet 2025",
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
