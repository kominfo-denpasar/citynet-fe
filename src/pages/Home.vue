<template>
  <div class="bg-gray-50">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <HeroSection
      title="APEKSI CityNet 2025"
      subtitle="Kolaborasi menuju kota cerdas dan berkelanjutan"
      :backgroundImages="['/images/bg1.png']"
      :buttons="[
        { label: 'Daftar Sekarang', to: '/register', primary: true },
        { label: 'Lihat Agenda', to: '/list', primary: false }
      ]"
      :slideInterval="4000"
    />

    <!-- Accessibility Button -->
    <AccessibilityButton />

    <!-- Content Section -->
    <section
      class="relative w-full h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <!-- Background -->
      <img
        src="/images/bg2.png"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 bg-black bg-opacity-5 z-0"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-4xl text-white">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Title -->
          <h1
            class="text-3xl md:text-5xl font-extrabold tracking-wide mb-4 uppercase"
          >
            Executive Committee Meeting
          </h1>

          <!-- Progress Bar -->
          <div class="flex items-center space-x-12 pb-8 ml-4">
            <div
              class="w-96 h-[4px] bg-gradient-to-r from-cyan-400 to-blue-600"
            ></div>
            <div class="w-10 h-[4px] bg-white"></div>
          </div>

          <!-- Tabs -->
          <div class="grid grid-cols-2 gap-6 w-full mb-8">
            <button
              class="px-5 py-2 rounded-lg font-bold text-lg text-white shadow-md bg-gradient-to-r from-cyan-400 to-blue-600 w-full"
            >
              Executive Committee Meeting
            </button>

            <button
              class="px-5 py-2 rounded-lg font-bold text-lg bg-white text-gray-900 shadow-md w-full"
            >
              Congress
            </button>
          </div>
        </div>

        <!-- Description -->
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <p class="text-base md:text-lg leading-relaxed font-bold">
            The Executive Committee (ExCom) holds a meeting once a year to make
            key decisions on CityNet’s programs and initiatives...
          </p>
          <p class="text-base md:text-lg leading-relaxed font-bold">
            The ExCom consists of the President, President Emeritus, two
            Vice-Presidents, and nine members.
          </p>
        </div>

        <!-- Countdown -->
        <Countdown />
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
// import AccessibilityButton from "../components/AccessibilityButton.vue"
// import Countdown from "../components/Countdown.vue"
</script>


<!-- <template>
  <DefaultLayout>
    <div class="p-6 text-center">
      <h1 class="text-3xl font-bold mb-4">Welcome to CityNet</h1>
      <p class="text-gray-600">Ini halaman Home dengan layout global.</p>
    </div>
  </DefaultLayout>
</template>

<script setup>
//import DefaultLayout from '@/layouts/MainLayout.vue'
</script> -->