<template>
	<StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'About' }
		]"
		title="Executive Committee"
		subtitle="The Executive Committee (ExeCom) is the governing body of CityNet"
		background="/images/bg4.png">
		<p class="mb-4 text-gray-700 leading-relaxed">
			The Executive Committee (ExeCom) is the governing body of CityNet, responsible for guiding the
      network’s strategic direction and ensuring effective implementation of its programs. It plays
      a vital role in decision-making and in fostering collaboration among members.
		</p>

		<h2 class="text-2xl font-semibold mt-8 mb-4">The Role of the Executive Committee</h2>
		<p class="text-gray-700 leading-relaxed">
			ExeCom members meet regularly to discuss policies, approve new initiatives, and review the
      progress of ongoing programs. These meetings provide a platform for dialogue, exchange, and
      cooperation among city leaders across the Asia-Pacific.
		</p>

		<h2 class="text-2xl font-semibold mt-8 mb-4">The 45th ExeCom Meeting in Denpasar</h2>
		<p class="text-gray-700 leading-relaxed">
			The 45th CityNet Executive Committee Meeting, hosted in Denpasar, focuses on advancing
      sustainable urban solutions and strengthening partnerships. It also serves as a stage to
      highlight Denpasar’s innovative approaches to inclusive and sustainable city development.
		</p>
	</StaticPage>
</template>

<script setup>
	import StaticPage from "@/layouts/StaticPage.vue";
	import { useHead } from '@vueuse/head'

	useHead({
		title: "Executive Committee | Denpasar - CityNet 2025",
		meta: [
			{
				name: "description",
				content: "Learn about the governing body of CityNet."
			},
			{
				property: "og:title",
				content: "Executive Committee | CityNet 2025"
			},
			{
				property: "og:description",
				content: "Learn about the governing body of CityNet."
			},
			{
				property: "og:image",
				content: "https://citynet-ap.org/data/event/1FDkRfb11VhvsceQ3KK0U6j84IUOvNezDrbc4zN8eUN9kKAfp.uvk6v5ycayih.png"
			}
		]
	})
</script>
