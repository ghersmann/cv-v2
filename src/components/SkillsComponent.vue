<template>
  <article class="skills-component">
    <h1>Skills</h1>
    <section class="logos-grid">
      <div class="skills-grid-column">
        <section class="skill-item">
          <img src="@/assets/img/logos/HTML5_logo.svg" alt="HTML 5 Logotype" height="50px" /><br />
          <h3>HTML5</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/CSS3_logo.svg" alt="CSS 3 Logotype" height="50px" /><br />
          <h3>CSS 3</h3>
        </section>
        <section class="skill-item">
          <img
            src="@/assets/img/logos/JavaScript_logo.svg"
            alt="JavaScript Logotype"
            height="50px"
          /><br />
          <h3>JavaScript</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/Vue-js_Logo.svg" alt="Vue.JS Logotype" height="50px" /><br />
          <h3>Vue.JS</h3>
        </section>
        <section class="skill-item">
          <img
            src="@/assets/img/logos/cypress-logo.svg"
            alt="Cypress Logotype"
            height="40px"
          /><br />
          <h3>Cypress</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/Git-logo.svg" alt="Git Logotype" height="50px" /><br />
          <h3>Git</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/Figma-logo.svg" alt="Figma Logotype" height="50px" /><br />
          <h3>Figma</h3>
        </section>
        <section class="skill-item skill-item-node">
          <img
            src="@/assets/img/logos/Node.js_logo.svg"
            alt="Node.JS Logotype"
            height="50px"
          /><br />
          <h3>Node.JS</h3>
        </section>
        <section class="skill-item skill-item-npm">
          <img src="@/assets/img/logos/Npm-logo.svg" alt="NPM Logotype" height="40px" /><br />
          <h3>NPM</h3>
        </section>
      </div>
    </section>

    <img :src="arrowStore.currentArrow" alt="Decorative Arrow" class="arrow" />
  </article>
</template>

<script>
import { useArrowStore } from '@/stores/arrowStore.js'
import { onMounted, onBeforeUnmount } from 'vue'
export default {
  name: 'ExperienceComponent',

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
h1,
h2,
h3,
h4 {
  margin: 0.5rem;
  text-align: center;
}

p {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
