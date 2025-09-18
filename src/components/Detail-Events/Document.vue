<template>
     <!-- Document Section -->
        <section class="max-w-6xl mx-auto px-6 py-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-8">Documents</h2>
    
          <div class="space-y-4">
            <article class="border rounded-lg overflow-hidden">
              <button @click="toggleAccordionDocuments(1)"
                class="w-full flex justify-between items-center px-4 py-3 text-left font-medium">
                <span>Presentations</span>
                <span class="material-icons transition-transform duration-300"
                  :class="openAccordionDocuments === 1 ? 'rotate-180' : ''">expand_more</span>
              </button>
              <div v-if="openAccordionDocuments === 1" class="p-4 border-t bg-gray-100">
                <p class="text-gray-600">Content</p>
              </div>
            </article>
    
            <article class="border rounded-lg overflow-hidden">
              <button @click="toggleAccordionDocuments(2)"
                class="w-full flex justify-between items-center px-4 py-3 text-left font-medium">
                <span>Agenda Papers</span>
                <span class="material-icons transition-transform duration-300"
                  :class="openAccordionDocuments === 2 ? 'rotate-180' : ''">expand_more</span>
              </button>
              <div v-if="openAccordionDocuments === 2" class="p-4 border-t bg-white space-y-4">
                <div v-for="(doc, index) in documents" :key="index"
                  class="flex justify-between items-center bg-gray-100 border rounded-lg p-4">
                  <span class="text-gray-700 truncate">{{ doc.title }}</span>
                  <a :href="doc.link"
                    class="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-blue-200">
                    Download
                    <span class="material-icons text-sm">download</span>
                  </a>
                </div>
              </div>
            </article>
    
            <article class="border rounded-lg overflow-hidden">
              <button @click="toggleAccordionDocuments(3)"
                class="w-full flex justify-between items-center px-4 py-3 text-left font-medium">
                <span>Final Report</span>
                <span class="material-icons transition-transform duration-300"
                  :class="openAccordionDocuments === 3 ? 'rotate-180' : ''">expand_more</span>
              </button>
              <div v-if="openAccordionDocuments === 3" class="p-4 border-t bg-gray-100">
                <p class="text-gray-600">Content</p>
              </div>
            </article>
          </div>
        </section>
</template>

<script setup>
import { ref, computed } from "vue";
/* Accordion State khusus DOCUMENTS */
const openAccordionDocuments = ref(null);

function toggleAccordionDocuments(index) {
  openAccordionDocuments.value =
    openAccordionDocuments.value === index ? null : index;
}

/* Tambah Data Dummy DOCUMENTS */
const documents = ref([
  {
    title: "[PDF] Agenda Paper 1",
    link: "#",
  },
  {
    title: "[WORD] Agenda Paper 2",
    link: "#",
  },
  {
    title: "[EXCEL] Agenda Paper 3",
    link: "#",
  },
]);

</script>