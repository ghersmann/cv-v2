<template>
  <article class="photo-title-pitch">
    <img
      class="gh-photo"
      src="../assets/img/bewerbungsbild-sven-gustav-hersmann-0003-medres.jpg"
      alt="Photo Gustav Hersmann"
    />
    <ul class="name-title">
      <h1>Gustav Hersmann</h1>
      <li class="pitch-text">Frontend Developer</li>
      <li class="pitch-text">Web Designer</li>
      </ul>
    <ul class="contact-header">
    <h2>Contact</h2>
      <li><a class="pitch-text" href="mailto:gustav@gustavhersmann.com">gustav@gustavhersmann.com</a></li>
      <li><a class="pitch-text" href="tel:+4915221477147">+49 (0) 1522 1477147</a></li>
      <li><a class="pitch-text" href="https://github.com/ghersmann">github.com/ghersmann</a></li>
      <li><a class="pitch-text" href="https://www.linkedin.com/in/gustavhersmann">linkedin.com/in/gustavhersmann</a></li>
    </ul>
  </article>
</template>

<style scoped>
.photo-title-pitch {
display: flex;
align-items: flex-start;
width: 100%;
margin: 0 auto;
}

.gh-photo {
  margin-left: 0;
  width: 120px;
}

.name-title {
  margin-top: 0;
  margin-left: 2rem;
  margin-right: auto;
}

.pitch-text {
  font-family: 'Work-Sans-Light';
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.7rem;
  text-decoration: none;
}

.contact-header {
text-align: right;
margin-right: 0;
margin-top: auto;
padding-right: 0.4rem;
border-right: 0.2rem solid var(--dark-sticky-header);
}

h1, h2 {
  margin: 0;
}


</style>
