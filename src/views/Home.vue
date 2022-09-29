<script setup>
import { ref } from 'vue';
import { disableBodyScroll } from 'body-scroll-lock';

const options = {
  reserveScrollBarGap: true,
};
const main = document.querySelector('main');
disableBodyScroll(main, options);



const pop1 = ref(false);
const pop2 = ref(false);
const pop3 = ref(false);
const pop4 = ref(false);
const pop5 = ref(false);
const pop6 = ref(false);
const pop7 = ref(false);
const pop8 = ref(false);
const pop9 = ref(false);
const pop0 = ref(false);

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
setTimeout(() => {
  pop8.value = false;
  pop9.value = true;
}, 10000);
setTimeout(() => {
  pop0.value = true;
}, 13000);


</script>

<template>
  <div class="main-cont" v-scroll-lock="closed">
    <transition name="slide-fade">
      <img v-show="pop7" class="hero-img" src="../../public/Satoshi-logo.png" alt="satoshi">
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
      <img v-show="pop6" class="pop6" src="../../public/Justin.png" />
    </transition>
    <!-- <transition name="slide-fade">
      <router-link to="contact" v-show="pop8" class="btn" src="/portrait.png">
      </router-link>
    </transition> -->
    <transition name="slide-fade">
      <img v-show="pop9" class="hero-img2" src="../../public/Justin.png" />
    </transition>
    <transition name="slide-fade">
      <router-link to="contact" class="btn" v-show="pop0">Let's Work Together!</router-link>
      </transition>
    <footer>
      <a href="mailto:jparkerdevelopment@gmail.com"
        class="footer">JParkerDevelopment@gmail.com</a>
    </footer>
  </div>

</template>

<style scoped>






@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,700;0,900;1,200;1,700&display=swap');

* {
  background-color: #000;
  box-sizing: border-box;
  scroll: none;
}
.hero-img {
  width: 60vw;
  height: auto;
  object-fit: fill;
  opacity: 0.1;
}
.hero-img2 {
  width: 60vw;
  height: auto;
  object-fit: fill;
  opacity: 0.1;
  border-radius: 50%;
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
  z-index: 11;
  background-color: #000;
}
.footer {
  position: absolute;
  bottom: 3%;
  right: 3%;
  font-size: 1.5rem;
}
.footer2 {
  position: absolute;
  bottom: 3%;
  right: 19%;
  font-size: 2rem;
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
  width: 35%;
  border-radius: 3%;
  height: auto;
  object-fit: cover;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40%;
  right:15%;
  transform: translate(-50%, -50%);
  color: rgb(105, 103, 103);
  font-size: 4rem;
  font-weight: bold;
  z-index: 5;
  font-family: 'Titillium Web', sans-serif;
  font-style: italic;
  transition: all 0.3s ease-in-out;
}
.icon {
  font-size: 14rem;

}
.btn:hover {
  opacity: 1;
}

@media screen and (max-width: 768px) {
  /* .hero-img {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    margin-top: -20%;
  } */

  .pop1, .pop2, .pop3, .pop4, .pop5 {
    font-size: 1.8rem;
    height: 160%;
    justify-content: center;
  }
  .pop6 {
    width: 100vw;
    height: 100vh;
    border-radius: 0%;

  }
  .btn {
    width: 50%;
    right: 2%;
    font-size: 1.5rem;
  }
  .footer {
font-size: 1rem;
bottom: -10%;
opacity: 0.6;
  }
  .footer2 {
    display: none;
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