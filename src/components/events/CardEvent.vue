<template>
  <!-- Event Cards Section -->
  <section class="max-w-5xl mx-auto p-6">
    <!-- Kalau ada data -->
    <div v-if="events.length" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <RouterLink v-for="event in events" :key="event.id" :to="{ name: 'DetailEvents', params: { id: event.id } }"
        class="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <!-- Gambar -->
        <img :src="event.image" alt="Event" class="w-full h-56 object-cover" />

        <!-- Konten -->
        <div class="p-4 space-y-2">
          <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">
            {{ event.title }}
          </h3>

          <!-- Info -->
          <div class="text-sm text-gray-600 space-y-1">
            <div class="flex justify-between gap-2">
              <span class="font-medium">Event Date:</span>
              <span class="truncate max-w-[150px] text-right">{{ event.date }}</span>
            </div>
            <div class="flex justify-between gap-2">
              <span class="font-medium">Host City:</span>
              <span class="truncate max-w-[150px] text-right">{{ event.city }}</span>
            </div>
            <div class="flex justify-between gap-2">
              <span class="font-medium"># of Participants:</span>
              <span class="truncate max-w-[150px] sm:max-w-[200px] text-right">{{ event.participants }}</span>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>

    <!-- Kalau Data kosong -->
    <div v-else class="flex flex-col items-center justify-center text-center py-4">
      <!-- Ikon -->
      <svg class="w-16 h-16 text-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.35-4.35" />
      </svg>

      <!-- Teks -->
      <h3 class="text-lg font-semibold text-gray-800">No Results Found</h3>
      <p class="text-gray-500 text-sm mt-2 max-w-md">
        The page you requested could not be found. Try refining your search,
        or use the navigation above to locate the post.
      </p>
    </div>
  </section>
</template>

<script setup>
/* DATA DUMMY */
const events = [
  {
    id: 1,
    image: "/images/bg1.png",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro enim unde! Animi aliquam, modi recusandae eaque a aspernatur saepe dolore nulla quasi nihil ducimus delectus iusto blanditiis ab eius!",
    date: "2025-09-01",
    city: "Jakarta",
    participants: "100",
  },
  {
    id: 1,
    image: "/images/bg1.png",
    title: "Example Event",
    date: "2025-09-01",
    city: "Jakarta",
    participants: "100",
  },
  {
    id: 1,
    image: "/images/bg1.png",
    title: "Example Event",
    date: "2025-09-01",
    city: "Jakarta",
    participants: "100",
  },
  {
    id: 1,
    image: "/images/bg1.png",
    title: "Example Event",
    date: "2025-09-01",
    city: "Jakarta",
    participants: "100",
  },
];
</script>
