<template>
  <section class="relative w-full h-screen flex items-center text-white overflow-hidden pt-20">
    <!-- Background -->
    <img
      src="/images/bg1.png"
      alt="Latar belakang Citynet"
      class="absolute inset-0 w-full h-full object-cover object-top"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-black bg-opacity-0" aria-hidden="true"></div>

    <div class="relative z-10 max-w-6xl ml-24 pl-16 pr-6 w-full flex flex-col items-start pt-20">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-5">
        <ol class="flex items-center gap-3 text-white text-[25px] drop-shadow-md font-bold">
          <li>
            <RouterLink to="/" class="flex items-center gap-2 hover:underline">
              <i class="fa fa-home text-2xl"></i>
              <span>Home</span>
            </RouterLink>
          </li>
          <li aria-hidden="true" class="text-3xl">›</li>
          <li>
            <RouterLink to="/get-involved" class="hover:underline">Get Involved</RouterLink>
          </li>
          <li aria-hidden="true" class="text-3xl">›</li>
          <li>
            <RouterLink to="/join-network" class="hover:underline">Join Our Network</RouterLink>
          </li>
        </ol>
      </nav>

      <!-- Heading -->
      <div>
        <h1
          class="text-[40px] font-bold leading-tight"
          style="text-shadow: 2px 2px 2px rgba(0,0,0,0.5);"
        >
          LEGISLATIV
        </h1>
        <p class="text-[25px] font-bold leading-snug max-w-3xl">
          Join Us. Shape the Future of Urban Development with CITYNET
        </p>
      </div>

      <!-- Progress Bar -->
      <div class="flex items-center mt-6 gap-4" role="presentation">
        <div class="w-[150px] h-[4px] bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        <div class="w-10 h-[4px] bg-black"></div>
      </div>
    </div>

    <!-- Fitur Slider -->
    <nav class="absolute inset-0 flex items-center justify-between px-8" aria-label="Slider controls">
      <div class="absolute left-8 top-[60%] z-10">
        <button type="button" aria-label="Previous slide" class="text-white hover:text-black text-5xl">
          <i class="fa fa-chevron-left"></i>
        </button>
      </div>
      <div class="absolute right-8 top-[60%] z-10">
        <button type="button" aria-label="Next slide" class="text-white hover:text-black text-5xl">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </nav>
  </section>
</template>

<script setup>
// kalau nanti butuh props/emit, bisa ditambahkan di sini
</script>
