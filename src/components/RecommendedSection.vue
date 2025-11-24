<template>
  <section class="w-full bg-white py-20 border-t border-gray-100">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-2xl font-serif text-gray-900">Recommended For You</h2>
        <a href="#" class="text-xs text-gray-500 hover:text-black uppercase tracking-wide">See All</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Item 1 -->
        <div class="group cursor-pointer">
            <div class="relative overflow-hidden aspect-[3/4] mb-4">
                <img src="https://placehold.co/300x400/e0e7ff/333?text=Soft+Fabric" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute top-4 right-4 bg-white px-2 py-1 text-xs font-bold shadow">$45.00</div>
                <div class="absolute bottom-4 left-4 text-white">
                    <h4 class="font-bold uppercase text-lg">Soft Fabric</h4>
                    <p class="text-xs opacity-80">Summer Collection</p>
                </div>
            </div>
            <button class="w-full py-2 border border-gray-200 text-xs uppercase hover:bg-black hover:text-white transition">
                Pre Order Now
            </button>
        </div>

        <!-- Item 2 -->
        <div class="group cursor-pointer">
            <div class="relative overflow-hidden aspect-[3/4] mb-4">
                <img src="https://placehold.co/300x400/3730a3/fff?text=Green+Fix" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute bottom-0 left-0 w-full h-full bg-black/20 group-hover:bg-transparent transition"></div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 text-white font-bold text-2xl whitespace-nowrap opacity-50 group-hover:opacity-100 transition">
                    GREEN FIX
                </div>
            </div>
        </div>

        <!-- Item 3 -->
        <div class="group cursor-pointer">
            <div class="relative overflow-hidden aspect-[3/4] mb-4">
                <img src="https://placehold.co/300x400/4c1d95/fff?text=Meta+Fashion" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 text-white font-bold text-2xl whitespace-nowrap opacity-50 group-hover:opacity-100 transition">
                    META FASHION
                </div>
            </div>
        </div>

        <!-- Item 4 -->
        <div class="group cursor-pointer">
            <div class="relative overflow-hidden aspect-[3/4] mb-4">
                <img src="https://placehold.co/300x400/d1d5db/333?text=Plasma+Cloth" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 text-white font-bold text-2xl whitespace-nowrap opacity-50 group-hover:opacity-100 transition">
                    PLASMA CLOTH
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
