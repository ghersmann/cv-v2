<template>
  <header class="dark-sticky-header">
    <DarkStickyHeader />
  </header>
  <main>
    <PhotoTitlePitch />
    <ProjectPortfolio />
  </main>
</template>

<script>
import DarkStickyHeader from '@/components/DarkStickyHeader.vue'
import PhotoTitlePitch from '@/components/PhotoTitlePitch.vue'
import ProjectPortfolio from '@/components/ProjectPortfolio.vue'

export default {
  components: {
    DarkStickyHeader,
    PhotoTitlePitch,
    ProjectPortfolio
  }
}
</script>
