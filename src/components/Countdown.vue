<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Tentukan tanggal acara (ubah sesuai kebutuhan)
const targetDate = new Date("2025-10-26T23:59:59").getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let interval = null;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
	<section
		class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center mt-8"
		aria-label="Hitung mundur menuju acara"
	>
		<!-- Hari -->
		<article
			class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center"
		>
			<div
				class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<div
				class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<time
				class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
				:datetime="`P${days}D`"
			>
				{{ days }}
			</time>
			<span class="mt-2 font-bold text-lg">Hari</span>
		</article>

		<!-- Jam -->
		<article
			class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center"
		>
			<div
				class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<div
				class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<time
				class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
				:datetime="`${hours}H`"
			>
				{{ hours }}
			</time>
			<span class="mt-2 font-bold text-lg">Jam</span>
		</article>

		<!-- Menit -->
		<article
			class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center"
		>
			<div
				class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<div
				class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<time
				class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
				:datetime="`${minutes}M`"
			>
				{{ minutes }}
			</time>
			<span class="mt-2 font-bold text-lg">Menit</span>
		</article>

		<!-- Detik -->
		<article
			class="relative bg-white text-gray-900 rounded-3xl shadow-md p-6 flex flex-col items-center"
		>
			<div
				class="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<div
				class="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded"
			></div>
			<time
				class="text-5xl font-extrabold text-cyan-500 drop-shadow-[2px_2px_0px_#000]"
				:datetime="`${seconds}S`"
			>
				{{ seconds }}
			</time>
			<span class="mt-2 font-bold text-lg">Detik</span>
		</article>
	</section>
</template>
