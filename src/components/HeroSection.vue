<template>
  <Header></Header>
  <section
    class="relative w-full min-h-screen text-white overflow-hidden font-sans"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-black/20"></div>

    <nav class="relative z-50 flex justify-between items-center px-8 md:px-16 py-8 w-full">
      <!-- Left: Future of Fashion -->
      <div class="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white">

          <span></span>
      </div>

      <!-- Right: Social Links -->
      <div class="flex items-center space-x-8 text-[10px] font-bold uppercase tracking-widest text-white/70">
        <a href="#" class="hover:text-white transition-colors">IN</a>
        <a href="#" class="hover:text-white transition-colors">TW</a>
        <a href="#" class="hover:text-white transition-colors">YT</a>
        <a href="#" class="hover:text-white transition-colors">GO</a>
      </div>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-20 container mx-auto px-8 md:px-16 pt-4 md:pt-8 flex flex-col md:flex-row h-full items-center">
      <!-- Left Content (40%) -->
      <div class="md:w-[40%] flex flex-col justify-center space-y-8 z-30">

        <!-- Main Heading -->
        <div class="relative">
                <!-- Left: Future of Fashion -->
      <div class="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          <div >
            <img src="../assets/imgs/clean.png " class="w-8 h-8 " alt="">
          </div> <!-- Diamond Icon -->
          <span class="text-[18px]">Future of Fashion</span>
      </div>
<h1
      style="font-size: 128px; letter-spacing: 2px; margin: 0;     font-family: serif;"
      class="font-bold leading-none tracking-tighter opacity-90 select-none text-gradient"
    >
      ASTAR
    </h1>
            <p class="text-white text-sm md:text-base max-w-sm mt-6 leading-relaxed font-light tracking-wide">
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
        <div class="mt-16 pb-[32px] flex items-end space-x-6">
            <div v-for="(item, i) in visibleImages" :key="i" class="relative group cursor-pointer">
                <div
                  :style="{
                    backgroundColor: item.bg,
                    paddingTop: item.pt,
                    paddingLeft: '8px',
                    paddingRight: '8px'
                  }"
                  class="w-[92px] h-[246px] overflow-hidden border border-gray-700/50 skew-x-[-12deg] transition-all duration-500 group-hover:-translate-y-3"
                >
                    <img
                      :src="item.src"
                      class="w-full h-full object-contain  group-hover:opacity-100 transition-opacity duration-500 skew-x-[12deg]"
                    />
                </div>
            </div>
            <div
              @click="nextImage"
              class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
            >
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
               <div class="absolute top-[0px] right-[-150px]  p-4 text-white z-30">
                   <div class="text-xs uppercase tracking-widest font-bold flex flex-col text-gray-300">
                     <p>color</p>
                     <p>Charcoal Gray</p>

                  </div>
                   <div class="text-lg font-bold flex justify-between mt-1">
                       <p class="mr-5">ID:0163647</p>
                    <p>$120.00</p>


                   </div>
               </div>
             </div>

             <!-- Bottom Text (Small) -->
             <div class="mb-4 ml-4 max-w-[250px]">
                <p class="text-[14px] text-white leading-tight uppercase tracking-wide text-right md:text-left">
                  from minimalistic lines to bold silhouettes, astar's cool latest collections designed to inspire experience fashion redefined
                </p>
             </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from './Header.vue';
import bgImage from '../assets/imgs/land.png';
import mo1 from '../assets/imgs/mo1.png';
import mo2 from '../assets/imgs/mod2.png';
import mo3 from '../assets/imgs/mod3.png';
import mo4 from '../assets/imgs/mod4.png';

// All 4 images with their background colors
const allImages = [
  { src: mo1, bg: '#B1ADAA', pt: '80px' },
  { src: mo2, bg: '#91A3A7', pt: '70px' },
  { src: mo3, bg: '#C6D3CF', pt: '40px' },
  { src: mo4, bg: '#B1ADAA', pt: '45px' }
];

const currentIndex = ref(0);

// Get 3 visible images starting from currentIndex
const visibleImages = computed(() => {
  const visible = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex.value + i) % allImages.length;
    visible.push(allImages[index]);
  }
  return visible;
});

// Navigate to next image (carousel loop)
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % allImages.length;
};
</script>

<style scoped>
/* Add any specific scoped styles if tailwind isn't enough */
.writing-mode-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
}
.text-gradient {
      /* تطبيق التدرج اللوني */
      background: linear-gradient(to right, #FDFDFB, #C2BFD7);

      /* استخدام خصائص Webkit لجعل الخلفية تظهر فقط كقناع للنص */
      -webkit-background-clip: text;

      /* جعل لون النص شفافًا لإظهار الخلفية (التدرج) */
      -webkit-text-fill-color: transparent;

      /* خاصية احتياطية للمتصفحات غير المتوافقة */
      color: #FDFDFB;
    }
</style>
