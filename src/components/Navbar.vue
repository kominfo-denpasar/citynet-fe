<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white">
    <!-- ===== TOP BAR ===== -->
    <section class="bg-gradient-to-r from-sky-200 to-blue-500 text-white py-2">
      <div class="max-w-[1400px] mx-auto flex flex-wrap items-center justify-end gap-3 px-6">
        
        <!-- Social Media -->
        <nav aria-label="Social media" class="flex items-center gap-x-2">
          <a v-for="icon in socialIcons" :key="icon.alt" :href="icon.href" :aria-label="icon.alt">
            <img :src="icon.src" class="w-7" :alt="icon.alt" />
          </a>
        </nav>

        <!-- Search -->
        <form role="search" class="relative flex items-center w-60 bg-white rounded-full shadow-sm">
          <label for="desktop-search" class="sr-only">Search</label>
          <i class="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
          <input
            id="desktop-search"
            type="search"
            v-model="searchQuery"
            class="w-full px-3 py-1 rounded-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="button" aria-label="Voice search" @click="startVoiceSearch">
            <i class="fa fa-microphone absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
          </button>
        </form>

        <!-- Translate -->
        <button aria-label="Change language" @click="toggleLanguage">
          <img src="/icons/icon-global.png" class="w-7 object-contain" alt="Language" />
        </button>

      </div>
    </section>

    <!-- ===== MAIN NAVBAR ===== -->
    <nav aria-label="Main navigation" class="shadow border-t border-gray-200">
      <div class="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
        
        <!-- Logo Section -->
        <router-link to="/" class="flex items-center gap-x-4 flex-shrink-0">
          <span class="text-[48px] text-blue-900 leading-none font-['Roboto_Slab']">CITYNET</span>
          <img src="/images/logo.png" alt="Logo Citynet" class="h-12 w-auto" />
          <span class="text-lg font-bold text-blue-900 leading-tight">
            PEMERINTAH <br> KOTA DENPASAR
          </span>
        </router-link>

        <!-- Menu -->
        <!-- Menu -->
        <ul class="flex gap-x-8 text-xl text-gray-800 font-bold items-center">
          <li v-for="menu in menus" :key="menu.title" class="relative group">
            <a href="#" class="hover:text-cyan-600 transition flex items-center gap-1">
              {{ menu.title }}
              <span v-if="menu.submenu" class="text-3xl">▾</span>
            </a>

            <!-- Submenu -->
            <ul
              v-if="menu.submenu"
              class="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200"
            >
              <li
                v-for="sub in menu.submenu"
                :key="sub.title"
              >
                <router-link :to="sub.link"
                  class="block px-4 py-2 text-gray-700 hover:bg-cyan-100 hover:text-cyan-600"
                >
                  {{ sub.title }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from 'vue-router';

const searchQuery = ref("")

const socialIcons = [
  { src: "/icons/instagram.svg", alt: "Instagram", href: "#" },
  { src: "/icons/youtube.svg", alt: "YouTube", href: "#" },
  { src: "/icons/facebook.svg", alt: "Facebook", href: "#" },
  { src: "/icons/twitter.svg", alt: "Twitter", href: "#" },
  { src: "/icons/tiktok.svg", alt: "TikTok", href: "#" },
]

const menus = [
  {
    title: "Who We Are",
    submenu: [
      { title: "About Us", link: "/about" },
      { title: "Leadership", link: "/leadership" },
      { title: "Partners", link: "/partners" },
    ],
  },
  {
    title: "Our Network",
    submenu: [
      { title: "Members", link: "/members" },
      { title: "Projects", link: "/projects" },
    ],
  },
  {
    title: "What We Do",
    submenu: [
      // { title: "Programs", link: "/programs" },
      { title: "Events", link: "/list" },
    ],
  },
  // {
  //   title: "Newsroom",
  //   submenu: [
  //     { title: "Press Releases", link: "/press" },
  //     { title: "Media", link: "/media" },
  //   ],
  // },
  // {
  //   title: "Get Involved",
  //   submenu: [
  //     { title: "Volunteer", link: "/volunteer" },
  //     { title: "Careers", link: "/careers" },
  //   ],
  // },
]

const startVoiceSearch = () => {
  console.log("Voice search clicked")
}

const toggleLanguage = () => {
  console.log("Change language clicked")
}
</script>


<!-- <template>
  <nav class="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
    <router-link to="/" class="font-bold text-lg">CityNet</router-link>
    <div class="space-x-4">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/list" class="hover:underline">List</router-link>
    </div>
  </nav>
</template> -->