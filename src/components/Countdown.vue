<!-- Countdown -->
<template>
	<section class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center mt-8"
	aria-label="Hitung mundur menuju acara">

	<!-- Hari -->
	<article class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center">
		<div class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<time id="days" class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
		datetime="P100D">100</time>
		<span class="mt-2 font-bold text-lg">Hari</span>
	</article>

	<!-- Jam -->
	<article class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center">
		<div class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<time id="hours" class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
		datetime="21H">21</time>
		<span class="mt-2 font-bold text-lg">Jam</span>
	</article>

	<!-- Menit -->
	<article class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center">
		<div class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<time id="minutes" class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
		datetime="40M">40</time>
		<span class="mt-2 font-bold text-lg">Menit</span>
	</article>

	<!-- Detik -->
	<article class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center">
		<div class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"></div>
		<time id="seconds" class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
		datetime="10S">10</time>
		<span class="mt-2 font-bold text-lg">Detik</span>
	</article>
	</section>
</template>