<template>
  <section class="w-full bg-[#E8E3F0] py-16 px-8 md:px-16">
    <div class="container mx-auto">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
           <h3 class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3 font-bold">Big Promo</h3>
           <h2 class="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
             Limited Time Offer<br />
             Pre Order Your Future Look
           </h2>
        </div>
        <div class="mt-6 md:mt-0 text-right">
          <p class="text-xs text-gray-600 leading-relaxed max-w-xs mb-4">
            Be The First To Own Astar's Latest Futuristic<br />
            Designs. Pre-Order Now To Secure Exclusive Early<br />
            Access To Limited-Edition Collections
          </p>
          <button class="group relative px-8 py-3 bg-[#3a3a40] overflow-hidden rounded-none skew-x-[-8deg] transition-all hover:bg-[#2a2a30]">
            <span class="block skew-x-[8deg] text-xs font-bold uppercase tracking-widest text-white">
              Pre Order Now
            </span>
          </button>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Card 1: NanoSilk™ -->
        <div class="relative group overflow-hidden bg-[#F5F1E8] aspect-[3/4] border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              alt="NanoSilk"
            />
            <div class="absolute bottom-6 left-6">
                <span class="text-sm font-bold uppercase tracking-wider">NanoSilk™</span>
            </div>
            <button class="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all group-hover:scale-110">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
               </svg>
            </button>
        </div>

        <!-- Card 2: let's explore the astar (Dark) -->
        <div class="relative bg-[#3a3a40] text-white p-8 flex flex-col justify-center aspect-[3/4]">
             <div class="absolute top-6 right-6">
                 <div class="w-12 h-6 bg-gray-600 rounded-full p-1 cursor-pointer flex items-center">
                     <div class="w-4 h-4 bg-white rounded-full"></div>
                 </div>
             </div>
             <h3 class="text-2xl md:text-3xl font-light mb-6 leading-tight">
               let's<br />
               explore<br />
               the astar
             </h3>
             <p class="text-gray-300 text-xs leading-relaxed mb-6">
               From Minimalistic Lines To Bold Silhouettes,<br />
               Astar's Latest Collection Is Designed To Inspire.<br />
               Experience Fashion Redefined. These Dresses<br />
               Incorporate The Latest in Fashion-Tech, From<br />
               Smart Fabrics To Eco-Conscious Materials
             </p>
        </div>

        <!-- Card 3: BioFlex™ (Purple) -->
        <div class="relative group overflow-hidden bg-gradient-to-br from-[#B794F6] to-[#9F7AEA] aspect-[3/4]">
            <div class="absolute top-6 left-6 text-white">
                <span class="text-sm font-bold uppercase tracking-wider">BioFlex™</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=600&fit=crop"
              class="w-full h-full object-cover mix-blend-overlay transition duration-500 group-hover:scale-105"
              alt="BioFlex"
            />
            <button class="absolute bottom-6 right-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all group-hover:scale-110">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
               </svg>
            </button>
        </div>

        <!-- Card 4: Model Image -->
        <div class="relative group overflow-hidden bg-[#3a3a40] aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              alt="Fashion Model"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Additional styles if needed */
</style>
