<template>
  <!-- ================= HEADER ================= -->
  <header class="relative w-full h-60 bg-cover bg-center flex flex-col justify-center"
	:style="{ backgroundImage: `url(${background})` }">
	<div class="absolute inset-0 bg-black/30"></div>
	<div class="relative z-10 max-w-6xl text-white container mx-auto px-4 sm:px-6 md:px-8 md:pl-20 lg:pl-20">
	  <!-- Breadcrumb -->
	  <nav
		v-if="breadcrumbs && breadcrumbs.length"
		aria-label="Breadcrumb"
		class="text-xs sm:text-sm md:text-base mb-2 flex flex-wrap items-center gap-1 text-gray-200"
	  >
		<template v-for="(item, idx) in breadcrumbs" :key="idx">
		  <router-link
			v-if="item.link"
			:to="item.link"
			class="hover:underline flex items-center gap-1 hover:font-semibold"
		  >
			{{ item.label }}
		  </router-link>
		  <span v-else class="flex items-center gap-1 cursor-default">
			{{ item.label }}
		  </span>

		  <span v-if="idx < breadcrumbs.length - 1" aria-hidden="true">›</span>
		</template>
	  </nav>

	  <!-- Header Title -->
	  <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-4">
		{{ title }}
	  </h1>
	  <p
		v-if="subtitle"
		class="text-sm sm:text-base md:text-lg text-gray-200 max-w-full"
	  >
		{{ subtitle }}
	  </p>
	</div>
  </header>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  background: { type: String, default: "/images/bg4.png" },
  breadcrumbs: {
	type: Array,
	default: () => [
	  { label: "Home", link: "/" },
	  { label: "Explore", link: "/explore" },
	],
  },
})
</script>
