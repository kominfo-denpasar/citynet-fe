<template>
  <div class="w-full">
    <!-- Hero Section HEADER -->
    <header class="relative w-full h-60 bg-cover bg-center flex flex-col justify-center"
      style="background-image: url('/images/bg4.png');">
      <div class="absolute inset-0"></div>

      <div class="relative z-10 max-w-6xl left-52 text-white">
        <!-- Breadcrumb -->
        <nav aria-label="Breadcrumb" class="text-lg mb-1 flex items-center space-x-1 text-gray-200 hover:text-white">
          <router-link to="/" class="hover:underline flex items-center gap-1 hover:font-semibold hover:text-base">
            <span class="material-icons text-lg">home</span>
            Home
          </router-link>
          <span aria-hidden="true">›</span>

          <router-link to="/what-we-do" class="hover:underline hover:font-semibold hover:text-base">What We
            do</router-link>
          <span aria-hidden="true">›</span>

          <router-link to="/what-we-do/legislative"
            class="hover:underline hover:font-semibold hover:text-base">Legislative</router-link>
          <span aria-hidden="true">›</span>

          <router-link to="/what-we-do/legislative/archive"
            class="hover:underline hover:font-semibold hover:text-base">Archive</router-link>
        </nav>

        <!-- Header Title -->
        <h1 class="text-4xl font-semibold mb-4">Legislative</h1>
        <p class="text-lg text-gray-200">
          Our Leadership Bodies Convene to Ensure Strong Governance and Propel
          CITYNET's Strategic Vision
        </p>
      </div>
    </header>

    <Archive />
		<ProgramScedule />
		<Participants />
		<ExpandList />
		<Booth />
		<EventSnapshots />
		<Document />
		<RelatedNews />
  </div>
</template>

<script setup lang="ts">
import Archive from '../components/list/Archive.vue';
import Booth from '../components/list/Booth.vue';
import Document from '../components/list/Document.vue';
import EventSnapshots from '../components/list/EventSnapshots.vue';
import ExpandList from '../components/list/ExpandList.vue';
import Participants from '../components/list/Participants.vue';
import ProgramScedule from '../components/list/ProgramScedule.vue';
import RelatedNews from '../components/list/RelatedNews .vue';
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
