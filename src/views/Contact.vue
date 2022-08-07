<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="main">
    <h2 class="title">Want to Connect?</h2>
    <a href="mailto:jparkerdevelopment@gmail.com" class="btn">
      <Icon style="font-size: 6rem; color: black;" icon="uiw:mail-o" />
    </a>
    <a href="https://www.linkedin.com/in/james-parker-developer/" class="btn btn3">
      <Icon style="font-size: 4rem; color: black;" icon="logos:linkedin" />
    </a>
    <a href="https://github.com/Pepe1776" class="btn btn2">
      <Icon style="font-size: 6rem; color: black;" icon="logos:github-icon" />
      </a>
      <a href="https://www.instagram.com/j_not_query/" class="btn btn4">
      <Icon style="font-size: 5rem; color: black;" icon="logos:instagram" />
      </a>
  </div>
</template>
<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,700;0,900;1,200;1,700&display=swap');

 .title {
      font-family: 'Titillium Web', sans-serif;
      font-size: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.7;
      margin-top: 3%;
 }
  .btn {
        
        z-index: 4;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.7;
        transition: all 0.3s ease-in-out;
  }
  .btn2 {
    top: 45%;
  }
  .btn3 {
    top: 60%;
  }
  .btn4 {
    top: 75%;
  }
</style>