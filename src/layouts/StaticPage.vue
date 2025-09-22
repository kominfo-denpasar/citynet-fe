<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold mb-6 text-cyan-700">{{ title }}</h1>
    <slot />
  </section>
</template>

<script>
export default {
  name: "StaticPage",
  props: {
    title: String,
  },
};
</script>