<template>
	<section id="video-terbaru" class="relative w-full py-16 bg-gray-100/80 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <header class="max-w-4xl mx-auto text-center mb-12">
        <h2 class="text-5xl text-black font-bold tracking-wide uppercase mb-4">
          VIDEO TERBARU
        </h2>

        <!-- Progress Bar -->
        <div class="flex ml-64 space-x-4" aria-hidden="true">
          <div class="w-60 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded"></div>
          <div class="w-10 h-1 bg-black rounded"></div>
        </div>
      </header>

      <!-- Slider Wrapper -->
      <div class="relative">

        <!-- Slider Cards -->
        <ul id="videoSlider" class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          role="list">

          <!-- Card Item 1 -->
          <li class="video-card flex-shrink-0 w-64 snap-center" role="listitem">
            <article>
              <figure class="rounded-[40px] overflow-hidden">
                <img src="/images/bg1.png" alt="Video 1" class="w-full h-80 object-cover">
              </figure>
              <figcaption class="mt-3 text-center">
                <time class="text-sm font-bold text-blue-600">Senin, 16 September 2024</time>
                <h3 class="font-semibold text-gray-900 mt-1 mb-4">
                  Kodar Jalan-Jalan Eps Smart City Forum At The Meru Sanur
                </h3>
                <a href="#"
                  class="inline-block mt-6 px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 hover:scale-95 transition">
                  Read More
                </a>
              </figcaption>
            </article>
          </li>

          <!-- Card Item2 -->
          <li class="video-card flex-shrink-0 w-64 snap-center" role="listitem">
            <article>
              <figure class="rounded-[40px] overflow-hidden">
                <img src="/images/bg2.png" alt="Video 2" class="w-full h-80 object-cover">
              </figure>
              <figcaption class="mt-3 text-center">
                <time class="text-sm font-bold text-blue-600">Minggu, 15 September 2024</time>
                <h3 class="font-semibold text-gray-900 mt-1 mb-4">
                  Sekda Alit Wiradana Jadi Narasumber Rakor Tanggap Ancaman Narkoba
                </h3>
                <a href="#"
                  class="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 hover:scale-95 transition">
                  Read More
                </a>
              </figcaption>
            </article>
          </li>

          <!-- Card Item 3 -->
          <li class="video-card flex-shrink-0 w-64 snap-center" role="listitem">
            <article>
              <figure class="rounded-[40px] overflow-hidden">
                <img src="/images/bg4.png" alt="Video 3" class="w-full h-80 object-cover">
              </figure>
              <figcaption class="mt-3 text-center">
                <time class="text-sm font-bold text-blue-600">Minggu, 15 September 2024</time>
                <h3 class="font-semibold text-gray-900 mt-1 mb-4">
                  Sukseskan Pilkada Tahun 2024 Sekda Alit Wiradana Hadiri Pelantikan
                </h3>
                <a href="#"
                  class="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 hover:scale-95 transition">
                  Read More
                </a>
              </figcaption>
            </article>
          </li>

          <!-- Card Item 4 -->
          <li class="video-card flex-shrink-0 w-64 snap-center" role="listitem">
            <article>
              <figure class="rounded-[40px] overflow-hidden">
                <img src="/images/bg4.png" alt="Video 4" class="w-full h-80 object-cover">
              </figure>
              <figcaption class="mt-3 text-center">
                <time class="text-sm font-bold text-blue-600">Minggu, 15 September 2024</time>
                <h3 class="font-semibold text-gray-900 mt-1 mb-4">
                  Serangkaian Kegiatan Puncak HUT ke 44 Dekranasda dan Puncak HKG PKK ke 52
                </h3>
                <a href="#"
                  class="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 hover:scale-95 transition">
                  Read More
                </a>
              </figcaption>
            </article>
          </li>

          <!-- Card Item 5 -->
          <li class="video-card flex-shrink-0 w-64 snap-center" role="listitem">
            <article>
              <figure class="rounded-[40px] overflow-hidden">
                <img src="/images/bg4.png" alt="Video 5" class="w-full h-80 object-cover">
              </figure>
              <figcaption class="mt-3 text-center">
                <time class="text-sm font-bold text-blue-600">Minggu, 15 September 2024</time>
                <h3 class="font-semibold text-gray-900 mt-1 mb-4">
                  Serangkaian Kegiatan Puncak HUT ke 44 Dekranasda dan Puncak HKG PKK ke 52
                </h3>
                <a href="#"
                  class="inline-block px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 hover:scale-95 transition">
                  Read More
                </a>
              </figcaption>
            </article>
          </li>
        </ul>
      </div>

      <!-- FITUR Slide -->
      <nav class="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-2 pointer-events-none"
        aria-label="Kontrol slider">
        <button id="videoPrevBtn" type="button"
          class="pointer-events-auto bg-blue-400 hover:bg-blue-600 text-white p-2 rounded-full shadow transition">
          <i class="fas fa-chevron-left text-2xl"></i>
        </button>
        <button id="videoNextBtn" type="button"
          class="pointer-events-auto bg-blue-400 hover:bg-blue-600 text-white p-2 rounded-full shadow transition">
          <i class="fas fa-chevron-right text-2xl"></i>
        </button>
      </nav>

      <!-- Indicators -->
      <div id="videoIndicators" class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3"
        aria-label="Indikator slide">
        <!-- Dihandle JS -->
      </div>

      <!-- Icon -->
      <aside class="absolute bottom-2 right-6 flex flex-row items-center space-x-4 z-10">
        <button aria-label="Feedback"
          class="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:bg-cyan-600 shadow-lg transition transform hover:scale-110">
          <i class="fas fa-comment-dots text-white text-2xl"></i>
        </button>
        <button aria-label="Call"
          class="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:bg-cyan-600 shadow-lg transition transform hover:scale-110">
          <i class="fas fa-phone text-white text-2xl"></i>
        </button>
      </aside>

    </div>
  </section>
</template>