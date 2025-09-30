<style scoped>
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
        @apply !top-auto !bottom-[0rem] !w-8 !h-8;
    }
    :deep(.swiper-button-next) {
        @apply !right-[40%];
    }
    :deep(.swiper-button-prev) {
        @apply !left-[40%];
    }
</style>
<template>
  <section class="max-w-7xl mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Iconic Area in Denpasar</h2>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">Find the best neighborhood that match your interest</p>
    </div>
    <!-- End Title -->

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
            v-for="(place, index) in props.places"
            :key="place.id"
            @mouseenter="highlightPlace(index)"
          >
            <div
              class="bg-white rounded-2xl overflow-hidden transition cursor-pointer"
              @click="highlightPlace(index)"
            >
              <img
                :src="place.image"
                :alt="place.name"
                class="w-full h-56 object-cover"
              />
              <div class="p-4">
                <h3 class="font-semibold text-xl">{{ place.name }}</h3>
                <p class="text-xs text-gray-500 mb-2">{{ place.location }}</p>
                <p class="text-sm text-gray-700">{{ place.short_desc }}</p>
                <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span class="inline-flex items-center gap-2">⭐ {{ place.rating }}</span>
                    <span class="inline-flex items-center gap-2"> {{ place.category }}</span>
                </div>
                <hr class="mt-4 mb-2 border-gray-300"></hr>
                <router-link :to="`/interesting-place/${place.name}`" class="no-underline text-blue-600 dark:text-sky-400 font-medium">
                    More Detail
                </router-link>
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
<script setup>
    import { ref, onMounted, watch } from "vue";
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

    const props = defineProps({
        places: {
            type: Array,
            required: true,
        },
    });

    function initMap() {
        map.value = L.map("map", {
            center: [-8.67, 115.23],
            zoom: 13,
        });

        L.tileLayer("https://basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
            attribution: "&copy; Denpasar City Government",
        }).addTo(map.value);

        markers.value = props.places.map((p) =>
            L.marker([p.lat, p.lng])
            .addTo(map.value)
            .bindPopup(`<b>${p.name}</b><br>${p.category} - ${p.location}`)
        );
    }

    watch(
        () => props.places,
        (newPlaces) => {
            if (map.value && newPlaces.length > 0) {
            // Hapus marker lama
            markers.value.forEach((m) => m.remove());
            markers.value = [];

            // Tambah marker baru
            markers.value = newPlaces.map((p) =>
                L.marker([p.lat, p.lng])
                .addTo(map.value)
                .bindPopup(`<b>${p.name}</b><br>${p.short_desc}`)
            );

            // Fit bounds ke semua marker
            const group = L.featureGroup(markers.value);
            map.value.fitBounds(group.getBounds(), { padding: [50, 50] });
            }
        },
        { immediate: true }
    );

    function highlightPlace(index) {
        if (markers.value[index]) {
            markers.value[index].openPopup();
            map.value.setView(markers.value[index].getLatLng(), 14, { animate: true });
        }
    }

    function onSlideChange(swiper) {
        highlightPlace(swiper.activeIndex);
    }

    const kecamatanNames = {
      "Denpasar Timur": "East Denpasar",
      "Denpasar Barat": "West Denpasar",
      "Denpasar Selatan": "South Denpasar",
      "Denpasar Utara": "North Denpasar"
    };

    onMounted(() => {
      initMap();
      fetch("/data/denpasar_kecamatan.geojson")
        .then(res => res.json())
        .then(data => {
          L.geoJSON(data, {
            style: (feature) => {
              switch (feature.properties.nm_kecamatan) {
                case "Denpasar Timur": 
                  return { color: "#ff0000", weight: 2, fillColor: "#ffcccc", fillOpacity: 0.1 };
                case "Denpasar Barat": 
                  return { color: "#00ff00", weight: 2, fillColor: "#ccffcc", fillOpacity: 0.1 };
                case "Denpasar Selatan": 
                  return { color: "#0000ff", weight: 2, fillColor: "#ccccff", fillOpacity: 0.1 };
                case "Denpasar Utara": 
                  return { color: "#ff9900", weight: 2, fillColor: "#ffe0b3", fillOpacity: 0.1 };
                default: 
                  return { color: "#666", weight: 1, fillColor: "#eee", fillOpacity: 0.1 };
              }
            },
            onEachFeature: (feature, layer) => {
              const indoName = feature.properties.nm_kecamatan;
              const engName = kecamatanNames[indoName] || indoName; // fallback kalau belum dipetakan
              layer.bindPopup(`<b>District: </b>${engName}`);
            }
          }).addTo(map.value); // <-- pakai map.value, bukan map
        });
    });
</script>