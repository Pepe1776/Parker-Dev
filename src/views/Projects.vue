<template>
    <div class="main-cont" v-scroll-lock="open">
        <a @mouseenter="icon1 = true" @mouseleave="icon1 = false" href="https://bookofrecipes.netlify.app/" class="btn">
            <div class="card">

                <Icon class="desk" style="font-size: 6rem;" icon="emojione-v1:cooking" />
                <img src="/public/rec.jpg" alt="rec" class="mobile" />

                <h3 class="label rec">Recipe App</h3>
            </div>
        </a>
        <a @mouseenter="icon2 = true" @mouseleave="icon2 = false" href="https://gratitude-nft.web.app/landing"
            class="btn">
            <div class="card">


                <Icon class="desk" style="font-size: 6rem;" icon="logos:metamask-icon" />
                <img src="/public/nft.jpg" alt="nft" class="mobile" />

                <h3 class="label nft">Hackathon Nft</h3>
            </div>
        </a>
        <a @mouseenter="icon3 = true" @mouseleave="icon3 = false" href="https://jparker.netlify.app/" class="btn">
            <div class="card">

                <Icon class="desk" style="font-size: 6rem;" icon="logos-vue" />
                <img src="/public/jpa.jpg" alt="jparker" class="mobile" />

                <h3 class="label par">Portfolio Page</h3>
            </div>
        </a>
        <a @mouseenter="icon4 = true" @mouseleave="icon4 = false" href="https://ancestral.vercel.app/" class="btn">
            <div class="card">


                <Icon class="desk" style="font-size: 6rem;" icon="emojione-v1:bridge-at-night" />
                <img src="/public/anc.jpg" alt="anc" class="mobile" />

                <h3 class="label anc">Restaurant Page</h3>
            </div>
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
    align-items: center;
    justify-content: space-evenly;
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

  
    height: auto;
    drop-shadow: 0px 0px 20px rgb(255, 255, 255);

}
.card {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px rgb(243, 240, 240);
    padding: 15%;
    text-align: center;
    min-width: max-content;
}
.mobile {
    display: none;
}
.desk {
    display: block;
}
 
 
 @media screen and (max-width: 768px) {
    .mobile {
        display: block;
        width: 80%;
        height: auto;
        object-fit: cover;
    }
    .desk {
        display: none;
    }
    .main-cont {
   margin-top: 0%;

    flex-direction: column;
  
    }
    .hover {
        display: none;
    }
    .label {
        font-size: 1.5rem;
    }
    .card {
        margin-right: 20%;
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