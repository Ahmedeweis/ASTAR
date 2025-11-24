<template>
  <section class="relative w-full min-h-screen bg-dark text-white overflow-hidden">
    <!-- Background Image Placeholder -->
    <div class="absolute inset-0 bg-gradient-to-r from-dark to-transparent z-10"></div>
    <img src="https://placehold.co/1920x1080/1a1a1f/FFF?text=Hero+Background" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover opacity-50" />

    <!-- Navigation (Simple placeholder based on design) -->
    <nav class="relative z-20 flex justify-between items-center px-10 py-6">
      <div class="text-2xl font-bold tracking-widest">ASTAR</div>
      <div class="hidden md:flex space-x-8 text-sm uppercase tracking-wide text-gray-300">
        <a href="#" class="hover:text-white">Home</a>
        <a href="#" class="hover:text-white">Awards</a>
        <a href="#" class="hover:text-white">Events</a>
        <a href="#" class="hover:text-white">Partners</a>
      </div>
      <div class="flex items-center space-x-4">
        <button class="text-sm uppercase hover:text-white">Search</button>
        <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
      </div>
    </nav>

    <!-- Hero Content -->
    <div class="relative z-20 container mx-auto px-6 pt-20 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 space-y-6">
        <div class="flex items-center space-x-2 text-xs uppercase tracking-widest text-secondary">
          <span class="w-2 h-2 bg-secondary rounded-full"></span>
          <span>Future of Fashion</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          ASTAR
        </h1>
        <p class="text-gray-400 max-w-md text-sm leading-relaxed">
          Discover the latest trends in the world of fashion with our unique collection.
          Experience the future of style today.
        </p>
        <button class="mt-8 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-none skew-x-[-10deg] hover:opacity-90 transition">
          <span class="block skew-x-[10deg]">Discover More</span>
        </button>

        <!-- Small Thumbnails/Slider -->
        <div class="mt-12 flex space-x-4">
            <div v-for="i in 3" :key="i" class="w-20 h-28 bg-gray-800 border border-gray-700 overflow-hidden relative group cursor-pointer">
                <img :src="`https://placehold.co/100x150/222/FFF?text=Look+${i}`" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition" />
            </div>
            <div class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center self-center cursor-pointer">
                <span class="text-xl">&rarr;</span>
            </div>
        </div>
      </div>

      <!-- Hero Main Image -->
      <div class="md:w-1/2 mt-10 md:mt-0 relative">
        <div class="relative z-10">
             <img src="https://placehold.co/500x700/333/FFF?text=Model" alt="Main Model" class="w-full max-w-md mx-auto object-cover shadow-2xl" />
        </div>
        <!-- Decorative Elements -->
        <div class="absolute top-1/4 right-0 text-9xl font-bold text-white opacity-5 pointer-events-none select-none">
            FASHION
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
