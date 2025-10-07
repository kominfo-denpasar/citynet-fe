 <template>
 <section class="w-full py-12">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <!-- Title -->
        <h2 class="text-2xl font-bold mb-8">List Events & Programs</h2>
        <hr class="mt-8 border-gray-300" />

        <!-- Search Section -->
        <form action="#" method="GET" class="bg-gray-200 p-6 sm:p-8 rounded-lg flex flex-wrap items-center gap-3 justify-center mt-10">
          <label for="year" class="sr-only">Select Host Year</label>
          <select id="year" name="year"
            class="px-3 py-2 border border-gray-200 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Host Year</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>

          <!-- Search Input -->
          <div class="relative flex-1 min-w-[200px]">
            <label for="search" class="sr-only">Search</label>
            <input type="text" id="search" name="search" placeholder="Search"
              class="w-full px-4 py-2 pl-10 border border-gray-200 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" />
        
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>

          <!-- Button -->
          <button type="submit"
            class="px-4 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
            Search
          </button>
        </form>
      </div>
    </section>
 </template>