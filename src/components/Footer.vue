<template>
	<footer class="bg-white w-full">

    <div class="flex flex-col md:flex-row">

      <!-- Gambar kiri -->
      <figure class="w-1/2 md:w-1/2">
        <img src="/images/bg4.png" alt="Map Denpasar" class="w-full h-48 md:h-full object-cover">
      </figure>

      <!-- Konten kanan -->
      <section class="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-12">

        <!-- Grid untuk konten dalam -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- Info Utama -->
          <article class="flex flex-col space-y-6">
            <!-- Judul -->
            <h2 class="text-3xl md:text-3xl font-semibold text-black leading-snug">
              PEMERINTAH<br>KOTA DENPASAR
            </h2>

            <!-- Info Kontak -->
            <address class="not-italic space-y-3 text-black font-bold text-sm leading-relaxed">
              <p class="flex items-start">
                <span class="mr-3 text-cyan-600 text-2xl"><i class="fas fa-map-marker-alt"></i></span>
                Graha Sewaka Dharma Lumintang Lt. III, Kota Denpasar, Bali - Indonesia
              </p>
              <p class="flex items-center">
                <span class="mr-3 text-cyan-600 text-2xl"><i class="fas fa-phone-alt"></i></span>(0361) 431229
              </p>
              <p class="flex items-center">
                <span class="mr-3 text-cyan-600 text-2xl"><i class="fas fa-envelope"></i></span>
                <a href="mailto:kominfo@denpasarkota.go.id">kominfo@denpasarkota.go.id</a>
              </p>
              <p class="flex items-center">
                <span class="mr-3 text-cyan-600 text-2xl"><i class="fas fa-globe"></i></span>
                <a href="mailto:kominfo@denpasarkota.go.id">kominfo@denpasarkota.go.id</a>
              </p>
            </address>

            <!-- Sosial Media -->
            <div class="flex flex-col space-y-2">
              <p class="font-semibold text-gray-900 text-2xl">F o l l o w us :</p>
              <nav class="flex space-x-4 text-2xl text-cyan-600" aria-label="Social media">
                <a href="#" class="hover:text-pink-500"><i class="fab fa-instagram"></i></a>
                <a href="#" class="hover:text-red-600"><i class="fab fa-youtube"></i></a>
                <a href="#" class="hover:text-blue-600"><i class="fab fa-facebook"></i></a>
                <a href="#" class="hover:text-cyan-600"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="#" class="hover:text-black"><i class="fab fa-tiktok"></i></a>
              </nav>
            </div>
          </article>

          <!-- Penilaian -->
          <article class="flex mt-28 flex-col">
            <p class="font-bold text-black mb-2">
              Bagaimana Penilaian Anda Terhadap Kinerja Pelayanan Publik Pemkot Denpasar?
            </p>
            <ul class="list-disc list-inside space-y-1 text-gray-900 text-sm font-semibold">
              <li><a href="https://balippid.kpu.go.id/" class="hover:text-cyan-600 hover:underline">Sangat Bagus</a></li>
              <li><a href="https://balippid.kpu.go.id/" class="hover:text-cyan-600 hover:underline">Bagus</a></li>
              <li><a href="https://balippid.kpu.go.id/" class="hover:text-cyan-600 hover:underline">Kurang Bagus</a></li>
              <li><a href="https://balippid.kpu.go.id/" class="hover:text-cyan-600 hover:underline">Jelek</a></li>
            </ul>
          </article>
        </div>

        <!-- Copyright -->
        <p class="text-sm text-gray-900 font-bold pt-6 text-center md:text-left">
          © 2025 Pemerintah Kota Denpasar. All Right Reserved. Website by Bali Web Design
        </p>
      </section>
    </div>
  </footer>
</template>