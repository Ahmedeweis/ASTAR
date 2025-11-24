<template>
  <div class="w-full overflow-x-hidden">
    <HeroSection />
    <PromoSection />
    <ExploreSection />
    <AboutSection />
    <EventsSection />
    <RecommendedSection />
    <SubscribeSection />
    <Footer />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import PromoSection from '../components/PromoSection.vue';
import ExploreSection from '../components/ExploreSection.vue';
import AboutSection from '../components/AboutSection.vue';
import EventsSection from '../components/EventsSection.vue';
import RecommendedSection from '../components/RecommendedSection.vue';
import SubscribeSection from '../components/SubscribeSection.vue';
import Footer from '../components/Footer.vue';
</script>