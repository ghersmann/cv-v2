<template>
  <article class="photo-title-pitch">
    <img
      class="gh-photo"
      src="../assets/img/bewerbungsbild-sven-gustav-hersmann-0003-medres.jpg"
      alt="Photo Gustav Hersmann"
    />
    <h1>Gustav Hersmann</h1>
    <p class="pitch">
      Frontend Web Developer with a strong background in HTML, CSS, JavaScript, and Vue.js. Proven
      track record in developing user-friendly web applications and dynamic, responsive websites.
      Passionate about creating visually appealing and accessible digital experiences. Fluent in
      Swedish, German, and English with a solid foundation in project management, photography and
      graphic design.
    </p>
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
.gh-photo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 120px;
}

.pitch {
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  max-width: 70rem;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

h2 {
  text-align: center;
}
</style>
