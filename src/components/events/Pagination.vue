<template>
     <!-- Pagination -->
      <div class="w-full flex justify-center mt-6">
        <nav class="flex items-center gap-x-1" aria-label="Pagination">
          <!-- Previous Button -->
          <button type="button"
            class="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous">
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span class="sr-only">Previous</span>
          </button>

          <!-- Page Numbers -->
          <div class="flex items-center gap-x-1">
            <span
              class="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg">1</span>
            <span class="min-h-9.5 flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">of</span>
            <span class="min-h-9.5 flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">3</span>
          </div>

          <!-- Next Button -->
          <button type="button"
            class="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next">
            <span class="sr-only">Next</span>
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </nav>
      </div>
</template>