<template>
  <header class="dark-sticky-header">
    <DarkStickyHeader />
  </header>
  <main>
    <PhotoTitlePitch />
    <ProjectPortfolio />
    <ContactComponent />
  </main>
</template>

<script>
import DarkStickyHeader from '@/components/DarkStickyHeader.vue'
import PhotoTitlePitch from '@/components/PhotoTitlePitch.vue'
import ProjectPortfolio from '@/components/ProjectPortfolio.vue'
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  components: {
    DarkStickyHeader,
    PhotoTitlePitch,
    ProjectPortfolio,
    ContactComponent
  }
}
</script>
