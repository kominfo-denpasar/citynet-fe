<template>
  <!-- Related News Section-->
  <section class="max-w-6xl mx-auto px-6 py-8">
    <div class="flex items-center justify-between mb-6 pt-12">
      <h3 class="text-3xl font-bold text-black">Related News</h3>
      <router-link to="#"
        class="text-sm font-medium text-gray-600 border px-4 py-2 rounded-full hover:bg-gray-100 transition">
        View More ›
      </router-link>
    </div>

    <div class="relative" @mouseenter="pauseAutoSlide" @mouseleave="resumeAutoSlide">
      <!-- Tombol Kiri -->
      <button @click="prevSlideNews"
        class="absolute -left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 shadow-md rounded-full p-2 z-10">
        <span class="material-icons">chevron_left</span>
      </button>

      <!-- Wrapper Slider -->
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndexNews * 100}%)` }">
          <article v-for="(news, idx) in highlightNews" :key="idx"
            class="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-2">
            <div class="bg-white shadow-sm overflow-hidden flex flex-col">
              <!-- Thumbnail -->
              <div class="flex items-center justify-center w-full bg-gray-50 relative">
                <img :src="news.image" :alt="news.title" class="object-cover w-full h-52 rounded-lg" />
              </div>

              <!-- Konten -->
              <div class="pt-4 space-y-2">
                <h3 class="text-lg font-semibold">{{ news.title }}</h3>
                <p class="text-sm text-gray-700">{{ news.date }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Tombol Kanan -->
      <button @click="nextSlideNews"
        class="absolute -right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 shadow-md rounded-full p-2 z-10">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>

    <!-- Dots Navigation -->
    <div class="flex justify-center mt-4 space-x-2">
      <button v-for="idx in totalSlidesNews" :key="idx" @click="goToSlide(idx - 1)" class="w-3 h-3 rounded-full"
        :class="currentIndexNews === idx - 1 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"></button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

/*=============== Script Related News =================*/
const currentIndexNews = ref(0);

/* Data Dummy */
const highlightNews = ref([
  { image: "/images/bg1.png", title: "Judul 1", date: "1 September 2025" },
  { image: "/images/bg2.png", title: "Judul 2", date: "2 September 2025" },
  { image: "/images/bg1.png", title: "Judul 3", date: "3 September 2025" },
  { image: "/images/bg2.png", title: "Judul 4", date: "4 September 2025" },
  { image: "/images/bg1.png", title: "Judul 5", date: "5 September 2025" },
  { image: "/images/bg2.png", title: "Judul 6", date: "6 September 2025" },
]);

/* Hitung total slides (3 item per slide) */
const itemsPerSlideNews = 3;
const totalSlidesNews = computed(() =>
  Math.ceil(highlightNews.value.length / itemsPerSlideNews)
);

/* Navigasi Manual */
function nextSlideNews() {
  if (!totalSlidesNews.value) return;
  currentIndexNews.value =
    (currentIndexNews.value + 1) % totalSlidesNews.value;
}

function prevSlideNews() {
  if (!totalSlidesNews.value) return;
  currentIndexNews.value =
    (currentIndexNews.value - 1 + totalSlidesNews.value) %
    totalSlidesNews.value;
}

/* Navigasi langsung */
function goToSlide(index) {
  currentIndexNews.value = index;
}

/* Auto Slide setiap 5 detik */
let intervalId = null;

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlideNews();
  }, 5000);
}

function pauseAutoSlide() {
  if (intervalId) clearInterval(intervalId);
}

function resumeAutoSlide() {
  startAutoSlide();
}

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  pauseAutoSlide();
});
</script>
