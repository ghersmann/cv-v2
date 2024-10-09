<template>
  <article class="project-portfolio" v-if="project">
    <h1>{{ project.title }}</h1>
    <section class="portfolio-grid-column">
      <div class="portfolio-imgs">
        <!-- Loop through each image and display the image and description -->
        <div
          v-for="(image, imgIndex) in project.images"
          :key="imgIndex"
          class="portfolio-image-description"
        >
          <!-- Image with click event to open modal -->
          <img :src="image.src" :alt="image.alt" class="portfolio-img" @click="openModal(image)" />
          <p>{{ image.description }}</p>
        </div>

        <!-- Link to external project (if available) -->
        <a v-if="project.link" :href="project.link" class="projectlink routerlink" target="_blank">
          {{ project.linkText }}
        </a>
        <router-link :to="'/'" class="routerlink">
          <p>Back</p>
        </router-link>
      </div>
    </section>

    <img :src="arrowStore.currentArrow" alt="Decorative Arrow" class="arrow" />

    <!-- Modal for large image view -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeModal">&times;</span>
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="modal-img" />
      </div>
    </div>
  </article>
  <p v-else>Project not found.</p>
</template>

<script>
import { ref } from 'vue'
import { useArrowStore } from '@/stores/arrowStore.js'
import { onMounted, onBeforeUnmount } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore.js'
import { useRoute } from 'vue-router'

export default {
  name: 'ProjectPortfolio',
  setup() {
    const arrowStore = useArrowStore()
    const portfolioStore = usePortfolioStore()
    const route = useRoute()

    // Extract the project id from the route
    const projectId = route.params.id

    // Find the project by id
    const project = portfolioStore.getProjects.find((p) => p.id === projectId)

    // Modal logic
    const isModalOpen = ref(false)
    const selectedImage = ref(null)

    const openModal = (image) => {
      selectedImage.value = image
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      selectedImage.value = null
    }

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
      project, // Return the selected project
      isModalOpen,
      selectedImage,
      openModal,
      closeModal
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

.projectlink {
  margin-bottom: 2rem;
}

.portfolio-item {
  width: 27rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
}

.portfolio-imgs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.portfolio-image-description {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.portfolio-img {
  height: 8rem;
  margin-right: 1rem;
}

.portfolio-image-description p {
  margin: 0;
}

/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7); /* Transparent dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal content */
.modal-content {
  position: relative;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Modal image */
.modal-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
}
</style>
