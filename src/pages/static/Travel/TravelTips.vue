<template>
	<StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'Plan' }
		]"
		title="Travel Tips"
		subtitle="Prepare for an unforgettable journey to Denpasar – get important information, tips and advice to maximize your experience and make the most of your visit."
		background="/images/bg4.png"
	>
		<h1 class="text-3xl font-bold mb-6 text-cyan-700">Travel Tips Before Visiting</h1>
		<p class="mb-4 text-gray-700 leading-relaxed">
			CityNet is the largest network of cities and local governments in the Asia-Pacific region,
			committed to sustainable urban development. Established in 1987, CityNet empowers its members
			by fostering collaboration, sharing knowledge, and driving innovative solutions for the
			challenges of urbanization.
		</p>

		<h1 class="text-2xl font-semibold mt-8 mb-4">Money and Payments</h1>
		<p class="mb-4 text-gray-700 leading-relaxed">
		CityNet’s mission is to strengthen the capacities of local governments, enabling them to
		achieve inclusive, resilient, and sustainable cities. Its vision is to foster collaboration
		across borders to address shared urban challenges.
		</p>

		<h1 class="text-2xl font-semibold mt-8 mb-4">Getting Around Denpasar</h1>

		<h2 class="text-1xl font-semibold mt-8 mb-4">Public Transport</h2>
		<ul class="mb-4 text-gray-700 leading-relaxed">
		<li>Promote city-to-city cooperation</li>
		<li>Share best practices and knowledge resources</li>
		<li>Provide capacity-building programs and training</li>
		<li>Support cities in implementing the UN Sustainable Development Goals (SDGs)</li>
		</ul>

		<h2 class="text-1xl font-semibold mt-8 mb-4">Taxi or Private Hire Car</h2>
		<ul class="mb-4 text-gray-700 leading-relaxed">
		<li>Promote city-to-city cooperation</li>
		<li>Share best practices and knowledge resources</li>
		<li>Provide capacity-building programs and training</li>
		<li>Support cities in implementing the UN Sustainable Development Goals (SDGs)</li>
		</ul>
	</StaticPage>
</template>

<script setup>
	import StaticPage from "@/layouts/StaticPage.vue";
	import { useHead } from '@vueuse/head'
	import OverviewSection from "@/components/OverviewSection.vue";
	import ThreePhotosSection from "@/components/ThreePhotosSection.vue";

	useHead({
		title: "Travel Tips | Denpasar x CityNet 2025",
		meta: [
			{
				name: "description",
				content: "Learn why Denpasar is the host city for CityNet 2025. Discover its culture, innovation, and sustainability vision."
			},
			{
				property: "og:title",
				content: "Travel Tips | Denpasar x CityNet 2025"
			},
			{
				property: "og:description",
				content: "Discover Denpasar as the vibrant host city for CityNet 2025 events."
			},
			{
				property: "og:image",
				content: "https://citynet-ap.org/data/event/1FDkRfb11VhvsceQ3KK0U6j84IUOvNezDrbc4zN8eUN9kKAfp.uvk6v5ycayih.png"
			}
		]
	})
</script>
