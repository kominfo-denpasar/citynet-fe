<template>
  <section class="max-w-5xl mx-auto p-6">
    <!-- Loader -->
    <div v-if="loading" class="flex justify-center py-6">
      <div class="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-500"></div>
      <span class="ml-2 text-gray-600">Loading...</span>
    </div>

    <!-- Kalau ada data -->
    <div v-else-if="events.length" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <RouterLink
        v-for="event in events"
        :key="event.id"
        :to="{ name: 'EventDetail', params: { id: event.id } }"
        class="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <img
          :src="event.images.length ? event.images[0].url : '/images/bg1.png'"
          alt="Event"
          class="w-full h-56 object-cover"
        />
        <div class="p-4 space-y-2">
          <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">
            {{ event.title }}
          </h3>
          <div class="text-sm text-gray-600 space-y-1">
            <div class="flex justify-between gap-2">
              <span class="font-medium">Event Date:</span>
              <span>{{ event.start_date.split("T")[0] }}</span>
            </div>
            <div class="flex justify-between gap-2">
              <span class="font-medium">Host:</span>
              <span>{{ event.organizer?.name || "-" }}</span>
            </div>
            <div class="flex justify-between gap-2">
              <span class="font-medium">Participants:</span>
              <span>{{ event.statistics?.attendees_registered || 0 }}</span>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>

    <!-- Kalau Data kosong -->
    <div v-else class="flex flex-col items-center justify-center text-center py-4">
      <h3 class="text-lg font-semibold text-gray-800">No Results Found</h3>
      <p class="text-gray-500 text-sm mt-2">Try refining your search, or check back later.</p>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-6" v-if="pagination.total > pagination.perPage">
      <button
        class="px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        :disabled="pagination.page === 1 || loading"
        @click="prevPage"
      >
        Prev
      </button>
      <span class="px-4 py-2">Page {{ pagination.page }} of {{ totalPages }}</span>
      <button
        class="px-4 py-2 mx-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        :disabled="pagination.page * pagination.perPage >= pagination.total || loading"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useEventStore } from "@/store/useEventStore";

const store = useEventStore();
const { events, pagination, loading } = storeToRefs(store);

onMounted(() => {
  store.fetchEvents({ status: "LIVE" });
});

watch(
  () => pagination.value.page,
  () => {
    store.fetchEvents();
  }
);

const totalPages = computed(() =>
  Math.ceil(pagination.value.total / pagination.value.perPage)
);

const prevPage = () => {
  if (pagination.value.page > 1) {
    store.setPage(pagination.value.page - 1);
  }
};

const nextPage = () => {
  if (pagination.value.page * pagination.value.perPage < pagination.value.total) {
    store.setPage(pagination.value.page + 1);
  }
};
</script>
