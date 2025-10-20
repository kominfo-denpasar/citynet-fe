<template>
  <section class="relative py-16 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase">
          Discover Denpasar
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the vibrant culture, local wisdom, and modern innovation that make Denpasar
          a truly unique and inspiring city.
        </p>
      </div>

      <!-- Grid Items -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, index) in discoveries"
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-700"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
          ></div>
          <div class="absolute bottom-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-200 mb-4">{{ item.desc }}</p>
            <a
              v-if="item.link && item.link.startsWith('http')"
              :href="item.link" target="_blank"
              class="inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Explore
            </a>

            <RouterLink
              v-else
              :to="item.link"
              class="inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Explore
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const discoveries = [
  {
    title: "Cultural & Tourism",
    desc: "Experience temples, art villages, and Balinese traditions that color the heart of Denpasar.",
    image: "./images/bg2.png",
    link: "https://denpasartourism.com",
  },
  {
    title: "Things To Do",
    desc: "From traditional markets to modern attractions, find activities that suit every interest.",
    image: "/images/bg2.png",
    link: "https://denpasartourism.com/en/activity",
  },
  {
    title: "Travel Tips",
    desc: "Get practical advice on transportation, accommodations, and local customs for a smooth visit.",
    image: "/images/bg2.png",
    link: "/plan/travel-tips",
  }
];
</script>

<style scoped>
/* Responsiveness fix for smaller screens */
@media (max-width: 640px) {
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  h2 {
    font-size: 1.75rem;
  }
}
</style>
