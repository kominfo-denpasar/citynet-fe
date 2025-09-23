<script setup>
import { ref, onMounted } from "vue"

const records = ref([])

// base file server yang benar
const baseImageUrl = "https://pengaduan.denpasarkota.go.id/files/image/"

// helper URL gambar – aman untuk spasi & full URL
const getImageUrl = (imagePath) => {
  if (!imagePath) return "/images/no-image.png"

  // Jika API sudah mengirim full URL (https://...)
  if (/^https?:\/\//i.test(imagePath)) return imagePath

  // Jika path sudah mengandung files/image, jangan dobel
  if (imagePath.includes("files/image/")) {
    return "https://pengaduan.denpasarkota.go.id/" + imagePath.replace(/^\/+/, "")
  }

  // Normal: hanya nama file -> gabungkan + encode
  return baseImageUrl + encodeURIComponent(imagePath)
}

// ambil data API
const fetchData = async () => {
  try {
    const res = await fetch(
      "https://dev-old.kreatifitas.site/prodps/api/records/content?filter=other,eq,WV&filter=status,eq,1&include=title,description,image,url,alias"
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    records.value = data.records ?? data.data ?? []
  } catch (err) {
    console.error("Gagal mengambil data dari API:", err)
  }
}

onMounted(fetchData)
</script>

<template>
  <section
    class="relative w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16"
  >
    <!-- Background -->
    <img
      src="/images/bg3.png"
      alt="Latar belakang Citynet"
      class="absolute inset-0 w-full h-full object-cover object-top transform scale-105 z-0 pointer-events-none"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-white/20 z-0"></div>

    <!-- Header -->
    <header class="relative z-10 self-start ml-28 mt-12">
      <h2
        class="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900"
        style="text-shadow: 2px 2px 2px rgba(0,0,0,0.5);"
      >
        AYO JELAJAH KOTA DENPASAR
      </h2>

      <!-- Progres Bar -->
      <div class="flex items-center space-x-6 pt-4 pb-8" aria-hidden="true">
        <div
          class="w-[500px] h-[4px] bg-gradient-to-r from-cyan-400 to-blue-600"
        ></div>
        <div class="w-20 h-[4px] bg-black"></div>
      </div>
    </header>

    <!-- Wrapper Slider -->
    <div
      class="relative w-full max-w-6xl mx-auto overflow-x-auto scrollbar-hide pt-10 pb-10 z-10"
    >
      <!-- Card Container -->
      <div id="slider" class="flex flex-nowrap gap-6">
        <article
          v-for="(item, i) in records"
          :key="i"
          class="flex-shrink-0 w-64 md:w-72 bg-white rounded-3xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105"
        >
        <img
        :src="getImageUrl(item.image)"
        :alt="item.title"
        class="h-28 mb-4 object-contain"
      />

          <h3 class="font-bold text-lg md:text-xl">{{ item.title }}</h3>
          <a
            :href="item.url"
            target="_blank"
            rel="noopener"
            class="mt-3 px-4 py-2 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 hover:scale-95 transition"
          >
            Read More
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
