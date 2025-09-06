<template>
	<!-- Hero -->
	<div class="max-w-[85rem] mx-auto mb-10">
		<!-- Grid -->
		<div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
			<div class="lg:col-span-4">
				<h1 class="block text-3xl font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">{{ title }}</h1>
				<p class="mt-5 text-xs font-medium text-gray-800 dark:text-neutral-200 flex justify-between lg:pr-5">
					<span>Event Date</span>
					<span class="text-gray-600 dark:text-neutral-400">{{ eventDate }}</span>
				</p>

				<p class="mt-3 text-xs font-medium text-gray-800 dark:text-neutral-200 flex justify-between lg:pr-5">
					<span>Host</span>
					<span class="text-gray-600 dark:text-neutral-400">Pemerintah Kota Denpasar</span>
				</p>

				<div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
					<a
						class="w-full sm:w-auto py-3 px-4 sm:px-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						href="#">
						Event Information
					</a>
				</div>
			</div>
			<!-- End Col -->

			<div class="lg:col-span-3 mt-10 lg:mt-0">
				<img
					class="w-full rounded-xl"
					src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
					alt="Hero Image">
			</div>
			<!-- End Col -->
		</div>
		<!-- End Grid -->
	</div>
	<!-- End Hero -->
</template>

<script setup>
	const props = defineProps({
		title: String,
		subtitle: String,
		total: Number
	})
</script>
