<template>
	<div class="w-full">

		<Breadcrumb 
			:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'Explore' },
				{ label: 'Events & Programs', link: '/events' }
			]"
			title="Events & Programs"
			subtitle="Explore our latest events and programs."
			background="/images/bg4.png"
		/>
		<Archive />
		<CardEvent />
		<Pagination />

	</div>
</template>

<script setup>
	import Breadcrumb from "@/components/Breadcrumb.vue";
	import Archive from "@/components/events/Archive.vue";
	import CardEvent from "@/components/events/CardEvent.vue";
	import Pagination from "@/components/events/Pagination.vue";

	import { useHead } from "@vueuse/head";
	useHead({
		title: "Events & Programs - CityNet 2025",
		meta: [
			{
				name: "description",
				content: "Explore the latest events and programs hosted by CityNet in Denpasar. Stay updated with our initiatives and activities."
			},
			{
				property: "og:title",
				content: "Events & Programs - CityNet 2025"
			},
			{
				property: "og:description",
				content: "Discover upcoming events and programs by CityNet in Denpasar."
			},
			{
				property: "og:image",
				content: "https://citynet-ap.org/images/events-programs.jpg"
			}
		]
	});
</script>


<style>
	@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
