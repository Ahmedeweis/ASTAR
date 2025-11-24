<template>
  <section class="w-full bg-white py-20">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-start mb-12">
        <h2 class="text-3xl font-serif text-gray-900 max-w-xs">
          Upcoming Events In 2025
        </h2>
        <p class="text-xs text-gray-400 max-w-md text-right hidden md:block">
            Stay updated with the latest fashion shows, exhibitions, and exclusive parties.
            Don't miss out on the future of style.
        </p>
      </div>

      <!-- Large Banner Event -->
      <div class="relative w-full h-[400px] overflow-hidden group">
          <img src="https://placehold.co/1200x500/e0f2fe/333?text=Event+Banner" class="w-full h-full object-cover" />

          <!-- Overlay Content -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-10 text-white">
              <div class="flex justify-between items-end">
                  <div>
                      <h3 class="text-4xl font-bold mb-2">Join Astar</h3>
                      <p class="text-sm opacity-80 mb-6 max-w-md">
                          The annual showcase of digital fashion and sustainable design.
                      </p>
                      <button class="bg-white text-black px-6 py-2 text-sm font-bold uppercase hover:bg-gray-200 transition">
                          RSVP Now
                      </button>
                  </div>
                  <div class="text-right">
                      <span class="text-6xl font-bold opacity-20 block">ASTAR</span>
                      <span class="text-lg font-mono">October 15, 2025</span>
                  </div>
              </div>
          </div>

          <!-- Center Model Overlay (Simulated) -->
          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-80">
               <img src="https://placehold.co/300x400/fff/333?text=Model" class="w-full h-full object-cover object-top mask-image-gradient" />
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Simple mask to blend image at bottom if needed */
.mask-image-gradient {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}
</style>

<script setup>
</script>
