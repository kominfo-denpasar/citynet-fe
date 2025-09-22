<template>
	<StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'About' },
				{ label: 'Denpasar as Host City' }
		]"
		title="Denpasar as Host City"
		subtitle="A vibrant city embracing innovation, culture, and sustainability."
		background="/images/bg4.png"
	>
		<p class="mb-4 text-gray-700 leading-relaxed">
			CityNet is a regional network of cities and local governments committed to sustainable urban development. 
			This platform serves as a hub to connect participants, share insights, and promote collaborative innovation.
		</p>

		<h2 class="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
		<p class="text-gray-700 leading-relaxed">
			To strengthen the capacity of cities to achieve sustainable development through city-to-city cooperation, 
			knowledge sharing, and partnerships with stakeholders.
		</p>

		<h2 class="text-2xl font-semibold mt-8 mb-4">Why Denpasar?</h2>
		<p class="text-gray-700 leading-relaxed">
			Denpasar plays a central role in CityNet events, acting as the host city and an innovator in inclusive 
			urban solutions for Southeast Asia.
		</p>
	</StaticPage>
</template>

<script setup>
	import StaticPage from "@/layouts/StaticPage.vue";
	import { useHead } from '@vueuse/head'

	useHead({
		title: "About Denpasar | CityNet 2025",
		meta: [
			{
				name: "description",
				content: "Learn why Denpasar is the host city for CityNet 2025. Discover its culture, innovation, and sustainability vision."
			},
			{
				property: "og:title",
				content: "About Denpasar | CityNet 2025"
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
