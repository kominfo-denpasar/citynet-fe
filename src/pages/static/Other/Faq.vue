<template>
	<StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' }
		]"
		title="FAQ"
		subtitle="Discover answers to common questions about Denpasar x CityNet 2025."
		background="/images/bg4.png"
	>
		<section class="page">
			<header class="hero">
			<div class="container">
				<h1 class="title">FAQ — Denpasar × CityNet</h1>
				<p class="subtitle">Common questions about the Denpasar × CityNet partnership and city information.</p>
			</div>
			</header>

			<main class="container content">
			<article class="card">
				<h3 class="text-1xl font-semibold mb-1">What is Denpasar × CityNet?</h3>
				<p>
				It is a collaboration to promote sustainable, smart, and inclusive city development through global partnerships.
				</p>
			</article>

			<article class="card">
				<h3 class="text-1xl font-semibold mb-1">Is this website official?</h3>
				<p>
				Yes. This platform is supported by the City of Denpasar in collaboration with CityNet for the 2025 conference and beyond.
				</p>
			</article>

			<article class="card">
				<h3 class="text-1xl font-semibold mb-1">Do I need to register to use this site?</h3>
				<p>
				Most pages are public, but some features (like event check-in or visitor assistant tools) may require simple registration.
				</p>
			</article>

			<article class="card">
				<h3 class="text-1xl font-semibold mb-1">Who can I contact for event inquiries?</h3>
				<p>
				You can email <a href="mailto:info@denpasarkota.go.id">info@denpasarkota.go.id</a> or visit the CityNet Secretariat booth during events.
				</p>
			</article>

			<footer class="small">
				<p>Didn't find your question? <a href="mailto:support@denpasarkota.go.id">Contact support</a>.</p>
			</footer>
			</main>
		</section>
	</StaticPage>
</template>

<script setup>
	import StaticPage from "@/layouts/StaticPage.vue";
	import { useHead } from '@vueuse/head'

	useHead({
		title: "FAQ | Denpasar x CityNet 2025",
		meta: [
			{
				name: "description",
				content: "Discover answers to common questions about Denpasar x CityNet 2025."
			},
			{
				property: "og:title",
				content: "FAQ | Denpasar x CityNet 2025"
			},
			{
				property: "og:description",
				content: "Discover answers to common questions about Denpasar x CityNet 2025."
			},
			{
				property: "og:image",
				content: "https://citynet-ap.org/data/event/1FDkRfb11VhvsceQ3KK0U6j84IUOvNezDrbc4zN8eUN9kKAfp.uvk6v5ycayih.png"
			}
		]
	})
</script>

<style scoped>
	@import '@/assets/StaticPageStyle.css';
</style>
