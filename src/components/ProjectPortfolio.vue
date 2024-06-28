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
        <a href="https://herdingcats-cbe.netlify.app/" target="_blank"
          ><p>Manage the impossible</p></a
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
        <a href="https://gustavhersmann.com/photo/" target="_blank"><p>Photography Portfolio</p></a>
      </div>
    </section>
    <img class="arrow-1" src="@/assets/img/ArrowOne.svg" alt="Decorative Arrow" />
    <img class="arrow-2" src="@/assets/img/ArrowHorizontal.svg" alt="Decorative Arrow" />
  </article>
</template>

<script>
export default {
  name: 'ProjectPortfolio'
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
