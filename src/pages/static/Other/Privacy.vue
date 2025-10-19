<template>
	<StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' }
		]"
		title="Privacy Policy"
		subtitle="Your privacy is important to us."
		background="/images/bg4.png">
		
		<section class="page">
			<header class="hero">
			<div class="container">
				<h1 class="title">Privacy Policy — Denpasar × CityNet</h1>
				<p class="subtitle">Your privacy is important to us. Here's how we collect and use your information.</p>
			</div>
			</header>

			<main class="container content">
			<article class="card">
				<h2 class="text-1xl font-semibold mb-4">1. Information We Collect</h2>
				<ul>
					<li>Basic contact information (such as name or email) when you register or contact us.</li>
					<li>Website analytics and cookie data to improve user experience.</li>
				</ul>
			</article>

			<article class="card">
				<h2 class="text-1xl font-semibold mb-4">2. How We Use Information</h2>
				<p>
				We use your data to communicate updates, manage events, and improve CityNet × Denpasar services.
				Your data is not shared with third parties without consent.
				</p>
			</article>

			<article class="card">
				<h2 class="text-1xl font-semibold mb-2">3. Cookies</h2>
				<p>
				This website may use cookies to track user interactions and preferences.
				You may disable cookies in your browser, but some features may not function properly.
				</p>
			</article>

			<article class="card">
				<h2 class="text-1xl font-semibold mb-4">4. Data Protection</h2>
				<p>
				We implement appropriate security measures to safeguard your personal information
				and prevent unauthorized access or disclosure.
				</p>
			</article>

			<footer class="small">
				<p>For privacy inquiries, contact: info@denpasarkota.go.id</p>
			</footer>
			</main>
		</section>
	</StaticPage>
</template>

<script setup>
	import StaticPage from "@/layouts/StaticPage.vue";
	import { useHead } from '@vueuse/head'

	useHead({
		title: "Privacy Policy | Denpasar x CityNet 2025",
		meta: [
			{
				name: "description",
				content: "Learn about the privacy practices."
			},
			{
				property: "og:title",
				content: "Privacy Policy | Denpasar x CityNet 2025"
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

<style scoped>
	@import '@/assets/StaticPageStyle.css';
</style>