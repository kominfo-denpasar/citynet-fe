<template>
	<section id="galeri" class="relative w-full bg-white py-16 overflow-hidden" aria-labelledby="galeri-heading">

    <!-- Background -->
    <figure class="absolute inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
      <img src="/images/bg3.png" alt="Latar belakang Citynet"
        class="w-full h-full object-cover object-top transform scale-105" />
    </figure>
    <div class="absolute inset-0 bg-white/20 z-0" aria-hidden="true"></div>

    <!-- Konten -->
    <div class="relative z-10 max-w-7xl grid grid-cols-1 md:grid-cols-5 pb-6 gap-12 items-center">

      <!-- Galeri Gambar -->
      <div class="col-span-3 grid grid-cols-2 gap-4 w-full">
        <!-- Kolom kiri -->
        <div class="grid grid-rows-4">
          <figure>
            <img src="/images/bg1.png" alt="Pertunjukan seni" class="w-full h-32 object-cover shadow-md" />
          </figure>
          <figure>
            <img src="/images/bg2.png" alt="Tari tradisional" class="w-full h-32 object-cover shadow-md" />
          </figure>
          <figure>
            <img src="/images/bg3.png" alt="Budaya Bali" class="w-full h-32 object-cover shadow-md" />
          </figure>
          <figure>
            <img src="/images/bg4.png" alt="Acara kebudayaan" class="w-full h-32 object-cover shadow-md" />
          </figure>
        </div>

        <!-- Kolom kanan -->
        <div class="grid grid-rows-2 gap-2 h-full">
          <figure>
            <img src="/images/bg2.png" alt="Kegiatan rapat" class="w-full h-full object-cover shadow-md" />
          </figure>
          <div class="grid grid-cols-2 gap-2 h-full">
            <figure>
              <img src="/images/bg4.png" alt="Diskusi 1" class="w-full h-full object-cover shadow-md" />
            </figure>
            <figure>
              <img src="/images/bg4.png" alt="Diskusi 2" class="w-full h-full object-cover shadow-md" />
            </figure>
          </div>
        </div>
      </div>

      <!-- Teks Galeri -->
      <article class="col-span-2 space-y-6 pl-6">
        <header>
          <h2 id="galeri-heading" class="text-5xl font-bold uppercase text-black tracking-wide"
            style="text-shadow: 2px 2px 2px rgba(0,0,0,0.5);">
            Galeri
          </h2>

          <!-- Progress bar -->
          <div class="flex items-center mt-2 space-x-3" aria-hidden="true">
            <div class="w-[140px] h-[4px] bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            <div class="w-8 h-[4px] bg-black"></div>
          </div>
        </header>
        <p class="text-[22px] text-black font-bold leading-normal">
          The Highest Glory of the Citizen’s <br> Revolution was this; it connected <br>
          in one indissoluble bond the <br> principles of civil government <br>
          with the principles of humanity. <br>
          Get Egovenz Local Government <br>
          WordPress Theme today and <br> launch your website.
        </p>
      </article>
    </div>

    <!-- Navigasi Slide -->
    <nav class="absolute inset-x-0 top-1/2 flex justify-between px-28 -translate-y-1/2 z-20 pointer-events-none"
      aria-label="Navigasi galeri">
      <button
        class="bg-white/50 text-black hover:bg-blue-600 hover:text-white p-2 rounded-full transition pointer-events-auto"
        aria-label="Slide sebelumnya">
        <i class="fas fa-chevron-left text-2xl"></i>
      </button>

      <button
        class="bg-cyan-500 hover:bg-blue-600 hover:text-white text-white p-2 rounded-full transition pointer-events-auto"
        aria-label="Slide berikutnya">
        <i class="fas fa-chevron-right text-2xl"></i>
      </button>
    </nav>

    <!-- Indicators -->
    <ol class="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3" aria-label="Indikator slide">
      <li><button class="w-3 h-3 rounded-full bg-cyan-400" aria-current="true" aria-label="Slide 1"></button></li>
      <li><button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 2"></button></li>
      <li><button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 3"></button></li>
    </ol>

    <!-- Tombol Aksi -->
    <aside class="absolute bottom-6 right-16 flex flex-row items-center space-x-4 z-10">
      <button aria-label="Feedback"
        class="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:bg-cyan-600 shadow-lg transition transform hover:scale-110 z-10">
        <i class="fas fa-comment-dots text-white text-2xl"></i>
      </button>

      <button aria-label="Call"
        class="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:bg-cyan-600 shadow-lg transition transform hover:scale-110 z-10">
        <i class="fas fa-phone text-white text-2xl"></i>
      </button>
    </aside>

  </section>
</template>