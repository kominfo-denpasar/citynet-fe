<template>
	<div class="bg-gray-50">
		<!-- Hero Section -->
		<!-- <HeroSection
			title="APEKSI CityNet 2025"
			subtitle="Kolaborasi menuju kota cerdas dan berkelanjutan"
			:backgroundImages="['/images/bg1.png']"
			:buttons="[
				{ label: 'Daftar Sekarang', to: '/register', primary: true },
				{ label: 'Lihat Agenda', to: '/list', primary: false }
			]"
			:slideInterval="4000"
		/> -->

		<AccessibilityButton />
		<HeroSection />
		<ProfilDenpasar />
		<ExecutiveCommittee />
		<ExploreDenpasar />
		
		<!-- <Galeri />
		<Berita />
		<Video /> -->
	</div>
</template>

<script setup>
	import HeroSection from "@/components/HeroSection.vue";
	import HeroSectionTwo from "@/components/HeroSectionTwo.vue";
	import AccessibilityButton from "@/components/AccessibilityButton.vue";
	import ExecutiveCommittee from "@/components/ExecutiveCommittee.vue";
	import ExploreDenpasar from "@/components/ExploreDenpasar.vue";
	import ProfilDenpasar from "@/components/ProfilDenpasar.vue";
	// import Galeri from "@/components/Galeri.vue";
	// import Berita from "@/components/Berita.vue";
	// import Video from "@/components/Video.vue";

	import { useRoute } from 'vue-router';

	import { useHead } from '@vueuse/head'

	useHead({
		title: "Denpasar - CityNet 2025",
		meta: [
			{
				name: "description",
				content: "Learn why Denpasar is the host city for CityNet 2025. Discover its culture, innovation, and sustainability vision."
			},
			{
				property: "og:title",
				content: "Denpasar - CityNet 2025"
			},
			{
				property: "og:description",
				content: "Discover Denpasar as the vibrant host city for CityNet 2025 events."
			},
			{
				property: "og:image",
				content: "https://citynet-ap.org/images/denpasar-host.jpg"
			}
		]
	})
</script>


<!-- <template>
	<DefaultLayout>
		<div class="p-6 text-center">
			<h1 class="text-3xl font-bold mb-4">Welcome to CityNet</h1>
			<p class="text-gray-600">Ini halaman Home dengan layout global.</p>
		</div>
	</DefaultLayout>
</template>

<script setup>
//import DefaultLayout from '@/layouts/MainLayout.vue'
</script> -->