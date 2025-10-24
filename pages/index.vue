<template>
  <Hero />
  <LogoStrip />
  <SectionWhat />
  <SectionOpenFeature />
  <ControlsSection />
  <FeatureCompare />
  <DartAI />
  <Pricing />
  <WhyTeams v-show="!isMobile" />
  <CTA />
</template>


<script>
export default {
  data() {
    return {
      // Define isMobile to check for small screens
      isMobile: false,
    };
  },
  mounted() {
    // Check screen size on mount
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  destroyed() {
    // Cleanup event listener
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      // Check if the screen width is less than 768px (phone size)
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>