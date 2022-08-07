<template>
    <div class="main-cont">
        <h3 class="label rec">Recipe App</h3>
        <h3 class="label nft">Hackathon Nft</h3>
        <h3 class="label par">Portfolio Page</h3>
        <h3 class="label anc">Restaurant Page</h3>
        <a @mouseenter="icon1 = true" @mouseleave="icon1 = false" href="https://bookofrecipes.netlify.app/" class="btn">
            <Icon style="font-size: 6rem;" icon="emojione-v1:cooking" />
        </a>

        <a @mouseenter="icon2 = true" @mouseleave="icon2 = false" href="https://gratitude-nft.web.app/landing"
            class="btn">
            <Icon style="font-size: 6rem;" icon="logos:metamask-icon" />
        </a>
        <a @mouseenter="icon3 = true" @mouseleave="icon3 = false" href="https://jparker.netlify.app/" class="btn">
            <Icon style="font-size: 6rem;" icon="logos-vue" />
        </a>
        <a @mouseenter="icon4 = true" @mouseleave="icon4 = false" href="https://ancestral.vercel.app/" class="btn">
            <Icon style="font-size: 6rem;" icon="emojione-v1:bridge-at-night" />
        </a>
        <Transition name="slide-fade">
            <img v-show="icon1" src="/rec.jpg" class="hover" />
        </Transition>
        <Transition name="slide-fade">
            <img v-show="icon2" src="/nft.jpg" class="hover" />
        </Transition>
        <Transition name="slide-fade">
            <img v-show="icon3" src="/jpa.jpg" class="hover" />
        </Transition>
        <Transition name="slide-fade">
            <img v-show="icon4" src="/anc.jpg" class="hover" />
        </Transition>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const icon1 = ref(false);
const icon2 = ref(false);
const icon3 = ref(false);
const icon4 = ref(false);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,700;0,900;1,200;1,700&display=swap');
.main-cont {
    display: flex;
    flex-direction: row;
    gap: 10%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: -15%;
}
.btn {
    z-index: 4;
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
}
.btn:hover {
 opacity: 1;

}
.hover {
    position: absolute;
    top: 63%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
    object-fit: fill;
    height: 50%;
    width: auto;
}
.label {
    font-family: 'Titillium Web', sans-serif;
    font-size: 2.5rem;
    position: absolute;
    top: 33%;
    height: auto;

}
 .rec {
 left: 23%
 }

 .nft {
    left: 36%;
 }
 .par {
    left: 53%;
 }
 .anc {
    left: 67%;
 }
 @media screen and (max-width: 768px) {
    .main-cont {
        flex-direction: column;
        gap: 6%;
    }
    .hover {
        display: none;
    }
    .label {
        font-size: 1.5rem;
        left: 35%;
    }
    .rec {
        top: 30%;
    }
    .nft {
        top: 50%;
        left: 33%;
    }
    .par {
        top: 69%;
        left: 33%;
    
    }
    .anc {
        top: 89%;
        left: 31%;
       
    }
    
 }
 
 .slide-fade-enter-active {
     transition: all 0.6s ease-out;
 }

 .slide-fade-leave-active {
     transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
 }

 .slide-fade-enter-from,
 .slide-fade-leave-to {
     opacity: 0;
 }
</style>