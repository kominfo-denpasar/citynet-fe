<template>
    <!-- Participants Section -->
        <section class="max-w-6xl mx-auto px-6 py-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-8">Participants List</h2>
    
          <!-- Tabs -->
          <div class="flex space-x-6 border-b mb-6" role="tablist">
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" class="pb-2 font-medium relative"
              :class="activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800'">
              {{ tab }}
            </button>
          </div>
    
          <!-- Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <article v-for="(item, index) in filteredParticipants" :key="index"
              class="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col">
              <!-- Logo -->
              <div class="flex items-center justify-center w-full bg-gray-50">
                <img :src="item.logo" :alt="item.name" class="object-contain" />
              </div>
    
              <!-- Content -->
              <div class="p-4 space-y-2">
                <p class="text-sm text-gray-800">{{ item.title }}</p>
                <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                <p class="text-sm text-gray-700">{{ item.description }}</p>
              </div>
            </article>
          </div>
        </section>
</template>

<script setup>
import { ref, computed } from "vue";

/*=============== JS PARTICIPANTS LIST =================*/
const tabs = ["ExCom", "Participants", "Host City"];
const activeTab = ref("ExCom");

const participants = ref([
  /* Halaman Excom */
  {
    tab: "ExCom",
    logo: "/images/bg2.png",
    title: "Card 1",
    name: "Tess 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    tab: "ExCom",
    logo: "/images/bg1.png",
    title: "Card 2",
    name: "Tess 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    tab: "ExCom",
    logo: "/images/bg1.png",
    title: "Card 2",
    name: "Tess 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    tab: "ExCom",
    logo: "/images/bg4.png",
    title: "Card 2",
    name: "Tess 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  /* Halaman Participants */
  {
    tab: "Participants",
    logo: "/images/bg1.png",
    title: "Card 1",
    name: "Yokohama City, Japan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    tab: "Participants",
    logo: "/images/bg1.png",
    title: "Card 1",
    name: "Yokohama City, Japan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  /*Halaman Host City*/
  {
    tab: "Host City",
    logo: "/images/bg4.png",
    title: "Card 1",
    name: "Denpasar City, Indonesia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    tab: "Host City",
    logo: "/images/bg1.png",
    title: "Card 2",
    name: "Denpasar City, Indonesia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]);

const filteredParticipants = computed(() =>
  participants.value.filter((p) => p.tab === activeTab.value)
);


</script>