<template>
	<StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'About' },
				{ label: 'Denpasar as Host City' }
		]"
		title="Denpasar as Host City"
		subtitle="Denpasar, the capital city of Bali, is a vibrant hub of culture, innovation, and sustainability."
		background="/images/bg4.png"
	>
		<p class="mb-4 text-gray-700 leading-relaxed">
			Denpasar, the capital city of Bali, is a vibrant hub of culture, innovation, and sustainability.
      As the host city of the 45th CityNet Executive Committee Meeting and the 4th SDG City Awards,
      Denpasar proudly showcases its commitment to inclusive and forward-thinking urban development.
		</p>

		<h2 class="text-2xl font-semibold mt-8 mb-4">A City of Culture and Innovation</h2>
		<p class="text-gray-700 leading-relaxed">
			Known for its rich cultural heritage, Denpasar embraces tradition while advancing smart city
      initiatives that enhance the quality of life for its residents. From historic temples and
      bustling markets to digital governance and green initiatives, Denpasar exemplifies a modern,
      sustainable city.
		</p>

		<h2 class="text-2xl font-semibold mt-8 mb-4">Denpasar as Host City</h2>
		<p class="text-gray-700 leading-relaxed">
			Hosting this year’s CityNet events reflects Denpasar’s role as a leader in sustainable urban
      transformation. The city continues to demonstrate its dedication to fostering collaboration
      among local governments and building stronger communities.
		</p>
	</StaticPage>
</template>

<script setup>
	import StaticPage from "@/layouts/StaticPage.vue";
	import { useHead } from '@vueuse/head'

	useHead({
		title: "About Denpasar | Denpasar - CityNet 2025",
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
				content: "https://citynet-ap.org/data/event/1FDkRfb11VhvsceQ3KK0U6j84IUOvNezDrbc4zN8eUN9kKAfp.uvk6v5ycayih.png"
			}
		]
	})
</script>
