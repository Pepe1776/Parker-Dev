<script setup>

</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="nav text-3xl font-bold leading-tight ">
          <router-link to="/">{{ $route.meta.title }}</router-link> | <router-link to="projects">Projects</router-link> | <router-link to="designs">Designs</router-link> | <router-link to="contact">Contact</router-link>
       </h1>
      </div>
    </header>
    <main>
      <router-view />
      <footer></footer>
    </main>
  </div>
</template>

<style>



@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,700;0,900;1,200;1,700&display=swap');


 * {
  box-sizing: border-box;
  background-color: #000;

 }
.nav {
  font-family: 'Titillium Web', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  font-style: italic;
  padding: 10px;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0%;
  color: rgb(105, 103, 103);
  background-color: #000;
  width: 100vw;
}
@media screen and (max-width: 768px) {
  .nav {
    font-size: 0.9rem;
    left: 0;
  }
}
</style>