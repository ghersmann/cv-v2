<template>
  <article class="project-portfolio">
    <h1>Portfolio</h1>
    <section class="portfolio-grid">
      <div class="line"></div>
      <h2>Herding Cats Travel App</h2>
      <a href="https://herdingcats-cbe.netlify.app/"><p>Manage the impossible</p></a>
      <div class="line"></div>
      <h2>Gustav Hersmann Photography</h2>
      <a href="https://gustavhersmann.com/photo/"><p>My Photography Portfolio</p></a>
    </section>
    <img class="arrow-1" src="../assets/img/ArrowOne.svg" alt="" />
  </article>
</template>

<script>
export default {
  name: 'ProjectPortfolio'
}
</script>

<style scoped>
.photo-title-pitch {
  width: 100vw;
}

.arrow-1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  margin-bottom: 0;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  margin-top: 0;
  text-align: center;
  margin-bottom: 3.5rem;
}

h2 {
  text-align: center;
}
</style>
