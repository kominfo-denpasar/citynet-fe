<template>
  <div>
	<!-- Tab Buttons -->
	<div class="border-b border-gray-200 dark:border-neutral-700">
	  <nav class="flex gap-x-4" aria-label="Tabs">
		<button
		  v-for="tab in tabs"
		  :key="tab.id"
		  @click="activeTab = tab.id"
		  class="py-4 px-2 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap focus:outline-hidden"
		  :class="activeTab === tab.id
			? 'font-semibold border-blue-600 text-blue-600'
			: 'border-transparent text-gray-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500'
		  ">
		  <font-awesome-icon :icon="tab.icon" class="w-4 h-4" />
		  {{ tab.label }}
		</button>
	  </nav>
	</div>

	<!-- Tab Content -->
	<div class="mt-3">
	  <div
		v-for="tab in tabs"
		:key="tab.id"
		v-show="activeTab === tab.id"
		class="text-gray-500 dark:text-neutral-400">
		<!-- hanya render saat sudah pernah dibuka -->
		<keep-alive>
		  <component
			v-if="visitedTabs.includes(tab.id)"
			:is="tab.component"/>
		</keep-alive>
	  </div>
	</div>
  </div>
</template>

<script setup>
	import { ref, watch } from 'vue'

	const props = defineProps({
		tabs: {
			type: Array,
			required: true
		}
	})

	const activeTab = ref(props.tabs[0]?.id ?? null)
	const visitedTabs = ref([activeTab.value]) // tab pertama otomatis dimuat

	// kalau tab aktif berubah → masukkan ke visitedTabs
	watch(activeTab, (newVal) => {
		if (!visitedTabs.value.includes(newVal)) {
			visitedTabs.value.push(newVal)
		}
	})
</script>
