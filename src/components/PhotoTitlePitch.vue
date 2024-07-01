<template>
  <article class="photo-title-pitch">
    <img
      class="gh-photo"
      src="../assets/img/bewerbungsbild-sven-gustav-hersmann-0003-medres.jpg"
      alt="Photo Sven Gustav Hersmann"
    />
    <h1>Sven Gustav Hersmann</h1>
    <p>Frontend Web Developer</p>
    <section class="pitch-grid-column">
      <h2 class="pitch-text">Positive, friendly <br />and creative</h2>
      <div class="line"></div>
      <h2 class="pitch-text">Self-reliant, committed <br />and responsible</h2>
      <div class="line"></div>
      <h2 class="pitch-text">Quick learner with <br />an eye for details</h2>
    </section>
    <img :src="arrowStore.currentArrow" alt="Decorative Arrow" class="arrow" />
  </article>
</template>

<script>
import { useArrowStore } from '@/stores/arrowStore.js'
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'PhotoTitlePitch',

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
.photo-title-pitch {
  width: 100vw;
}

.gh-photo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 120px;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  margin-top: 0;
  text-align: center;
  margin-bottom: 3rem;
}

h2 {
  text-align: center;
}
</style>
