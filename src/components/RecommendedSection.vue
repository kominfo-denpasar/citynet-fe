<template>
	<div class="max-w-[85rem] py-14 lg:py-20 mx-auto">
		<!-- Title -->
		<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
			<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Recomended for you to try</h2>
			<p class="mt-1 text-gray-600 dark:text-neutral-400">Stay in the know with insights from industry experts.</p>
		</div>
		<!-- End Title -->

		<!-- Card Blog -->
		<div class="max-w-[85rem] mx-auto">

			<!-- Grid -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
				<!-- Card -->
				<a class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
				<div class="aspect-w-16 aspect-h-9">
					<img class="w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
				</div>
				<div class="p-4 md:p-5">
					<p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
					Product
					</p>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
					Better is when everything works together
					</h3>
				</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
				<div class="aspect-w-16 aspect-h-9">
					<img class="w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
				</div>
				<div class="p-4 md:p-5">
					<p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
					Business
					</p>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
					What CFR really is about
					</h3>
				</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
				<div class="aspect-w-16 aspect-h-9">
					<img class="w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
				</div>
				<div class="p-4 md:p-5">
					<p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
					Business
					</p>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
					Should Product Owners think like entrepreneurs?
					</h3>
				</div>
				</a>
				<!-- End Card -->

				<!-- Card -->
				<a class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
				<div class="aspect-w-16 aspect-h-9">
					<img class="w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image">
				</div>
				<div class="p-4 md:p-5">
					<p class="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
					Facilitate
					</p>
					<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
					Announcing Front Strategies: Ready-to-use rules
					</h3>
				</div>
				</a>
				<!-- End Card -->
			</div>
			<!-- End Grid -->

		</div>
		<!-- End Card Blog -->

		<!-- Grid -->
		<div class="grid sm:grid-cols-2 pb-10 lg:grid-cols-3 gap-6">
			<!-- Card -->
			<a v-for="item in datas" :key="item.id" class="group flex flex-col focus:outline-hidden" :href="item.slug">
				<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
					<img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" :src="item.thumbnail" alt="Blog Image">
					<span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
						{{ item.category }}
					</span>
				</div>

				<div class="mt-7">
					<h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
						{{ item.name }}
					</h3>
					<p class="mt-3 text-gray-800 dark:text-neutral-200">
						{{ item.short_desc }}
					</p>
					<p class="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
						Read more
						<svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
					</p>
				</div>
			</a>
			<!-- End Card -->

			<!-- Card -->
			<a class="group relative flex flex-col w-full min-h-60 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition" href="#">
				<div class="flex-auto p-4 md:p-6">
					<h3 class="text-xl text-white/90 group-hover:text-white"><span class="font-bold">Check out</span> All the things you could do while staying here. From walking, jogging enjoying the scenery on <span class="font-bold">Sanur</span> to shopping and dining on <span class="font-bold">Gajah Mada Street</span>.</h3>
				</div>
				<div class="pt-0 p-4 md:p-6">
					<div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
						Check all things to do
						<svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
					</div>
				</div>
			</a>
			<!-- End Card -->
		</div>
		<!-- End Grid -->
	</div>


	
</template>

<script setup>
    import { ref, onMounted, watch } from "vue";
    
    const props = defineProps({
        datas: {
            type: Array,
            required: true,
        },
    });

</script>

