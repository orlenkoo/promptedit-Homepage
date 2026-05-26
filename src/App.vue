<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import IntroSection from './components/IntroSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import EditingPlugins from './components/EditingPlugins.vue'
import PricingSection from './components/PricingSection.vue'
import TemplatesLibrary from './components/TemplatesLibrary.vue'
import AssetCategories from './components/AssetCategories.vue'
import Testimonials from './components/Testimonials.vue'
import WhoIsItFor from './components/WhoIsItFor.vue'
import Guarantee from './components/Guarantee.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <main>
      <HeroSection />
      <IntroSection />
      <ToolsSection />
      <EditingPlugins />
      <PricingSection />
      <TemplatesLibrary />
      <AssetCategories />
      <Testimonials />
      <WhoIsItFor />
      <Guarantee />
      <FaqSection />
    </main>
    <FooterSection />
  </div>
</template>
