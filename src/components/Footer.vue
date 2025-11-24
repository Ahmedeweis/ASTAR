<template>
  <footer class="bg-dark text-gray-400 py-16 text-sm">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
        <!-- Brand Column -->
        <div class="md:col-span-2">
          <div class="text-2xl font-bold text-white mb-6 tracking-widest">ASTAR</div>
          <p class="mb-6 max-w-xs leading-relaxed">
            The World's Largest Digital Fashion House. Unique Fashion For Unique People.
            Join the revolution.
          </p>
          <div class="flex items-center bg-gray-800 rounded overflow-hidden max-w-xs">
              <input type="text" placeholder="Enter Your Email" class="bg-transparent px-4 py-2 w-full focus:outline-none text-white text-xs" />
              <button class="bg-gray-700 px-3 py-2 text-white hover:bg-gray-600">
                  &rarr;
              </button>
          </div>
        </div>

        <!-- Links Columns -->
        <div>
          <h4 class="text-white font-bold mb-6">About</h4>
          <ul class="space-y-3">
            <li><a href="#" class="hover:text-white transition">About Us</a></li>
            <li><a href="#" class="hover:text-white transition">Services</a></li>
            <li><a href="#" class="hover:text-white transition">Blog</a></li>
            <li><a href="#" class="hover:text-white transition">Community</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Company</h4>
          <ul class="space-y-3">
            <li><a href="#" class="hover:text-white transition">Why Astar?</a></li>
            <li><a href="#" class="hover:text-white transition">Security</a></li>
            <li><a href="#" class="hover:text-white transition">Partner</a></li>
            <li><a href="#" class="hover:text-white transition">Management</a></li>
          </ul>
        </div>

        <div>
           <h4 class="text-white font-bold mb-6">Support</h4>
           <ul class="space-y-3">
            <li><a href="#" class="hover:text-white transition">FAQ</a></li>
            <li><a href="#" class="hover:text-white transition">Customer Support</a></li>
            <li><a href="#" class="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" class="hover:text-white transition">Help Center</a></li>
           </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2025 Astar. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white">Design By Handousmade</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
