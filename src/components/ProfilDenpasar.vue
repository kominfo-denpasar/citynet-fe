<template>
	<!-- ===================== SLIDE 4 ===================== -->
  <section id="profil-denpasar"
	class="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
	aria-labelledby="profil-denpasar-heading">

	<!-- Background -->
	<figure class="absolute inset-0 w-full h-full z-0" aria-hidden="true">
	  <img src="/images/bg4.png" alt="Latar belakang Kota Denpasar" class="w-full h-full object-fill object-center" />
	</figure>

	<!-- Konten -->
	<div class="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto">

	  <article class="flex-1 ml-40 space-y-6 max-w-xl">
		<header>
		  <h2 id="profil-denpasar-heading" class="text-5xl font-bold leading-tight uppercase drop-shadow-lg">
			Profil <br /> Kota Denpasar
		  </h2>
		</header>

		<!-- Progress Bar -->
		<div class="flex items-center" role="presentation" aria-hidden="true">
		  <div class="w-[150px] h-[4px] bg-gradient-to-r from-cyan-400 to-blue-600"></div>
		  <div class="w-10 h-[4px] bg-white"></div>
		</div>

		<p class="text-lg font-bold leading-relaxed text-gray-200">
		  The Highest Glory of the Citizen’s Revolution was this; it connected in one indissoluble bond
		  the principles of civil government with the principles of humanity.
		  Get Egovenz Local Government WordPress Theme today and launch your website.
		</p>
	  </article>
	</div>

	<!-- Navigasi Slide -->
	<nav class="absolute inset-x-0 top-1/2 flex justify-between px-28 -translate-y-1/2 z-20 pointer-events-none"
	  aria-label="Navigasi profil Kota Denpasar">
	  <button class="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition pointer-events-auto"
		aria-label="Slide sebelumnya">
		<i class="fas fa-chevron-left text-2xl"></i>
	  </button>

	  <button class="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition pointer-events-auto"
		aria-label="Slide berikutnya">
		<i class="fas fa-chevron-right text-2xl"></i>
	  </button>
	</nav>

	<!-- Indicators -->
	<ol class="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3" aria-label="Indikator slide">
	  <li>
		<button class="w-3 h-3 rounded-full bg-cyan-400" aria-current="true" aria-label="Slide 1"></button>
	  </li>
	  <li>
		<button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 2"></button>
	  </li>
	  <li>
		<button class="w-3 h-3 rounded-full bg-gray-300" aria-label="Slide 3"></button>
	  </li>
	</ol>
  </section>
  <!-- ===================== END SLIDE 4 ===================== -->
</template>