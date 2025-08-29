<template>
  <section class="relative w-full h-screen flex flex-col justify-center overflow-hidden">
    <!-- Background slideshow -->
    <div class="absolute inset-0 w-full h-full z-0">
      <transition-group name="fade" tag="div">
        <img
          v-for="(img) in [currentBackground]"
          :key="img"
          :src="img"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </transition-group>
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 uppercase drop-shadow-lg">
        {{ title }}
      </h1>
      <p class="text-lg md:text-xl max-w-2xl mb-8 font-medium">
        {{ subtitle }}
      </p>

      <div class="flex space-x-4">
        <RouterLink
          v-for="(btn, index) in buttons"
          :key="index"
          :to="btn.to"
          class="px-6 py-3 rounded-xl font-bold shadow-md transition"
          :class="btn.primary
            ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:scale-105'
            : 'bg-white text-gray-900 hover:bg-gray-100'"
        >
          {{ btn.label }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  title: { type: String, default: "Welcome to CityNet Event" },
  subtitle: { type: String, default: "Building sustainable cities together through collaboration, innovation, and inclusivity." },
  backgroundImages: {
    type: Array,
    default: () => ["/images/bg1.png"]
  },
  slideInterval: { type: Number, default: 5000 },
  buttons: {
    type: Array,
    default: () => [
      { label: "Learn More", to: "/" },
      { label: "Register", to: "/register" }
    ]
  }
});

// state slideshow
const currentIndex = ref(0);
const currentBackground = ref(props.backgroundImages[0]);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.backgroundImages.length;
    currentBackground.value = props.backgroundImages[currentIndex.value];
  }, props.slideInterval);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
