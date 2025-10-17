<template>
  <section class="py-16 px-6 max-w-6xl mx-auto">
    <h2 class="text-2xl font-semibold mb-6">Where to Explore</h2>
    <div id="map" class="h-[500px] w-full rounded-xl shadow"></div>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  places: {
    type: Array,
    required: true
  },
  center: {
    type: Array,
    default: () => [-8.6955, 115.2624]
  },
  zoom: {
    type: Number,
    default: 14
  }
})

let mapInstance

onMounted(() => {
  initMap()
})

watch(
  () => props.places,
  () => {
    if (mapInstance) {
      updateMarkers()
    }
  },
  { deep: true }
)

function initMap() {
  mapInstance = L.map('map').setView(props.center, props.zoom)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mapInstance)

  updateMarkers()
}

function updateMarkers() {
  props.places.forEach((place) => {
    const marker = L.marker([place.lat, place.lng]).addTo(mapInstance)
    const popupContent = `
      <div class="text-center">
        <img src="${place.image}" alt="${place.name}" style="width:100%;border-radius:8px;margin-bottom:8px;" />
        <h3 style="font-weight:bold;margin-bottom:4px;">${place.name}</h3>
        <p style="font-size:0.9rem;color:#555;">${place.description}</p>
      </div>
    `
    marker.bindPopup(popupContent)
  })
}
</script>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}
</style>
