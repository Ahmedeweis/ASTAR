<template>
  <section
    class="relative w-full min-h-screen text-white overflow-hidden font-sans"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-black/20"></div>

    <Header />

    <!-- Hero Content -->
    <div class="relative z-20 container mx-auto px-8 md:px-16 pt-12 md:pt-20 flex flex-col md:flex-row h-full items-center">
      <!-- Left Content (40%) -->
      <div class="md:w-[40%] flex flex-col justify-center space-y-8 z-30">

        <!-- Main Heading -->
        <div class="relative">
            <h1 class="text-7xl md:text-[9rem] font-bold leading-none tracking-tighter text-white opacity-90 select-none">
            ASTAR
            </h1>
            <p class="text-gray-400 text-sm md:text-base max-w-sm mt-6 leading-relaxed font-light tracking-wide">
              Discover the latest trends in the world of fashion with our unique collection.
              Experience the future of style today with <span class="text-white font-medium">ASTAR</span>.
            </p>
        </div>

        <!-- CTA Button -->
        <div class="pt-4">
            <button class="group relative px-8 py-4 bg-[#2a2a30] overflow-hidden rounded-none skew-x-[-10deg] transition-all hover:bg-[#3a3a40]">
              <div class="absolute inset-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 group-hover:translate-x-full transition-transform duration-700"></div>
              <span class="block skew-x-[10deg] text-xs font-bold uppercase tracking-widest text-white">
                Discover More
                <span class="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </button>
        </div>

        <!-- Thumbnails -->
        <div class="mt-16 flex items-end space-x-6">
            <div v-for="i in 3" :key="i" class="relative group cursor-pointer">
                <div class="w-24 h-32 bg-gray-800 overflow-hidden border border-gray-700/50 skew-x-[-6deg] transition-transform group-hover:-translate-y-2">
                    <img :src="`https://placehold.co/200x300/222/FFF?text=Look+${i}`" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 skew-x-[6deg] scale-125" />
                </div>
            </div>
            <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </div>
      </div>

      <!-- Right Content (Image) (60%) -->
      <div class="md:w-[60%] relative h-[600px] md:h-auto flex items-end justify-center md:justify-end pb-0">
         <!-- Background Text -->
        <div class="absolute top-20 right-0 text-[12rem] font-bold text-white opacity-[0.02] leading-none pointer-events-none select-none z-0 writing-mode-vertical">
            FASHION
        </div>

        <!-- Main Image Container -->
        <div class="relative z-20 w-full flex items-end justify-between ">

             <!-- Image Wrapper -->
             <div class="relative">
               <img src="../assets/imgs/Model.png" alt="Main Model" class="relative z-10 w-full max-w-xl h-auto object-cover scale-125" />

               <!-- Floating Price Tag -->
               <div class="absolute top-1/4 right-[-83px]  p-4 text-white z-30">
                   <div class="text-xs uppercase tracking-widest text-gray-300">New Arrival</div>
                   <div class="text-xl font-bold mt-1">$120.00</div>
               </div>
             </div>

             <!-- Bottom Text (Small) -->
             <div class="mb-4 ml-4 max-w-[150px]">
                <p class="text-[10px] text-gray-400 leading-tight uppercase tracking-wide text-right md:text-left">
                  from minimalistic lines to bold silhouettes, astar's cool latest collections designed to inspire experience fashion redefined
                </p>
             </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import Header from './Header.vue';
import bgImage from '../assets/imgs/land.png';
</script>

<style scoped>
/* Add any specific scoped styles if tailwind isn't enough */
.writing-mode-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
}
</style>
