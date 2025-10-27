<template>
  <section
    class="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 sm:py-24 md:py-32 overflow-hidden"
  >
    <!-- Background -->
    <img
      src="/images/bg2.png"
      alt="CityNet Denpasar Background"
      class="absolute inset-0 w-full h-full object-cover z-0 animate-fadeInSlow"
    />
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl text-white space-y-5 sm:space-y-6 animate-fadeUp">
      <!-- Title -->
      <h1
        class="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide leading-tight uppercase"
      >
        CityNet × Denpasar 2025
      </h1>
      <p
        class="text-lg sm:text-xl md:text-2xl font-medium text-cyan-200 px-2 sm:px-0 animate-fadeIn delay-200"
      >
        Empowering Sustainable Urban Futures
      </p>

      <!-- Divider -->
      <div
        class="flex items-center justify-center space-x-3 sm:space-x-6 pt-3 sm:pt-4 animate-fadeIn delay-300"
      >
        <div
          class="w-20 sm:w-32 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600"
        ></div>
        <div class="w-6 sm:w-8 h-[3px] bg-white"></div>
        <div
          class="w-20 sm:w-32 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400"
        ></div>
      </div>

      <!-- Description -->
      <div
        class="max-w-3xl mx-auto text-center pt-2 sm:pt-4 px-3 sm:px-0 animate-fadeUp delay-400"
      >
        <p
          class="text-sm sm:text-base md:text-lg leading-relaxed font-medium text-gray-100"
        >
          Denpasar proudly welcomes CityNet members and urban innovators from
          across Asia to collaborate, share, and build smarter, greener, and
          more inclusive cities together.
        </p>
      </div>

      <!-- Countdown -->
      <div class="pt-5 sm:pt-6 animate-fadeIn delay-500">
        <p
          class="text-cyan-300 font-semibold uppercase tracking-wide mb-2 text-xs sm:text-sm md:text-base"
        >
          Countdown to the CityNet Executive Committee Meeting
        </p>
        <Countdown />
      </div>

      <!-- Buttons -->
      <div
        class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 animate-fadeUp delay-600"
      >
        <a
          href="https://citynet-ap.org/front/design/event_detail?idx=63"
          target="_blank"
          class="inline-flex px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-base sm:text-md text-white shadow-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 transition-all"
        >
          Check Web <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-2 mt-1"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
        </a>
        <a
            href="https://drive.google.com/file/d/1QwiHIwca-VGRL4a59O0ImP0s5l56TPoJ/view?usp=sharing"
            target="_blank"
            class="inline-flex px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold bg-white hover:bg-gray-100 transition-all text-center"
          >
            ExCom Program
          </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Countdown from "@/components/Countdown.vue";
</script>

<style scoped>
/* ✨ Animation Keyframes */
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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 🎬 Animation Utilities */
.animate-fadeUp {
  animation: fadeUp 1s ease-out forwards;
}
.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}
.animate-fadeInSlow {
  animation: fadeIn 2s ease-out forwards;
}

/* ⏱️ Delays (simple & reusable) */
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}
</style>
