<template>
	<StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'About' }
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

		<!-- Title -->
		<ThreePhotosSection />

		<!-- Overview -->
		<OverviewSection />
		<!-- End Overview -->

		<div class="max-w-2xl mx-auto text-center mb-2 mt-10">
			<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Check Out Denpasar more!</h2>
			<p class="mt-1 text-gray-600 dark:text-neutral-400">
				Discover more about Denpasar through these links
			</p>
		</div>


		<!-- Card Section -->
		<div class="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Grid -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
				<!-- Card -->
				<router-link class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="/tourism">
				<div class="p-4 md:p-5">
					<div class="flex gap-x-5">
					<svg class="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

					<div class="grow">
						<h3 class="group-hover:text-blue-600 text-2xl font-bold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
						Explore Denpasar
						</h3>
						<p class="text-sm text-gray-500 dark:text-neutral-500">
						Discover the city's rich culture, attractions, and services
						</p>
					</div>
					</div>
				</div>
				</router-link>
				<!-- End Card -->

				<!-- Card -->
				<!-- <router-link class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" to="/events">
				<div class="p-4 md:p-5">
					<div class="flex gap-x-5">
					<svg class="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

					<div class="grow">
						<h3 class="group-hover:text-blue-600 text-2xl font-bold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
						Events & Agendas
						</h3>
						<p class="text-sm text-gray-500 dark:text-neutral-500">
						Stay updated with the latest events in Denpasar
						</p>
					</div>
					</div>
				</div>
				</router-link> -->
				<!-- End Card -->

				<!-- Card -->
				<a class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="mailto:support@denpasarkota.go.id">
					<div class="p-4 md:p-5">
						<div class="flex gap-x-5">
						<svg class="mt-1 shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>

						<div class="grow">
							<h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
							Email us
							</h3>
							<p class="text-sm text-gray-500 dark:text-neutral-500">
							Reach us at <span class="text-blue-600 decoration-2 group-hover:underline font-medium dark:text-blue-500">support@denpasarkota.go.id</span>
							</p>
						</div>
						</div>
					</div>
				</a>
				<!-- End Card -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Card Section -->
	</StaticPage>
</template>

<script setup>
	import StaticPage from "@/layouts/StaticPage.vue";
	import { useHead } from '@vueuse/head'
	import OverviewSection from "@/components/OverviewSection.vue";
	import ThreePhotosSection from "@/components/ThreePhotosSection.vue";

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
