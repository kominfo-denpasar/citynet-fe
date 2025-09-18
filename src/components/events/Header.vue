<template>
<!-- ================= HEADER ================= -->
    <header class="relative w-full h-60 bg-cover bg-center flex flex-col justify-center"
      style="background-image: url('/images/bg4.png');">
      <div class="absolute inset-0"></div>

      <div class="relative z-10 max-w-6xl text-white container mx-auto px-4 sm:px-6 md:px-8 md:pl-20 lg:pl-28">
        <!-- Breadcrumb -->
        <nav aria-label="Breadcrumb"
          class="text-xs sm:text-sm md:text-base mb-2 flex flex-wrap items-center gap-1 text-gray-200">
          <router-link to="/" class="hover:underline flex items-center gap-1 hover:font-semibold">
            <span class="material-icons text-sm sm:text-base md:text-lg">home</span>
            Home
          </router-link>
          <span aria-hidden="true">›</span>

          <router-link to="/what-we-do" class="hover:underline hover:font-semibold">
            What We do
          </router-link>
          <span aria-hidden="true">›</span>

          <router-link to="/what-we-do/legislative" class="hover:underline hover:font-semibold">
            Legislative
          </router-link>
          <span aria-hidden="true">›</span>

          <router-link to="/what-we-do/legislative/archive" class="hover:underline hover:font-semibold">
            Archive
          </router-link>
        </nav>

        <!-- Header Title -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4">
          Legislative
        </h1>
        <p class="text-sm sm:text-base md:text-lg text-gray-200 max-w-full">
          Our Leadership Bodies Convene to Ensure Strong Governance and Propel
          CITYNET's Strategic Vision
        </p>
      </div>
    </header>
</template>