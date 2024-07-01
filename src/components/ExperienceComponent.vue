<template>
  <article class="experience-component">
    <h1>Experience</h1>
    <div class="experience-grid-column">
      <section class="experience-item">
        <h2>Web Developer Training</h2>
        <h3>January-April 2024</h3>
        <h4>Coding Bootcamps Europe</h4>
        <ul>
          <li>
            <p>
              HTML, CSS, JavaScript, Vue.js, Figma, Git, Cypress, Web Accessibility WCAG 2.1, NPM,
              Node.js, Agile Project Organization
            </p>
          </li>
          <li>
            <p>
              Final Project Travel Planning App: <br />
              <a href="https://herdingcats-cbe.netlify.app/" target="_blank">Herding Cats</a>
              <br />Made with Vue.JS.
              <br />
              Graphic Design by me, designed in Figma.
            </p>
          </li>
        </ul>
        <div class="exp-horizontal-line"></div>
      </section>
      <div class="vertical-line"></div>
      <section class="experience-item">
        <h2>Museum, tourism and <br />public relations staff</h2>
        <h3>2022 - 2023</h3>
        <h4>Gemeindeverwaltung <br />Wutha-Farnroda, Germany</h4>
        <ul>
          <li>
            <p>
              Development of a new website with Contao CMS. Check it our here: <br />
              <a href="https://www.wutha-farnroda.de">www.wutha-farnroda.de</a>
            </p>
          </li>
          <li>
            <p>Management of the work in the <br />Hörselberg Museum of Local History.</p>
          </li>
          <li>
            <p>
              Project manager for the temporary exhibitions in the Hörselberg Museum. Development of
              concepts, planning and visual design.
            </p>
          </li>
        </ul>
        <div class="exp-horizontal-line"></div>
      </section>
      <section class="experience-item">
        <h2>Freelance Photographer</h2>
        <h3>2006 - 2021</h3>
        <h4>Gustav Hersmann Photography</h4>
        <ul>
          <li>
            <p>Snowboard and Action Sports</p>
          </li>
          <li>
            <p>Weddings & Portraits</p>
          </li>
          <li>
            <p>Product Photography</p>
          </li>
          <li>
            <p>
              Portfolio:
              <a href="https://gustavhersmann.com/photo" target="_blank"
                >gustavhersmann.com/photo</a
              >
            </p>
          </li>
        </ul>
        <div class="exp-horizontal-line"></div>
      </section>
      <div class="vertical-line"></div>
      <section class="experience-item">
        <h2>Museum Educator and Exhibit designer</h2>
        <h3>2004 - 2019</h3>
        <h4>Sörmlands Museum, <br />Nyköping, Sweden</h4>
        <ul>
          <li>
            <p>Exhibition project manager: concept, planning and visual design.</p>
          </li>
          <li>
            <p>Graphic design of exhibitions.</p>
          </li>
          <li>
            <p>Head of training for new museum tour guides.</p>
          </li>
          <li>
            <p>
              Development of guided tours of the city and the museum. Planning routes and writing
              manuscripts.
            </p>
          </li>
        </ul>
        <div class="exp-horizontal-line"></div>
      </section>
    </div>
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

.experience-item {
  width: 26rem;
  margin: 3rem auto;
  padding: 0;
  text-align: center;
}
</style>
