<template>
	<header
		:class="[
			'fixed top-0 left-0 w-full max-w-screen z-50 transition-transform duration-300 bg-white dark:bg-gray-900 shadow',
			isHidden ? '-translate-y-full' : 'translate-y-0'
		]"
	>
		<!-- ===== TOP BAR ===== -->
		<section class="bg-gradient-to-r from-sky-200 to-blue-500 text-white py-2">
			<div class="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 md:px-6">
				<!-- Left: Social media -->
				<nav aria-label="Social media" class="flex items-center gap-x-2">
					<a v-for="icon in socialIcons" :key="icon.alt" :href="icon.href" :aria-label="icon.alt">
						<img :src="icon.src" class="w-6 md:w-7" :alt="icon.alt" />
					</a>
				</nav>

				<!-- Right: tools -->
				<div class="flex items-center gap-3">
					<!-- Search (hidden on mobile) -->
					<form role="search" class="relative hidden md:flex items-center w-60 bg-white dark:bg-gray-800 rounded-full shadow-sm">
						<font-awesome-icon icon="search" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
						<input
							id="desktop-search"
							type="search"
							v-model="searchQuery"
							class="w-full px-3 py-1 rounded-full text-black dark:text-white bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
						<button type="button" aria-label="Voice search" @click="startVoiceSearch">
							<font-awesome-icon icon="microphone" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
						</button>
					</form>

					<!-- Translate -->
					<!-- <button aria-label="Change language" @click="toggleLanguage">
						<img src="/icons/icon-global.png" class="w-6 md:w-7 object-contain" alt="Language" />
					</button> -->

					<div class="flex space-x-2">
						<button @click="setLang('en')" :class="activeLang === 'en' ? activeClass : inactiveClass">
						EN
						</button>
						<button @click="setLang('id')" :class="activeLang === 'id' ? activeClass : inactiveClass">
						ID
						</button>
					</div>

					<!-- Dark toggle -->
					<button @click="toggleDark" class="px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-xs md:text-sm text-gray-800 dark:text-gray-100">
						{{ isDark ? 'Light' : 'Dark' }}
					</button>
				</div>
			</div>
		</section>

		<!-- ===== MAIN NAVBAR ===== -->
		<nav aria-label="Main navigation">
			<div class="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
				<!-- Logo -->
				<router-link to="/" class="flex items-center gap-x-2 md:gap-x-4 flex-shrink-0">
					<span class="text-2xl md:text-[40px] text-blue-900 dark:text-sky-300 leading-none font-['Roboto_Slab']">CITYNET</span>
					<img src="/images/logo.png" alt="Logo Citynet" class="h-10 md:h-12 w-auto" />
					<span class="hidden 900:block text-sm md:text-lg font-bold text-blue-900 dark:text-sky-300 leading-tight break-words">
						DENPASAR <br> CITY GOVERNMENT
					</span>
				</router-link>

				<!-- Desktop Menu -->
				<ul class="hidden md:flex gap-x-6 lg:gap-x-8 text-base md:text-lg text-gray-800 dark:text-gray-100 font-bold items-center">
					<li v-for="menu in menus" :key="menu.title" class="relative group">
						<a href="#!" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition flex items-center gap-1">
							{{ menu.title }}
							<span v-if="menu.submenu" class="text-lg md:text-xl">▾</span>
						</a>
						<ul
							v-if="menu.submenu"
							class="absolute left-0 top-full w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg 
									opacity-0 invisible pointer-events-none 
									group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
									group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200">
							<li v-for="sub in menu.submenu" :key="sub.title">
								<router-link :to="sub.link" @click="closeMenu"
									class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-cyan-100 dark:hover:bg-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400"
								>
									{{ sub.title }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>

				<!-- Mobile Hamburger -->
				<button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-800 dark:text-gray-100">
					<font-awesome-icon :icon="mobileOpen ? 'times' : 'bars'" class="text-2xl" />
				</button>
			</div>

			<!-- Mobile Menu -->
			<transition name="slide-fade">
			<div v-if="mobileOpen" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
				<ul class="flex flex-col p-4 space-y-2 text-gray-800 dark:text-gray-100 font-semibold">
				<li v-for="menu in menus" :key="menu.title">
					<details>
					<summary class="cursor-pointer flex justify-between items-center py-2">
						<span>{{ menu.title }}</span>
						<span v-if="menu.submenu"></span>
					</summary>
					<ul v-if="menu.submenu" class="pl-4">
						<li v-for="sub in menu.submenu" :key="sub.title">
						<router-link
							:to="sub.link"
							@click.native="closeMenu"
							class="block py-2 hover:text-cyan-600 dark:hover:text-cyan-400"
						>
							{{ sub.title }}
						</router-link>
						</li>
					</ul>
					</details>
				</li>
				</ul>
			</div>
			</transition>
		</nav>
	</header>
</template>

<script setup>
	import { ref, onMounted, onBeforeUnmount } from "vue"
	import { inject } from "vue"

	import menuLinks from "@/data/menuLinks.json" 
	const menus = menuLinks.sections.map(section => ({
		title: section.title,
		submenu: section.links.map(link => ({
			title: link.label,
			link: link.url
		}))
	}));

	const isDark = inject("isDark", ref(false))
	const toggleDark = inject("toggleDark", () => {})

	const searchQuery = ref("")
	const mobileOpen = ref(false)
	const isHidden = ref(false)

	// ------------------

	const toggleMenu = () => {
	mobileOpen.value = !mobileOpen.value
	}

	const closeMenu = () => {
	mobileOpen.value = false
	}

	// ------------------ Hide on scroll down, show on scroll up -----

	let lastScrollY = window.scrollY
	const handleScroll = () => {
		const currentY = window.scrollY
		if (currentY > lastScrollY && currentY > 80) {
			isHidden.value = true
		} else {
			isHidden.value = false
		}
		lastScrollY = currentY
	}
	onMounted(() => window.addEventListener("scroll", handleScroll))
	onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll))

	// -------------------------------------------------------------

	const socialIcons = [
		{ src: "/icons/instagram.svg", alt: "Instagram", href: "#" },
		{ src: "/icons/youtube.svg", alt: "YouTube", href: "#" },
		{ src: "/icons/facebook.svg", alt: "Facebook", href: "#" },
		{ src: "/icons/twitter.svg", alt: "Twitter", href: "#" },
		{ src: "/icons/tiktok.svg", alt: "TikTok", href: "#" },
	]


	const startVoiceSearch = () => console.log("Voice search clicked")

	const activeLang = ref("en");

	const activeClass =
	"px-3 py-1 bg-blue-600 text-white rounded-md font-semibold shadow";
	const inactiveClass =
	"px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300";

	function setLang(lang) {
	const select = document.querySelector(".goog-te-combo");
	if (select) {
		select.value = lang;
		select.dispatchEvent(new Event("change"));
		activeLang.value = lang;
	}
	}

	onMounted(() => {
	// default bahasa
	activeLang.value = "en";
	});
</script>

<style>
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all 0.3s ease;
	}
	.slide-fade-enter-from,
	.slide-fade-leave-to {
		opacity: 0;
		transform: translateY(-10px);
	}
</style>
