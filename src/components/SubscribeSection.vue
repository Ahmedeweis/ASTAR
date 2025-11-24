<template>
  <section class="w-full py-20 px-6">
    <div class="container mx-auto">
      <div class="relative w-full bg-gradient-to-r from-gray-400 to-gray-600 h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <!-- Background Overlay/Image -->
        <div class="absolute inset-0 bg-black/20"></div>

        <!-- Content -->
        <div class="relative z-10 text-center text-white px-4">
          <h2 class="text-3xl md:text-4xl font-serif mb-4">Stay Ahead Of The Trends</h2>
          <p class="text-sm opacity-80 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter to get the latest updates on new collections and exclusive offers.
          </p>

          <div class="flex flex-col md:flex-row justify-center items-center gap-4">
             <input type="email" placeholder="Enter Your Email" class="px-4 py-3 w-full md:w-80 text-black focus:outline-none" />
             <button class="px-8 py-3 bg-white text-black font-bold uppercase hover:bg-gray-200 transition">
                 Subscribe Now
             </button>
          </div>
        </div>

        <!-- Decorative Slant -->
        <div class="absolute top-0 right-0 w-1/3 h-full bg-dark transform skew-x-[-20deg] translate-x-20 opacity-80 hidden md:block"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
