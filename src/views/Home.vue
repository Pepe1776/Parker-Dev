<script setup>
import { ref } from 'vue';

const pop1 = ref(false);
const pop2 = ref(false);
const pop3 = ref(false);
const pop4 = ref(false);
const pop5 = ref(false);
const pop6 = ref(false);
const pop7 = ref(false);
const pop8 = ref(false);

setTimeout(() => {
  pop7.value = false;
  pop1.value = true;
  pop6.value = true;
}, 1000);
setTimeout(() => {
  pop1.value = false;
}, 3000);
setTimeout(() => {
  pop2.value = true;
}, 2000);
setTimeout(() => {
  pop2.value = false;
  pop6.value = false;
  pop7.value = true;
}, 5000);
setTimeout(() => {
  pop3.value = true;
}, 3000);
setTimeout(() => {
  pop3.value = false;
}, 6000);
setTimeout(() => {
  pop4.value = true;
}, 4000);
setTimeout(() => {
  pop4.value = false;
}, 7000);
setTimeout(() => {
  pop5.value = true;
}, 5000);
setTimeout(() => {
  pop5.value = false;
  pop8.value = true;
}, 8000);

</script>

<template>
  <div class="main-cont">
    <transition name="slide-fade">
      <img v-show="pop7" class="hero-img" src="/Satoshi-logo-bw.png" alt="satoshi">
    </transition>
    <transition name="slide-fade">
      <div v-show="pop1" class="pop1">Custom Built Website and Apps</div>
    </transition>
    <transition name="slide-fade">
      <div v-show="pop2" class="pop2">User Interface designs and Logos</div>
    </transition>
    <transition name="slide-fade">
      <div v-show="pop3" class="pop3">Home Automation Programming</div>
    </transition>
    <transition name="slide-fade">
      <div v-show="pop4" class="pop4">Digital Signage and Content</div>
    </transition>
    <transition name="slide-fade">
      <div v-show="pop5" class="pop5">Custom Built Drivers (Control4)</div>
    </transition>
    <transition name="slide-fade">
      <img v-show="pop6" class="pop6" src="/portrait.png" />
    </transition>
    <transition name="slide-fade">
      <router-link to="contact" v-show="pop8" class="btn" src="/portrait.png">Work With Me!</router-link>
    </transition>
  </div>

</template>

<style scoped>






@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,700;0,900;1,200;1,700&display=swap');

.hero-img {
  width: 100vw;
  height: auto;
  object-fit: fill;
  opacity: 0.1;
}
.main-cont {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 700;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pop1, .pop2, .pop3, .pop4, .pop5 {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 6rem;
  font-weight: bold;
  color: #fff;
  background-color: rgba(15, 102, 137, 0.206);
  opacity: 0.9;
  z-index: 2;

}
.pop2 {
  top: -10%;
  background-color: rgba(17, 137, 15, 0.206);
}
.pop3 {
  top: -20%;
  background-color: rgba(137, 129, 15, 0.206);
}
.pop4 {
  top: -30%;
  background-color: rgba(121, 15, 137, 0.206);
}
.pop5 {
  top: -40%;
  background-color: rgba(137, 15, 15, 0.206);
}
.pop6 {
  width: 60%;
  height: auto;
  object-fit: cover;
  opacity: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.btn {
  width: 15%;
  border-radius: 3%;
  height: auto;
  object-fit: cover;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  border: 2px solid #000;
  z-index: 5;
  font-family: 'Titillium Web', sans-serif;
  font-style: italic;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  background-color: rgb(39, 34, 34);
  color: #fff;
}

@media screen and (max-width: 768px) {
  .hero-img {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    margin-top: -20%;
  }

  .pop1, .pop2, .pop3, .pop4, .pop5 {
    font-size: 1.8rem;
    height: 160%;
    justify-content: center;
  }
  .pop6 {
    width: auto;
    height: 100vh;
    border-radius: 0%;

  }
  .btn {
    width: 50%;
    font-size: 1.5rem;
  }
}
  
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(80px);
  transform: translateY(40px);
  opacity: 0;
}
</style>