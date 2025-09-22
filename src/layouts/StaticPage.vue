<template>
  <Breadcrumb
    class="mb-4"
    :breadcrumbs="breadcrumbs"
    :title="title"
    :subtitle="subtitle"
    :background="background"
  />

  <section class="max-w-5xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-6 text-cyan-700">{{ title }}</h1>
    <slot />
  </section>
</template>

<script setup>
import Breadcrumb from "../components/Breadcrumb.vue";

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  background: { type: String, default: "/images/bg4.png" },
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
});
</script>
