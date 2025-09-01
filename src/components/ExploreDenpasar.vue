<template>
	<!-- ===================== SLIDE 3 ===================== -->
  <section class="relative w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16">

    <!-- Background -->
    <img src="/images/bg3.png" alt="Latar belakang Citynet"
      class="absolute inset-0 w-full h-full object-cover object-top transform scale-105 z-0 pointer-events-none"
      aria-hidden="true" />
    <div class="absolute inset-0 bg-white/20 z-0"></div>


    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-0 z-0 pointer-events-none" aria-hidden="true"></div>

    <!-- Header -->
    <header class="relative z-10 self-start ml-28 mt-12">
      <h2 class="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900"
        style="text-shadow: 2px 2px 2px rgba(0,0,0,0.5);">
        AYO JELAJAH KOTA DENPASAR
      </h2>

      <!-- Progres Bar -->
      <div class="flex items-center space-x-6 pt-4 pb-8" aria-hidden="true">
        <div class="w-[500px] h-[4px] bg-gradient-to-r from-cyan-400 to-blue-600"></div>
        <div class="w-20 h-[4px] bg-black"></div>
      </div>
    </header>

    <!-- Wrapper Slider -->
    <div class="relative w-full max-w-6xl mx-auto overflow-hidden pt-10 pb-10 z-10">
      <!-- Card Container -->
      <div id="slider" class="flex gap-6 transition-transform duration-500 ease-in-out">

        <!-- Card 1 -->
        <article
          class="carousel-card flex-shrink-0 w-64 md:w-72 bg-white rounded-3xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src="/images/kantor-polisi.png" alt="Kantor Polisi" class="h-28 mb-4" />
          <h3 class="font-bold text-lg md:text-xl">KANTOR POLISI</h3>
          <a href="#"
            class="mt-3 px-4 py-2 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700  hover:scale-95 transition">
            Read More
          </a>
        </article>

        <!-- Card 2 -->
        <article
          class="carousel-card flex-shrink-0 w-64 md:w-72 bg-white rounded-3xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src="/images/layanan-kesehatan.png" alt="Layanan Kesehatan" class="h-28 mb-4" />
          <h3 class="font-bold text-lg md:text-xl">LAYANAN KESEHATAN</h3>
          <a href="#"
            class="mt-3 px-4 py-2 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 hover:scale-95 transition">
            Read More
          </a>
        </article>

        <!-- Card 3 -->
        <article
          class="carousel-card flex-shrink-0 w-72 md:w-80 bg-white rounded-3xl border border-gray-300 shadow-lg p-8 flex flex-col items-center text-center cursor-pointer transition-transform duration-300 scale-110">
          <img src="/images/wisata.png" alt="Tempat Wisata" class="h-32 mb-4" />
          <h3 class="font-bold text-xl md:text-2xl">TEMPAT WISATA</h3>
          <a href="#"
            class="mt-4 px-5 py-2 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 hover:scale-95 transition">
            Read More
          </a>
        </article>

        <!-- Card 4 -->
        <article
          class="carousel-card flex-shrink-0 w-64 md:w-72 bg-white rounded-3xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src="/images/kuliner.png" alt="Kuliner Kota Denpasar" class="h-28 mb-4" />
          <h3 class="font-bold text-lg md:text-xl">KULINER KOTA DENPASAR</h3>
          <a href="#"
            class="mt-3 px-4 py-2 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 hover:scale-95 transition">
            Read More
          </a>
        </article>

        <!-- Card 5 -->
        <article
          class="carousel-card flex-shrink-0 w-64 md:w-72 bg-white rounded-3xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src="/images/tempat-belanja.png" alt="Tempat Belanja Kota Denpasar" class="h-28 mb-4" />
          <h3 class="font-bold text-lg md:text-xl">TEMPAT BELANJA KOTA DENPASAR</h3>
          <a href="#"
            class="mt-3 px-4 py-2 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 hover:scale-95 transition">
            Read More
          </a>
        </article>

      </div>

      <!-- Fitur Slider -->
      <button id="prevBtn" aria-label="Previous slide"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-700 border border-gray-300 rounded-full shadow-md p-2 hover:bg-gray-100 transition z-20">
        <i class="fas fa-chevron-left text-2xl text-white hover:text-black transition z-20"></i>
      </button>
      <button id="nextBtn" aria-label="Next slide"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-700 border border-gray-300 rounded-full shadow-md p-2 hover:bg-gray-100 transition z-20">
        <i class="fas fa-chevron-right text-2xl text-white hover:text-black transition z-20"></i>
      </button>

      <!-- Indicator -->
      <nav id="indicators" aria-label="Slider indicators" class="flex justify-center space-x-2 mt-14 z-10 relative">
        <button class="w-3 h-3 rounded-full bg-cyan-400" aria-label="Slide 1"></button>
        <button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 2"></button>
        <button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 3"></button>
        <button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 4"></button>
        <button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 5"></button>
      </nav>
    </div>

    <!-- ICON -->
    <aside class="absolute bottom-6 right-16 flex flex-row items-center space-x-4 z-10">
      <button aria-label="Feedback"
        class="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600   first-letter: hover:bg-cyan-600 shadow-lg transition transform hover:scale-110 z-10">
        <i class="fas fa-comment-dots text-white text-2xl"></i>
      </button>

      <button aria-label="Call"
        class="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600  hover:bg-cyan-600 shadow-lg transition transform hover:scale-110 z-10">
        <i class="fas fa-phone text-white text-2xl"></i>
      </button>
    </aside>

  </section>
</template>