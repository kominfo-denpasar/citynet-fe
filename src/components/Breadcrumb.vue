<template>
	<nav aria-label="breadcrumb" class="w-full py-4">
		<ol class="flex h-8 space-x-2 dark:text-gray-100">
			<li class="flex items-center">
				<router-link 
					to="/" 
					title="Back to homepage" 
					class="flex items-center hover:underline"
				>
					Home
				</router-link>
			</li>

			<li class="flex items-center space-x-1" v-if="category">
				<span class="dark:text-gray-600">/</span>
				<router-link 
					:to="computedCategoryLink" 
					class="flex items-center px-1 capitalize hover:underline"
				>
					{{ category }}
				</router-link>
			</li>

			<li class="flex items-center space-x-1">
				<span class="dark:text-gray-600">/</span>
				<span class="flex items-center px-1 capitalize cursor-default text-gray-500 dark:text-gray-300">
					{{ current }}
				</span>
			</li>
		</ol>
	</nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const props = defineProps({
	current: { type: String, default: 'Current' },
	category: { type: String, default: 'Category' },
	categoryLink: { type: String, default: '' }
})

const computedCategoryLink = computed(() => {
	return props.categoryLink || route.fullPath
})
</script>
