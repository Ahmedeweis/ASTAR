<template>
  <section class="w-full bg-gray-100 py-16">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
           <h3 class="text-sm uppercase tracking-widest text-gray-500 mb-2">Big Promo</h3>
           <h2 class="text-3xl md:text-4xl font-serif text-gray-900">
             Limited Time Offer<br />
             Pre Order Your Future Look
           </h2>
        </div>
        <button class="px-6 py-2 bg-dark text-white text-sm uppercase tracking-wide hover:bg-gray-800 transition mt-4 md:mt-0">
            See Collection
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="relative group overflow-hidden bg-white shadow-lg aspect-[4/5]">
            <img src="https://placehold.co/400x500/ddd/333?text=Promo+1" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2">
                <span class="text-xs font-bold uppercase">New Arrival</span>
            </div>
             <button class="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                &rarr;
            </button>
        </div>

        <!-- Card 2 (Center - Dark) -->
        <div class="relative bg-dark text-white p-8 flex flex-col justify-center aspect-[4/5]">
             <div class="absolute top-4 right-4">
                 <div class="w-10 h-5 bg-gray-600 rounded-full p-1 cursor-pointer">
                     <div class="w-3 h-3 bg-white rounded-full"></div>
                 </div>
             </div>
             <h3 class="text-2xl font-bold mb-4">Let's explore the avatar</h3>
             <p class="text-gray-400 text-sm mb-6">
                 A new generation of fashion design. Experience the digital revolution in clothing.
             </p>
             <a href="#" class="text-sm underline decoration-gray-500 hover:text-gray-300">Read More</a>
        </div>

        <!-- Card 3 -->
        <div class="relative group overflow-hidden bg-white shadow-lg aspect-[4/5]">
            <img src="https://placehold.co/400x500/ccc/333?text=Promo+2" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
             <div class="absolute top-4 left-4 text-white font-bold text-xl">02</div>
             <button class="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                &rarr;
            </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
