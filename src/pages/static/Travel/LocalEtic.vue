<template>
  <StaticPage 
		:breadcrumbs="[
				{ label: 'Home', link: '/' },
				{ label: 'Plan' }
		]"
		title="Local Etiquette"
		subtitle="A friendly and practical guide to behaving respectfully and comfortably while visiting the local communities of Denpasar."
		background="/images/bg4.png"
	>
	<section class="page">
		<header class="hero">
		<div class="container">
		<h1 class="title">Local Etiquette Guide — Welcome to Denpasar</h1>
		<p class="subtitle">A friendly and practical guide to behaving respectfully and comfortably while visiting the local communities of Denpasar.</p>
		</div>
		</header>


		<main class="container content">
			<article class="card">
			<h2 class="text-2xl font-semibold mb-2">Why Local Etiquette Matters</h2>
			<p>
			Understanding local customs helps you connect better with the people of Denpasar, avoid misunderstandings,
			and show genuine respect for Balinese traditions and culture. Here are some simple reminders for your stay.
			</p>
			</article>


			<section class="grid">
			<article class="card">
			<h3 class="text-1xl font-bold mb-1">Greetings & Communication</h3>
			<ul>
			<li>Smile and use simple greetings such as “Om Swastiastu” or “Selamat Pagi” when meeting locals.</li>
			<li>A gentle handshake is appropriate in formal settings — avoid overly firm grips.</li>
			<li>Address older people or community leaders with respect; showing deference is appreciated.</li>
			</ul>
			</article>


			<article class="card">
			<h3 class="text-1xl font-bold mb-1">Dress Code</h3>
			<ul>
			<li>Wear modest clothing, especially when visiting temples or government buildings.</li>
			<li>Beachwear is fine at the beach, but please cover up when entering shops, restaurants, or residential areas.</li>
			</ul>
			</article>


			<article class="card">
			<h3 class="text-1xl font-bold mb-1">Dining & Invitations</h3>
			<ul>
			<li>Wait for the host to begin eating before you start, if invited to a meal.</li>
			<li>Use your right hand for giving, receiving, or eating food when possible — it’s a sign of politeness.</li>
			<li>Declining food repeatedly can seem impolite; a small taste is a kind gesture.</li>
			</ul>
			</article>


			<article class="card">
			<h3 class="text-1xl font-bold mb-1">Public Behavior & Privacy</h3>
			<ul>
			<li>Keep your voice low in public spaces; avoid loud laughter or shouting.</li>
			<li>Avoid public displays of affection and unnecessary physical contact with strangers.</li>
			<li>Always ask permission before taking photos of people, ceremonies, or inside temples.</li>
			</ul>
			</article>

			<article class="card">
			<h2 class="text-1xl font-bold mb-1">Temple Etiquette</h2>
			<ul>
			<li>Dress properly: wear a sarong and sash when entering temple grounds.</li>
			<li>Remove shoes before entering sacred areas and speak softly.</li>
			<li>Respect ongoing ceremonies — do not interrupt or walk in front of those praying.</li>
			<li>Photography may be restricted; always look for signs or ask a local guide first.</li>
			</ul>
			</article>


			<article class="card">
			<h2 class="text-1xl font-bold mb-1"	>Practical Tips</h2>
			<ol>
			<li>Learn a few local words — even a simple “Thank you” or “Terima kasih” means a lot.</li>
			<li>Avoid touching someone’s head — it’s considered sacred in Balinese culture.</li>
			<li>Point with your whole hand, not your finger.</li>
			<li>When in doubt, ask politely. Locals are usually happy to explain their customs.</li>
			</ol>
			</article>
			</section>


			<footer class="card small">
			<p class="text-1xl font-bold">Welcome to Denpasar - enjoy your visit, respect the culture, and make meaningful connections.</p>
			</footer>
			</main>
		</section>
  </StaticPage>
</template>

<script setup>
  import StaticPage from "@/layouts/StaticPage.vue";
  import { useHead } from '@vueuse/head'

	useHead({
		title: "Local Etiquette | Denpasar x CityNet 2025",
		meta: [
			{
				name: "description",
				content: "CityNet is the largest network of cities and local governments in the Asia-Pacific region, committed to sustainable urban development"
			},
			{
				property: "og:title",
				content: "Local Etiquette | Denpasar x CityNet 2025"
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
.page { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #111; }
.container { max-width: 980px; margin: 0 auto; padding: 24px; }
.hero { background: linear-gradient(90deg, #f0f8ff, #ffffff); padding: 36px 0; border-bottom: 1px solid #eee; text-align: center; }
.title { font-size: 28px; margin: 0 0 8px; }
.subtitle { margin: 0; color: #555; }
.content { padding: 28px 0; }
.card { background: #fff; border: 1px solid #eee; padding: 18px; border-radius: 10px; margin-bottom: 18px; box-shadow: 0 6px 18px rgba(12,12,12,0.04); }
.grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap: 14px; }
h2 { margin-top: 0; }
h3 { margin-bottom: 8px; }
.small { font-size: 14px; text-align: center; color: #444; }
@media (max-width:600px){ .title{font-size:22px} .container{padding:14px} }
</style>
