<template>
  <article class="project-portfolio">
    <h1>Portfolio</h1>
    <section class="portfolio-grid-column">
      <div v-for="(project, index) in portfolioProjects" :key="index" class="portfolio-item">
        <div class="portfolio-imgs">
          <img
            v-for="(image, imgIndex) in project.images"
            :key="imgIndex"
            :src="image.src"
            :alt="image.alt"
            class="portfolio-img"
          />
        </div>
        <h2>{{ project.title }}</h2>
        <p v-for="(desc, descIndex) in project.description" :key="descIndex">
          {{ desc }}
        </p>
        <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="routerlink">
          {{ project.routerLinkText }}
        </router-link>
      </div>
    </section>
    <img :src="arrowStore.currentArrow" alt="Decorative Arrow" class="arrow" />
  </article>
</template>

<script>
import { useArrowStore } from '@/stores/arrowStore.js'
import { onMounted, onBeforeUnmount } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore.js'

export default {
  name: 'ProjectPortfolio',
  setup() {
    const arrowStore = useArrowStore()
    const portfolioStore = usePortfolioStore()

    const updateArrow = () => {
      arrowStore.updateArrow()
    }

    onMounted(() => {
      updateArrow()
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateArrow)
      window.addEventListener('resize', updateArrow)
    })

    onBeforeUnmount(() => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateArrow)
      window.removeEventListener('resize', updateArrow)
    })

    return {
      arrowStore,
      portfolioProjects: portfolioStore.getProjects
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

p {
  margin-top: 0;
  text-align: center;
}

h2 {
  text-align: center;
}

.routerlink {
  width: fit-content;
  display: block;
  margin: 0 auto;
}

.portfolio-item {
  width: 27rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
}

.portfolio-img {
  height: 8rem;
  margin: 0.3rem;
}
.portfolio-imgs {
  display: flex;
  justify-content: space-between;
}
</style>
