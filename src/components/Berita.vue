<template>
	<section class="relative w-full bg-white items-center py-16 overflow-hidden" aria-labelledby="berita-heading">

    <!-- Background -->
    <figure class="absolute inset-0 w-full h-full z-0" aria-hidden="true">
      <img src="/images/bg6.png" alt="Latar Belakang Berita" class="w-full h-full object-cover object-center" />
    </figure>

    <!-- Konten utama -->
    <div class="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center px-6 text-center">

      <!-- Judul -->
      <header class="max-w-4xl mx-auto text-center mb-28">
        <h2 class="text-5xl text-white font-bold tracking-wide mb-4 uppercase">
          BERITA TERBARU
        </h2>

        <!-- Progres Bar -->
        <div class="flex space-x-4 pb-8" aria-hidden="true">
          <div class="w-64 h-[4px] bg-gradient-to-r from-cyan-400 to-blue-600"></div>
          <div class="w-10 h-[4px] bg-black"></div>
        </div>
      </header>

      <!-- Slider Wrapper -->
      <div class="relative w-full flex flex-col items-center">

        <!-- Wrapper khusus -->
        <div id="sliderWrapperBerita" class="overflow-visible w-full max-w-6xl mx-auto">
          <div id="sliderBerita" class="flex gap-8 transition-transform duration-500 ease-in-out overflow-visible">

            <!-- Card Item 1 -->
            <article
              class="relative bg-white rounded-3xl shadow-lg w-80 px-6 pb-8 pt-20 text-left cursor-pointer flex-shrink-0 overflow-visible">
              <figure class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/images/logo.png" alt="Foto pejabat Denpasar"
                  class="w-28 h-28 rounded-full object-cover ring-[15px] ring-white shadow-xl" />
              </figure>
              <header class="mt-4">
                <p class="text-sm font-semibold text-cyan-600">Kamis, 03 April 2025</p>
                <h3 class="mt-2 text-gray-800 font-bold leading-snug">
                  Inovasi "Siap Selem" Dinas Perkimta Denpasar Libatkan Desa Adat
                </h3>
              </header>
              <p class="mt-3 text-gray-600 text-sm leading-relaxed">
                Cegah timbulnya kawasan kumuh baru dengan inovasi berbasis desa adat.
              </p>
              <footer>
                <a href="#"
                  class="inline-block mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium shadow hover:opacity-90 transition">
                  Read More
                </a>
              </footer>
            </article>

            <!-- Card Item 2 -->
            <article
              class="relative bg-white rounded-3xl shadow-lg w-80 px-6 pb-8 pt-20 text-left cursor-pointer flex-shrink-0 overflow-visible">
              <figure class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/images/logo_kominfo.png" alt="Sekda Alit Wiradana"
                  class="w-28 h-28 rounded-full object-cover ring-[15px] ring-white shadow-xl" />
              </figure>
              <header class="mt-4">
                <p class="text-sm font-semibold text-cyan-600">Jumat, 04 April 2025</p>
                <h3 class="mt-2 text-gray-800 font-bold leading-snug">
                  Sekda Alit Wiradana Hadiri Karya Melaspas Lan Padudusan Alit
                </h3>
              </header>
              <p class="mt-3 text-gray-600 text-sm leading-relaxed">
                Acara di Pura Mekah Desa Pekraman Pohgading, Denpasar.
              </p>
              <footer>
                <a href="#"
                  class="inline-block mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium shadow hover:opacity-90 transition">
                  Read More
                </a>
              </footer>
            </article>

            <!-- Card Item 3 -->
            <article
              class="relative bg-white rounded-3xl shadow-lg w-80 px-6 pb-8 pt-20 text-left cursor-pointer flex-shrink-0 overflow-visible">
              <figure class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/images/logo.png" alt="Walikota Jaya Negara"
                  class="w-28 h-28 rounded-full object-cover ring-[15px] ring-white shadow-xl" />
              </figure>
              <header class="mt-4">
                <p class="text-sm font-semibold text-cyan-600">Rabu, 02 April 2025</p>
                <h3 class="mt-2 text-gray-800 font-bold leading-snug">
                  Walikota Jaya Negara Hadiri Upacara Melaspas dan Pasupati
                </h3>
              </header>
              <p class="mt-3 text-gray-600 text-sm leading-relaxed">
                Pelawatan di Pura Dalem Penataran Sumerta, Denpasar.
              </p>
              <footer>
                <a href="#"
                  class="inline-block mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium shadow hover:opacity-90 transition">
                  Read More
                </a>
              </footer>
            </article>
          </div>
        </div>

        <!-- Tombol Navigasi -->
        <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 md:px-12 z-20">
          <button id="prevBtnBerita" type="button"
            class="bg-white/40 hover:bg-white text-black p-2 rounded-full shadow transition"
            aria-label="Slide sebelumnya">
            <i class="fas fa-chevron-left text-2xl"></i>
          </button>
          <button id="nextBtnBerita" type="button"
            class="bg-white/40 hover:bg-white text-black p-2 rounded-full shadow transition"
            aria-label="Slide berikutnya">
            <i class="fas fa-chevron-right text-2xl"></i>
          </button>
        </div>

        <!-- INDOCATOR -->
        <ul id="indicatorsBerita" class="mt-8 flex justify-center space-x-3" role="tablist"
          aria-label="Slide indicators">
          <li><button class="w-3 h-3 rounded-full bg-cyan-400" aria-label="Slide 1" aria-current="true"></button></li>
          <li><button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 2"></button></li>
          <li><button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 3"></button></li>
        </ul>

      </div>
    </div>
  </section>
</template>