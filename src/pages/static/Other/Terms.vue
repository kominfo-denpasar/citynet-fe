<template>
  <StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
		]"
		title="Terms of Use"
		subtitle="Read the terms and conditions for using the Denpasar - CityNet 2025 website and services."
		background="/images/bg4.png"
	>
	<section class="page">
		<header class="hero">
		<div class="container">
			<h1 class="title">Terms of Use — Denpasar × CityNet</h1>
			<p class="subtitle">Please read these terms carefully before using our website and services.</p>
		</div>
		</header>

		<main class="container content">
		<article class="card">
			<h2 class="text-1xl font-semibold mb-2">1. Acceptance of Terms</h2>
			<p>
			By accessing or using the Denpasar × CityNet website, you agree to comply with and be bound by these Terms of Use.
			If you do not agree, please refrain from using this site.
			</p>
		</article>

		<article class="card">
			<h2 class="text-1xl font-semibold mb-1">2. Use of Content</h2>
			<p>
			All information, text, images, and graphics are owned or licensed by the City of Denpasar and CityNet partners.
			You may not reproduce or distribute any materials without prior permission.
			</p>
		</article>

		<article class="card">
			<h2 class="text-1xl font-semibold mb-1">3. User Conduct</h2>
			<ul>
			<li>Do not misuse the website for unlawful purposes.</li>
			<li>Do not attempt to hack, disrupt, or alter any content or service.</li>
			<li>Respect the privacy and data of other users.</li>
			</ul>
		</article>

		<article class="card">
			<h2 class="text-1xl font-semibold mb-1">4. Disclaimer</h2>
			<p>
			The information provided is for public communication purposes and may change without prior notice.
			The City of Denpasar and CityNet are not liable for any damages arising from website use.
			</p>
		</article>

		<footer class="small">
			<p>Last updated: October 2025</p>
		</footer>
		</main>
	</section>
  </StaticPage>
</template>

<script setup>
  import StaticPage from "@/layouts/StaticPage.vue";
  import { useHead } from '@vueuse/head'

	useHead({
		title: "Terms of Use | Denpasar x CityNet 2025",
		meta: [
			{
				name: "description",
				content: "CityNet is the largest network of cities and local governments in the Asia-Pacific region, committed to sustainable urban development"
			},
			{
				property: "og:title",
				content: "Terms of Use | Denpasar x CityNet 2025"
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

<style scoped>
	@import '@/assets/StaticPageStyle.css';
</style>
