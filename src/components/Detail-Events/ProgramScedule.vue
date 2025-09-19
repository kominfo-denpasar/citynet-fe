<template>
  <!-- Programme Schedule Section -->
  <section class="max-w-6xl mx-auto px-6 py-8">
    <h2 class="text-2xl md:text-3xl font-bold mb-8">Programme Schedule</h2>

    <div class="space-y-4">
      <!-- Accordion Item -->
      <article class="border rounded-lg overflow-hidden">
        <button @click="toggleAccordion(1)"
          class="w-full flex justify-between items-center px-4 py-3 text-left font-medium">
          <span>Information Guide</span>
          <span class="material-icons transition-transform duration-300"
            :class="openAccordion === 1 ? 'rotate-180' : ''">expand_more</span>
        </button>
        <div v-if="openAccordion === 1" class="p-4 border-t bg-gray-100">
          <p class="text-gray-600">Content</p>
        </div>
      </article>

      <article class="border rounded-lg overflow-hidden">
        <button @click="toggleAccordion(2)"
          class="w-full flex justify-between items-center px-4 py-3 text-left font-medium">
          <span>Programme</span>
          <span class="material-icons transition-transform duration-300"
            :class="openAccordion === 2 ? 'rotate-180' : ''">expand_more</span>
        </button>
        <div v-if="openAccordion === 2" class="p-4 border-t bg-white space-y-4">
          <div v-for="(prog, index) in programmes" :key="index"
            class="flex justify-between items-center bg-gray-100 border rounded-lg p-4">
            <span class="text-gray-700 truncate">{{ prog.title }}</span>
            <a :href="prog.link"
              class="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-blue-200">
              Download
              <span class="material-icons text-sm">download</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>


<script setup>
import { ref, computed } from "vue";

/*Js PROGRAM SCHEDULE*/
const openAccordion = ref(null);
function toggleAccordion(index) {
  openAccordion.value = openAccordion.value === index ? null : index;
}

const programmes = ref([
  { title: "Tes 1", link: "#" },
  { title: "Tes 2", link: "#" },
]);
</script>