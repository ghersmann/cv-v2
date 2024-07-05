<template>
  <article class="project-portfolio">
    <h1>Portfolio</h1>
    <section class="portfolio-grid-column">
      <div class="portfolio-item">
        <div class="herding-cats-imgs">
          <img
            src="../assets/img/herding-cats-screen-shot-startpage.png"
            alt="Herding Cats Travel App Startpage"
            class="herding-cats-img"
          />
          <img
            src="../assets/img/herding-cats-screen-shot-alltravels.png"
            alt="Herding Cats Travel App All Travels"
            class="herding-cats-img"
          /><img
            src="../assets/img/herding-cats-screen-shot-packlist.png"
            alt="Herding Cats Travel App Packing List"
            class="herding-cats-img"
          /><img
            src="../assets/img/herding-cats-screen-shot-tripoverview.png"
            alt="Herding Cats Travel App Trip Overview"
            class="herding-cats-img"
          /><img
            src="../assets/img/herding-cats-screen-shot-notes.png"
            alt="Herding Cats Travel App Trip Notes"
            class="herding-cats-img"
          />
        </div>
        <h2>Herding Cats Travel App</h2>
        <a href="https://herdingcats-cbe.netlify.app/" class="routerlink" target="_blank"
          >Manage the impossible</a
        >
      </div>
      <div class="portfolio-line"></div>
      <div class="portfolio-item">
        <div class="portfolio-imgs">
          <img
            src="@/assets/img/GHFF_Cows_by_Gustav_Hersmann_0029_lowres.jpg"
            alt="Black and White photo of cows in the fog at dusk"
            class="portfolio-img"
          />
          <img
            src="@/assets/img/GHFF_Snowboard_by_Gustav_Hersmann_0029_lowres.jpg"
            alt="A Snowboarder makes a turn and blows a big cloud of snow"
            class="portfolio-img"
          />
          <img
            src="@/assets/img/GHFF_Supersonic_by_Gustav_Hersmann_0029_lowres.jpg"
            alt="Band photo of The Supersonic"
            class="portfolio-img"
          />
        </div>
        <h2>Gustav Hersmann Photography</h2>
        <router-link class="routerlink" :to="{ path: '/photo' }">Photography Portfolio</router-link>
      </div>
    </section>
    <img :src="arrowStore.currentArrow" alt="Decorative Arrow" class="arrow" />
  </article>
</template>

<script>
import { useArrowStore } from '@/stores/arrowStore.js'
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'ProjectPortfolio',
  setup() {
    const arrowStore = useArrowStore()

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

    return { arrowStore }
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
  margin: 0 auto;
}

.portfolio-img,
.herding-cats-img {
  height: 8rem;
  margin: 0.3rem;
}
.portfolio-imgs,
.herding-cats-imgs {
  display: flex;
  justify-content: space-between;
}
</style>
