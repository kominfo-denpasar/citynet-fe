<!-- <template>
	<div class="flex flex-col min-h-screen">
		<Navbar />
		<main class="flex-grow mt-[7.35rem]">
			<slot />
		</main>
		<Footer />
	</div>
</template> -->

<template>
	<div class="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden flex flex-col">
		<!-- Navbar -->
		<Navbar />

		<!-- Content -->
		<main class="flex-1 flex-grow mt-[6.5rem]">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup>
	import Navbar from '@/components/Navbar.vue'
	import Footer from '@/components/Footer.vue'
</script>