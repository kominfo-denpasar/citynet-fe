<template>
  <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="border-t border-gray-200 dark:border-neutral-700 my-10"></div>

    <!-- Grid Sections -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
      <!-- Brand -->
      <div class="col-span-full hidden lg:col-span-1 lg:block">
        <a class="font-semibold text-xl text-black dark:text-white" href="/">
          {{ footerData.brand.name }}
        </a>
        <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
          {{ footerData.brand.copyright }}
        </p>
      </div>

      <!-- Sections -->
      <div v-for="(section, i) in footerData.sections" :key="i">
        <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
          {{ section.title }}
        </h4>
        <div class="mt-3 grid space-y-3 text-sm">
          <p v-for="(link, j) in section.links" :key="j">
            <RouterLink
              :to="link.url"
              class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              {{ link.label }}
              <span v-if="link.badge" class="inline text-blue-600 dark:text-blue-500">
                {{ link.badge }}
              </span>
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
    <!-- End Grid Sections -->

    <!-- Bottom -->
    <div class="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700 sm:flex sm:justify-between sm:items-center">
      <!-- Policies -->
      <div class="space-x-4 text-sm">
        <RouterLink
          v-for="(policy, i) in footerData.policies"
          :key="i"
          :to="policy.url"
          class="text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
        >
          {{ policy.label }}
        </RouterLink>
      </div>

      <!-- Socials -->
      <div class="space-x-4 mt-3 sm:mt-0">
        <a
          v-for="(social, i) in footerData.socials"
          :key="i"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
        >
          {{ social.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerData from "@/data/menuLinks.json";
</script>
