<template>
  <!-- Event Snapshots -->
  <section class="max-w-6xl mx-auto px-6 py-8">
    <h2 class="text-3xl font-bold text-black">Event Snapshots</h2>

    <!-- ================== IMAGES ================== -->
    <div class="flex items-center justify-between mb-6 pt-8">
      <h3 class="text-[20px] font-semibold">Highlight Images</h3>
      <router-link
        to="#"
        class="text-sm font-medium text-gray-600 border px-4 py-2 rounded-full hover:bg-gray-100 transition">
        View More ›
      </router-link>
    </div>

    <div class="relative">
      <!-- Tombol kiri -->
      <button
        @click="prevSlideImages"
        class="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100">
        <span class="material-icons">chevron_left</span>
      </button>

      <!-- Wrapper -->
      <div class="overflow-hidden" @mouseenter="pauseAutoSlideImages" @mouseleave="resumeAutoSlideImages">
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndexImages * 100}%)` }">
          <!-- Loop per SLIDE -->
          <div
            v-for="(slide, sIdx) in imageSlides"
            :key="sIdx"
            class="min-w-full flex gap-x-4">
            <figure
              v-for="(image, idx) in slide"
              :key="idx"
              class="w-1/3">
              <div class="bg-white rounded-lg shadow overflow-hidden relative">
                <img
                  :src="image.image"
                  :alt="image.caption"
                  class="w-full h-60 object-cover"/>
                <figcaption
                  class="absolute bottom-0 left-0 w-full p-3 bg-black/60 text-white text-sm">
                  {{ image.caption }}
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <!-- Tombol kanan -->
      <button
        @click="nextSlideImages"
        class="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>

    <!-- Dot navigasi Images -->
    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="idx in totalSlidesImages"
        :key="idx"
        @click="currentIndexImages = idx - 1"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="currentIndexImages === idx - 1 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"></span>
    </div>

    <!-- ================== VIDEOS ================== -->
    <div class="flex items-center justify-between mb-6 pt-12">
      <h3 class="text-[20px] font-semibold">Highlight Videos</h3>
      <router-link
        to="#"
        class="text-sm font-medium text-gray-600 border px-4 py-2 rounded-full hover:bg-gray-100 transition">
        View More ›
      </router-link>
    </div>

    <div class="relative">
     <!-- Tombol kiri -->
<button
  @click="prevSlideVideos"
  class="absolute -left-4 top-1/2 -translate-y-1/2
         bg-white hover:bg-gray-100 shadow-md rounded-full p-2 z-10">
  <span class="material-icons">chevron_left</span>
</button>


      <!-- Wrapper -->
      <div class="overflow-hidden" @mouseenter="pauseAutoSlideVideos" @mouseleave="resumeAutoSlideVideos">
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndexVideos * 100}%)` }">
          <!-- Loop per SLIDE -->
          <div
            v-for="(slide, sIdx) in videoSlides"
            :key="sIdx"
            class="min-w-full flex gap-x-4">
            <article
              v-for="(video, idx) in slide"
              :key="idx"
              class="w-1/2">
              <div class="bg-white rounded-xl overflow-hidden flex flex-col h-full">
                <!-- Thumbnail -->
                <div class="relative w-full h-72 bg-gray-100">
                  <img
                    :src="video.video"
                    :alt="video.title"
                    class="object-cover w-full h-full"/>
                </div>
                <!-- Konten -->
                <div class="p-5 space-y-2">
                  <h3 class="text-xl font-semibold text-gray-900">{{ video.title }}</h3>
                  <p class="text-sm text-gray-600">{{ video.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Tombol kanan -->
      <button
        @click="nextSlideVideos"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2  bg-white hover:bg-gray-100 shadow-md rounded-full p-2 z-10">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>

    <!-- Dot navigasi Videos -->
    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="idx in totalSlidesVideos"
        :key="idx"
        @click="currentIndexVideos = idx - 1"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="currentIndexVideos === idx - 1 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"></span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

/* Utility function untuk chunk array jadi slide */
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/*============== Images Section ==============*/
const currentIndexImages = ref(0);
const images = ref([
  {
     image: "/images/bg1.png",
     caption: "Caption 1" 
  },
  {
     image: "/images/bg2.png",
     caption: "Caption 2" 
  },
  { image: "/images/bg1.png", 
    caption: "Caption 3" 
  },
  { image: "/images/bg1.png", 
    caption: "Caption 4" 
  },
  { image: "/images/bg1.png", 
    caption: "Caption 5" 
  },
  { image: "/images/bg1.png", 
    caption: "Caption 6" 
  },
]);

const itemsPerSlideImages = 3;
const imageSlides = computed(() =>
  chunkArray(images.value, itemsPerSlideImages)
);
const totalSlidesImages = computed(() => imageSlides.value.length);

function nextSlideImages() {
  currentIndexImages.value =
    (currentIndexImages.value + 1) % totalSlidesImages.value;
}
function prevSlideImages() {
  currentIndexImages.value =
    (currentIndexImages.value - 1 + totalSlidesImages.value) %
    totalSlidesImages.value;
}

/*============== Videos Section ==============*/
const currentIndexVideos = ref(0);
const highlightVideos = ref([
  { 
    video: "/images/bg1.png", 
    title: "Judul 1", description: "Desc 1" 
  },
  { 
    video: "/images/bg2.png", 
    title: "Judul 2", description: "Desc 2" 
  },
  { 
    video: "/images/bg1.png", 
    title: "Judul 3", description: "Desc 3" 
  },
  {
     video: "/images/bg2.png", 
     title: "Judul 4", description: "Desc 4" 
  },
]);

const itemsPerSlideVideos = 2;
const videoSlides = computed(() =>
  chunkArray(highlightVideos.value, itemsPerSlideVideos)
);
const totalSlidesVideos = computed(() => videoSlides.value.length);

function nextSlideVideos() {
  currentIndexVideos.value =
    (currentIndexVideos.value + 1) % totalSlidesVideos.value;
}
function prevSlideVideos() {
  currentIndexVideos.value =
    (currentIndexVideos.value - 1 + totalSlidesVideos.value) %
    totalSlidesVideos.value;
}

/*============== Auto Slide ==============*/
let intervalImages = null;
let intervalVideos = null;

function startAutoSlideImages() {
  intervalImages = setInterval(nextSlideImages, 5000);
}
function pauseAutoSlideImages() {
  clearInterval(intervalImages);
}
function resumeAutoSlideImages() {
  startAutoSlideImages();
}

function startAutoSlideVideos() {
  intervalVideos = setInterval(nextSlideVideos, 5000);
}
function pauseAutoSlideVideos() {
  clearInterval(intervalVideos);
}
function resumeAutoSlideVideos() {
  startAutoSlideVideos();
}

onMounted(() => {
  startAutoSlideImages();
  startAutoSlideVideos();
});
onUnmounted(() => {
  pauseAutoSlideImages();
  pauseAutoSlideVideos();
});
</script>
