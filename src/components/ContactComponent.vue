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
        <li><a href="www.linkedin.com/in/gustavhersmann">linkedin.com/in/gustavhersmann</a></li>
      </ul>
    </section>
    <img class="end-arrow" src="@/assets/img/ArrowHorizontal.svg" alt="Decorative Arrow" />
  </article>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

a {
  line-height: 3rem;
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
