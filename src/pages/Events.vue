<template>
	<div class="w-full">

		<Header />
		<Archive />
		<CardEvent />
		<Pigination />

	</div>
</template>

<script setup>
import Header from "@/components/events/Header.vue";
import Archive from "@/components/events/Archive.vue";
import CardEvent from "@/components/events/CardEvent.vue";
import Pigination from "@/components/events/Pigination.vue";

import { useRoute } from 'vue-router';
</script>


<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
