<template>
	<MainLayout>
		<RouterView />
	</MainLayout>
</template>

<script setup>
	import MainLayout from "@/layouts/MainLayout.vue";
	import { ref, provide, onMounted } from 'vue'

	const isDark = ref(false)

	onMounted(() => {
		// ambil preferensi user
		isDark.value = localStorage.getItem('theme') === 'dark'

		// set class dark ke <html>
		document.documentElement.classList.toggle('dark', isDark.value)
	})

	const toggleDark = () => {
		isDark.value = !isDark.value
		localStorage.setItem('theme', isDark.value ? 'dark' : 'light')

		// update class di <html>
		document.documentElement.classList.toggle('dark', isDark.value)
	}

	provide('isDark', isDark)
	provide('toggleDark', toggleDark)
</script>