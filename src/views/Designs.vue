<template>
<!-- <div class="main">
    <img src="../../public/121212.png" alt="logo" class="img-fluid ii">
    <img src="../../public/unnamed7.png" alt="logo" class="img-fluid ii">
    <img src="../../public/satoshi-logo.png" alt="logo" class="img-fluid ii">
    <img src="../../public/satoshi-logo.png" alt="logo" class="img-fluid ii">
</div> -->
    <div class="main">
        <img src="../../public/mondo.png" class="img-fluid" alt="" title="Mobile" text="ui design" />
        <img src="../../public/mondo-cart.png" class="img-fluid" alt="" title="Mobile" text="ui design" />
        <img src="../../public/sws.png" class="img-fluid" alt="" title="Mobile" text="ui design" />
        <img src="../../public/sws2.png" class="img-fluid" alt="" title="Mobile" text="ui design" />
    
    </div>
</template>
<script setup>

</script>
<style scoped>
    .main {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 70vh;
        margin-top: 5%;
        margin-bottom: 5%;
        background-color: #000;
    }
    .ii {
        width: 20%;
        height: auto;
        object-fit: contain;
        border-radius: 40%;
        
    }
    img {
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
        height: 70vh;
        
    }
    @media (max-width: 768px) {
     .main {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70vh;
        margin-top: 250%;
        margin-bottom: 5%;
      
     }
     img {
        width: 70%;
        height: auto;
        object-fit: contain;

     }
    }
    
</style>