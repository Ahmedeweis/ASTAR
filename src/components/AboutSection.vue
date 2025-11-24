<template>
  <section class="w-full bg-white py-20">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <!-- Text Content -->
        <div class="md:w-1/3">
           <h3 class="text-sm uppercase tracking-widest text-gray-500 mb-4">About Us</h3>
           <div class="w-12 h-0.5 bg-gray-300 mb-8"></div>
        </div>

        <!-- Image 1 -->
        <div class="md:w-1/3">
             <img src="https://placehold.co/400x500/84cc16/fff?text=Green+Dress" alt="Fashion Model" class="w-full h-auto object-cover shadow-lg" />
             <p class="mt-4 text-xs text-gray-400 max-w-xs">
                 A look at the future of fashion design, incorporating sustainable materials and digital innovation.
             </p>
        </div>

        <!-- Image 2 (Offset) -->
        <div class="md:w-1/3 mt-12 md:mt-0">
            <div class="bg-purple-100 w-full h-64 mb-4"></div> <!-- Placeholder block -->
        </div>
      </div>

      <!-- Second Row / Overlapping Layout -->
      <div class="flex flex-col md:flex-row items-center gap-12 mt-20">
          <div class="md:w-1/3 relative">
               <div class="absolute -top-10 -left-10 w-full h-full bg-purple-200 -z-10"></div>
               <img src="https://placehold.co/300x400/991b1b/fff?text=Red+Dress" alt="Red Dress" class="w-full h-auto object-cover shadow-lg relative z-10" />
          </div>

          <div class="md:w-2/3 relative">
              <h2 class="text-[10rem] font-bold text-gray-50 opacity-50 absolute -top-20 left-0 select-none pointer-events-none">
                  ASTAR
              </h2>
              <div class="flex justify-end">
                  <img src="https://placehold.co/200x200/3b82f6/fff?text=Event" class="w-48 h-48 object-cover rounded-lg shadow-lg" />
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
