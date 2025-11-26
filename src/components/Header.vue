<template>
  <header class="relative z-50 w-full h-24 flex items-center justify-between px-8 md:px-16 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#dcdce6] via-[#a8aabc] to-[#7c7d96] z-0"></div>

    <!-- Logo Section -->
    <div class="relative z-20 flex items-center gap-3">
      <!-- Logo Icon -->
      <div class="w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L5 35H12L20 18L28 35H35L20 5Z" fill="#2a2a30"/>
          <path d="M10 28H30" stroke="#2a2a30" stroke-width="0"/>
          <!-- Adding a small cut or detail to match the 'A' style if needed, keeping it simple for now -->
          <path d="M14 35L20 22L26 35" fill="none" stroke="#dcdce6" stroke-width="2"/>
        </svg>
      </div>
      <span class="text-3xl font-extrabold text-[#2a2a30] tracking-wider font-sans">ASTAR</span>
    </div>

    <!-- Navigation Section -->
    <nav class="hidden md:flex items-center h-full relative z-10">
        <!-- Dark Skewed Background for Home -->
        <div class="absolute left-0 top-0 bottom-0 w-64 bg-[#353540] -skew-x-[25deg] -ml-16 z-0 origin-bottom"></div>

        <ul class="flex items-center gap-16 relative z-10 h-full pl-8">
            <li class="h-full flex items-center">
                <a href="#" class="text-white font-bold tracking-wide text-lg">Home</a>
            </li>
            <li><a href="#" class="text-[#2a2a30] font-medium text-lg hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" class="text-[#2a2a30] font-medium text-lg hover:text-white transition-colors">Event</a></li>
            <li><a href="#" class="text-[#2a2a30] font-medium text-lg hover:text-white transition-colors">Products</a></li>
        </ul>
    </nav>

    <!-- Contact Us Section -->
    <div class="relative z-20 flex items-center gap-4">
      <span class="text-[#2a2a30] font-bold text-base uppercase tracking-wide">Contact Us</span>
      <div class="w-10 h-10 rounded-full border-2 border-[#2a2a30] flex items-center justify-center text-[#2a2a30] hover:bg-[#2a2a30] hover:text-white transition-colors cursor-pointer">
        <!-- Headset Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>
