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
		<section class="font-inter text-gray-800">
			<!-- HERO -->
			<header class="bg-gradient-to-r from-cyan-100 to-blue-50 py-16 border-b border-blue-100">
			<div class="max-w-5xl mx-auto px-6 text-center">
				<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
				Travel Tips — Denpasar × CityNet
				</h1>
				<p class="text-lg text-gray-600">
				Essential information to help you travel safely, comfortably, and respectfully in Denpasar.
				</p>
			</div>
			</header>

			<main class="max-w-5xl mx-auto px-6 py-12 space-y-12">
			<!-- Before Visiting -->
			<section>
				<h2 class="text-2xl font-semibold text-blue-700 mb-4">Travel Tips Before Visiting</h2>
				<div class="grid md:grid-cols-2 gap-6">
				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">☀️ Weather & Timezone</h3>
					<p>
					Denpasar has a tropical climate with warm temperatures year-round (26–33°C). 
					The dry season runs from April to October, while the wet season lasts from November to March.
					The timezone is GMT+8.
					</p>
				</article>

				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">🛂 Visa & Entry Requirements</h3>
					<p>
					Most travelers can enter Indonesia with a Visa on Arrival (VoA) valid for 30 days. 
					Check your nationality’s requirements before departure and ensure your passport is valid for at least six months.
					</p>
				</article>

				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">🗣️ Language</h3>
					<p>
					The local language is Bahasa Indonesia, and Balinese is also widely spoken. 
					English is commonly understood in hotels, restaurants, and tourist areas.
					</p>
				</article>

				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">☎️ Useful Numbers</h3>
					<ul class="list-disc list-inside">
					<li><b>Emergency:</b> 112</li>
					<li><b>Police:</b> 110</li>
					<li><b>Ambulance:</b> 118</li>
					<li><b>Tourist Police:</b> +62 361 754599</li>
					</ul>
				</article>

				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">🕌 Prayer Facilities</h3>
					<p>
					Denpasar is home to various places of worship from Hindu temples, mosques, churches, and Buddhist vihara.
					Prayer rooms are also available at airports, malls, and major public facilities.
					</p>
				</article>

				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">📶 Wi-Fi & Connectivity</h3>
					<p>
					Free Wi-Fi is available in many cafes, hotels, and public spaces.
					Local SIM cards (Telkomsel, XL, Indosat) are affordable and provide strong 4G/5G coverage across Denpasar.
					</p>
				</article>
				</div>
			</section>

			<!-- Money and Payments -->
			<section>
				<h2 class="text-2xl font-semibold text-blue-700 mb-4">Money and Payments</h2>
				<div class="grid md:grid-cols-3 gap-6">
				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">💳 Payment Methods</h3>
					<p>
					Cash (Indonesian Rupiah - IDR) is widely used. 
					Credit cards are accepted in hotels, restaurants, and major shops, while e-wallets like GoPay, OVO, and Dana are increasingly popular.
					</p>
				</article>

				<article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">🤝 Tipping</h3>
					<p>
					Tipping is not mandatory but appreciated. 
					Restaurants may include a 5–10% service charge. 
					Small tips for drivers or hotel staff are a kind gesture of appreciation.
					</p>
				</article>

				<!-- <article class="bg-white p-6 rounded-2xl shadow-sm border">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">🧾 Tax Refund</h3>
					<p>
					Tourists can claim VAT refunds (10%) on purchases above IDR 500,000 at participating stores. 
					Keep your receipts and present them at the airport’s refund counter before departure.
					</p>
				</article> -->
				</div>
			</section>

			<!-- Getting Around -->
			<section>
				<h2 class="text-2xl font-semibold text-blue-700 mb-4">Getting Around Denpasar</h2>

				<div class="space-y-10">
				<!-- Public Transport -->
				<div>
					<h3 class="text-xl font-semibold text-gray-800 mb-3">🚌 Public Transport</h3>
					<div class="grid md:grid-cols-2 gap-6">
					<article class="bg-white p-6 rounded-2xl shadow-sm border">
						<h4 class="font-semibold text-gray-900 mb-2">💳 Ways to Pay</h4>
						<p>
						Most city buses and shuttle services accept cash and digital payments through e-wallets or prepaid transport cards.
						Top up cards are available at bus terminals and convenience stores.
						</p>
					</article>

					<article class="bg-white p-6 rounded-2xl shadow-sm border">
						<h4 class="font-semibold text-gray-900 mb-2">🗺️ Bus Transit Map</h4>
						<p>
						Denpasar’s main public transport system, Trans Metro Dewata, connects key routes including
						Ubung Terminal, Renon, Sanur, and the airport. 
						Maps are displayed at major stops and available via Google Maps.
						</p>
					</article>
					</div>
				</div>

				<!-- Taxi & Private Car -->
				<div>
					<h3 class="text-xl font-semibold text-gray-800 mb-3">Taxi or Private Hire Car</h3>
					<div class="grid md:grid-cols-2 gap-6">
					<article class="bg-white p-6 rounded-2xl shadow-sm border">
						<h4 class="font-semibold text-gray-900 mb-2">Taxi Fares</h4>
						<p>
						Taxis use meters. 
						For longer trips, you can negotiate a fixed rate. 
						Always choose reputable companies like Blue Bird.
						</p>
					</article>

					<article class="bg-white p-6 rounded-2xl shadow-sm border">
						<h4 class="font-semibold text-gray-900 mb-2">Ride-Hailing Apps</h4>
						<p>
						Apps like Gojek and Grab are widely available for affordable transport, food delivery, and parcel services.
						Payment can be made via cash, e-wallet, or linked bank cards.
						</p>
					</article>
					</div>
				</div>
				</div>
			</section>
			</main>
		</section>
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
