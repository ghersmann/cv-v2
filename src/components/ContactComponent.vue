<template>
  <article class="contact-component">
    <h1>Contact</h1>
    <section class="contact-grid-column">
      <ul class="contact-item">
        <li><a href="mailto:gustav@gustavhersmann.com">gustav@gustavhersmann.com</a></li>
        <li><a href="tel:+4915221477147">+49 (0) 1522 1477147</a></li>
      </ul>
      <div class="line"></div>
      <ul class="contact-item">
        <li><a href="https://github.com/ghersmann">github.com/ghersmann</a></li>
        <li><a href="https://www.linkedin.com/in/gustavhersmann">linkedin.com/in/gustavhersmann</a></li>
      </ul>
    </section>
    <img :src="currentImage" alt="Decorative Arrow" class="end-arrow" />
  </article>

  <article class="contact-component">
    <h1>Downloads</h1>
    <section class="contact-grid-column">
      <ul class="contact-item">
        <li><a href="/cv/cv-gustav-hersmann-english.pdf" target="_blank"><img class="cv-img" src="/cv/cv-gustav-hersmann-english-thumbnail.png" width="100px"></a></li>
        <li><a href="/cv/cv-gustav-hersmann-english.pdf" target="_blank">Resumé in English.pdf</a></li>
      </ul>
      <div class="line"></div>
      <ul class="contact-item">
                      <li><a href="/cv/lebenslauf-gustav-hersmann-deutsch.pdf" target="_blank"><img class="cv-img" src="/cv/cv-gustav-hersmann-english-thumbnail.png" width="100px"></a></li>
        <li><a href="/cv/lebenslauf-gustav-hersmann-deutsch.pdf" target="_blank">Lebenslauf auf Deutsch.pdf</a></li></ul>
    </section>
    <img :src="currentImage" alt="Decorative Arrow" class="end-arrow" />
  </article>
</template>

<script>
import arrowBlack from '@/assets/img/ArrowHorizontal.svg'
import arrowWhite from '@/assets/img/ArrowHorizontal-white.svg'

export default {
  name: 'ContactComponent',
  data() {
    return {
      currentImage: ''
    }
  },
  created() {
    this.updateImage()
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateImage)
  },
  methods: {
    updateImage() {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.currentImage = isDarkMode ? arrowWhite : arrowBlack
    }
  },
  beforeUnmount() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this.updateImage)
  }
}
</script>

<style scoped>
.cv-img {
border: 1px solid black;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

a {
  line-height: 3rem;
  text-decoration: none;
}

.contact-item {
  width: 26rem;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

.end-arrow {
  display: block;
  width: 188px;
  margin: 3rem auto;
}
</style>
