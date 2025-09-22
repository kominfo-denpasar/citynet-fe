<template>
  <StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'About' },
				{ label: 'Citynet Overview' }
		]"
		title="Citynet Overview"
		subtitle="A vibrant city embracing innovation, culture, and sustainability."
		background="/images/bg4.png"
	>

    <p class="mb-4 text-gray-700 leading-relaxed">
      CityNet is the largest network of cities and local governments in the Asia-Pacific region,
      committed to sustainable urban development. Established in 1987, CityNet empowers its members
      by fostering collaboration, sharing knowledge, and driving innovative solutions for the
      challenges of urbanization.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Our Mission & Vision</h2>
    <p class="mb-4 text-gray-700 leading-relaxed">
      CityNet’s mission is to strengthen the capacities of local governments, enabling them to
      achieve inclusive, resilient, and sustainable cities. Its vision is to foster collaboration
      across borders to address shared urban challenges.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">Our Members</h2>
    <p class="mb-4 text-gray-700 leading-relaxed">
      The network connects more than 150 cities, NGOs, and organizations across Asia-Pacific,
      building a strong community dedicated to shaping sustainable futures together.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
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

	useHead({
		title: "Citynet Overview | Denpasar - CityNet 2025",
		meta: [
			{
				name: "description",
				content: "CityNet is the largest network of cities and local governments in the Asia-Pacific region, committed to sustainable urban development"
			},
			{
				property: "og:title",
				content: "Citynet Overview | Denpasar - CityNet 2025"
			},
			{
				property: "og:description",
				content: "CityNet is the largest network of cities and local governments in the Asia-Pacific region, committed to sustainable urban development"
			},
			{
				property: "og:image",
				content: "https://citynet-ap.org/data/event/1FDkRfb11VhvsceQ3KK0U6j84IUOvNezDrbc4zN8eUN9kKAfp.uvk6v5ycayih.png"
			}
		]
	})
</script>
