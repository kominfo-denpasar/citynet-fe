<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

const map = ref(null);
const markers = ref([]);

const places = [
  {
    id: 1,
    name: "Bajra Sandhi Monument",
    description: "Iconic landmark representing the Balinese struggle.",
    image: "/images/bajra-sandhi.jpg",
    lat: -8.6725,
    lng: 115.2292,
  },
  {
    id: 2,
    name: "Sanur Beach",
    description: "Beautiful sunrise spot with calm waters.",
    image: "/images/sanur-beach.jpg",
    lat: -8.6937,
    lng: 115.263,
  },
  {
    id: 3,
    name: "Bali Museum",
    description: "A glimpse into Bali’s cultural heritage.",
    image: "/images/bali-museum.jpg",
    lat: -8.6563,
    lng: 115.2226,
  },
];

function initMap() {
  map.value = L.map("map", {
    center: [-8.67, 115.23],
    zoom: 13,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map.value);

  markers.value = places.map((p) =>
    L.marker([p.lat, p.lng])
      .addTo(map.value)
      .bindPopup(`<b>${p.name}</b><br>${p.description}`)
  );
}

function highlightPlace(index) {
  if (markers.value[index]) {
    markers.value[index].openPopup();
    map.value.setView(markers.value[index].getLatLng(), 14, { animate: true });
  }
}

function onSlideChange(swiper) {
  highlightPlace(swiper.activeIndex);
}

onMounted(() => {
  initMap();
});
</script>

<template>
  <section class="max-w-7xl mx-auto py-12">
    <h2 class="text-3xl font-bold mb-8">Iconic & Popular Places in Denpasar</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left: Carousel -->
      <div>
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :space-between="20"
          navigation
          @slideChange="onSlideChange"
          class="mb-6"
        >
          <SwiperSlide
            v-for="(place, index) in places"
            :key="place.id"
            @mouseenter="highlightPlace(index)"
          >
            <div
              class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              @click="highlightPlace(index)"
            >
              <img
                :src="place.image"
                :alt="place.name"
                class="w-full h-56 object-cover"
              />
              <div class="p-4">
                <h3 class="font-semibold text-xl">{{ place.name }}</h3>
                <p class="text-sm text-gray-600">{{ place.description }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Right: Map -->
      <div id="map" class="w-full z-0 h-[500px] rounded-xl shadow-md"></div>
    </div>
  </section>
</template>
