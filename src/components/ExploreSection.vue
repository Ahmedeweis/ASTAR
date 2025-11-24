<template>
  <section class="w-full bg-white py-20">
    <div class="container mx-auto px-6">
      <div class="flex flex-col items-center text-center mb-16">
        <h2 class="text-4xl font-serif text-gray-900 mb-4">Explore The Collection</h2>
        <p class="text-gray-500 max-w-lg">
            Dive into our exclusive range of digital and physical fashion items.
            Designed for the bold and the visionary.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="relative group cursor-pointer">
              <div class="overflow-hidden aspect-[3/4] mb-4">
                  <img src="https://placehold.co/400x500/f3f4f6/333?text=Casual+Wear" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <h3 class="text-xl font-bold mb-1">Casual Wear</h3>
              <p class="text-xs text-gray-400 uppercase tracking-wide">Daily Comfort</p>
          </div>

          <!-- Card 2 -->
          <div class="relative group cursor-pointer mt-0 md:-mt-12">
              <div class="overflow-hidden aspect-[3/4] mb-4 shadow-xl">
                  <img src="https://placehold.co/400x500/1f2937/fff?text=Formal+Attire" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <h3 class="text-xl font-bold mb-1">Formal Attire</h3>
              <p class="text-xs text-gray-400 uppercase tracking-wide">Elegant & Sharp</p>
          </div>

          <!-- Card 3 -->
          <div class="relative group cursor-pointer">
              <div class="overflow-hidden aspect-[3/4] mb-4">
                  <img src="https://placehold.co/400x500/e5e7eb/333?text=Accessories" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <h3 class="text-xl font-bold mb-1">Accessories</h3>
              <p class="text-xs text-gray-400 uppercase tracking-wide">Complete The Look</p>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
