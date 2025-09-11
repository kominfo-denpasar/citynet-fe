<template>
     <!-- Archive Section -->
    <section class="max-w-6xl mx-auto px-6 py-12">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-10">Archive</h2>

      <div class="space-y-8">
        <article v-for="event in events" :key="event.id"
          class="max-w-5xl mx-auto p-6 border-2 rounded-lg shadow-sm bg-white">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <!-- Gambar -->
            <figure>
              <img :src="event.image" :alt="event.title" class="w-full h-72 object-cover rounded-lg" />
            </figure>

            <!-- Konten -->
            <div class="flex flex-col h-full">
              <h3 class="text-xl md:text-2xl font-bold leading-snug mb-4">
                {{ event.title }}
              </h3>

              <!-- Detail Info -->
              <dl class="text-sm text-gray-700 space-y-2 flex-1">
                <div class="flex justify-between border-b pb-1">
                  <dt class="font-medium">Event Date</dt>
                  <dd>{{ event.date }}</dd>
                </div>
                <div class="flex justify-between border-b pb-1">
                  <dt class="font-medium">Host City</dt>
                  <dd>{{ event.location }}</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="font-medium"># of Participants</dt>
                  <dd>{{ event.participants }}</dd>
                </div>
              </dl>

              <!-- Tombol -->
              <div class="mt-6">
                <router-link :to="`#`"
                  class="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition inline-block text-center hover:scale-95">
                  Check Event Information
                </router-link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
</template>

<script setup>
import { ref, computed } from "vue";

/* ================== Input Data Event ===============*/
const events = ref([
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2023.10.23",
    location: "Denpasar, Bali",
    participants: "-abc",
    image: "/images/bg1.png",
  },
]);
</script>
