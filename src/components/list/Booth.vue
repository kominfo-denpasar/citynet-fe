<template>
  <!-- Booth Section -->
  <section class="max-w-6xl mx-auto px-6 py-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-3xl font-bold text-black">Booth</h2>
      <router-link
        to="#"
        class="text-sm font-medium text-gray-600 border px-4 py-2 rounded-full hover:bg-gray-100 transition">
        View More ›
      </router-link>
    </div>

    <div class="relative" @mouseenter="pauseAutoSlide" @mouseleave="resumeAutoSlide">
      <!-- Tombol Kiri -->
      <button
        @click="prevSlideBooth"
        class="absolute -left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 shadow-md rounded-full p-2 z-10">
        <span class="material-icons">chevron_left</span>
      </button>

      <!-- Wrapper -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndexBooth * 100}%)` }">
          <article
            v-for="(booth, idx) in booths"
            :key="idx"
            class="min-w-full md:min-w-[33.33%] px-2">
            <div class="bg-white rounded-lg shadow overflow-hidden relative">
              <img
                :src="booth.image"
                :alt="booth.caption"
                class="w-full h-60 object-cover"/>
              <figcaption
                class="absolute bottom-0 left-0 w-full p-3 bg-black/60 text-white text-sm">
                {{ booth.caption }}
              </figcaption>
            </div>
          </article>
        </div>
      </div>

      <!-- Tombol Kanan -->
      <button
        @click="nextSlideBooth"
        class="absolute -right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 shadow-md rounded-full p-2 z-10">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>

    <!-- Dots Navigation -->
    <div class="flex justify-center mt-4 space-x-2">
      <button
        v-for="idx in totalSlidesBooth"
        :key="idx"
        @click="goToSlide(idx - 1)"
        class="w-3 h-3 rounded-full"
        :class="currentIndexBooth === idx - 1 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

/*================== Booth Section ==================*/
const currentIndexBooth = ref(0);

/* Data Dummy */
const booths = ref([
  {
     image: "/images/bg1.png", 
     caption: "Caption: Name, Title, Material, Size, Date, Etc" 
  },
  {
     image: "/images/bg2.png", 
     caption: "Caption: Name, Title, Material, Size, Date, Etc" 
  },
  {
     image: "/images/bg1.png", 
     caption: "Caption: Name, Title, Material, Size, Date, Etc" 
  },
  {
     image: "/images/bg2.png", 
     caption: "Caption: Name, Title, Material, Size, Date, Etc" 
  },
  {
     image: "/images/bg2.png", 
     caption: "Caption: Name, Title, Material, Size, Date, Etc" 
  },
  {
     image: "/images/bg2.png", 
     caption: "Caption: Name, Title, Material, Size, Date, Etc" 
  },
]);

/* Hitung total slides (3 item per slide ) */
const itemsPerSlideBooth = 3;
const totalSlidesBooth = computed(() =>
  Math.ceil(booths.value.length / itemsPerSlideBooth)
);

/* Navigasi Manual */
function nextSlideBooth() {
  currentIndexBooth.value =
    (currentIndexBooth.value + 1) % totalSlidesBooth.value;
}

function prevSlideBooth() {
  currentIndexBooth.value =
    (currentIndexBooth.value - 1 + totalSlidesBooth.value) %
    totalSlidesBooth.value;
}

/* Navigasi langsung ke slide tertentu */
function goToSlide(index) {
  currentIndexBooth.value = index;
}

/* Auto Slide setiap 5 detik */
let intervalId = null;

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlideBooth();
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

