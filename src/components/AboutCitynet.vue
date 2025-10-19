<template>
  <section
    id="about-citynet"
    class="relative bg-white py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
  >
    <!-- Background Accent -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-white opacity-70"
    ></div>

    <div
      class="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      <!-- Video Section -->
      <div
        class="relative w-full h-72 sm:h-96 overflow-hidden animate-fadeUp"
      >
        <video
          ref="videoRef"
          src="@/data/vod.mp4"
          playsinline
          loop
          class="absolute w-full h-full"
        ></video>

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
        ></div>
      </div>

      <!-- Text Section -->
      <div class="space-y-6 animate-fadeUp delay-200">
        <h2
          class="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight"
        >
          About <span class="text-cyan-600">Denpasar</span> &
          <span class="text-blue-600">CityNet</span>
        </h2>

        <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
          The CityNet × Denpasar collaboration represents a shared vision for
          sustainable, inclusive, and innovative urban development. As one of
          Indonesia’s leading smart cities, Denpasar plays a vital role in
          fostering regional dialogue and partnership among Asian cities.
        </p>

        <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
          Through CityNet, Denpasar connects with global networks to exchange
          knowledge, promote best practices, and accelerate the transition
          toward smarter and greener city governance.
        </p>

        <div class="pt-2 flex flex-col sm:flex-row gap-4">
          <RouterLink
            to="/about-denpasar"
            class="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all text-center"
          >
            Learn About Denpasar
          </RouterLink>
          <a
            href="https://citynet-ap.org"
            target="_blank"
            class="inline-flex px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition-all text-center"
          >
            Visit CityNet Official Site <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-2 mt-1"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoRef = ref(null)
let observer

onMounted(() => {
  const options = {
    root: null,
    threshold: 0.5
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = videoRef.value
      if (video) {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    })
  }, options)

  if (videoRef.value) observer.observe(videoRef.value)
})

onBeforeUnmount(() => {
  if (observer && videoRef.value) observer.unobserve(videoRef.value)
})
</script>

<style scoped>
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeUp {
  animation: fadeUp 1s ease-out forwards;
  opacity: 0;
}

.delay-200 {
  animation-delay: 0.2s;
}

@media (prefers-reduced-motion: no-preference) {
  [class*="animate-fadeUp"] {
    view-timeline-name: --fadeup;
    view-timeline-axis: block;
    animation-timeline: --fadeup;
    animation-range: entry 10% cover 30%;
  }
}
</style>
