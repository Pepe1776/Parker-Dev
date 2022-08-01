<template>
    <div class="main-cont">
        <Icon style="font-size: 6rem;" icon="logos:arangodb-icon" />
        <Icon style="font-size: 6rem;" icon="logos:metamask-icon" />
        <Icon style="font-size: 6rem;" icon="logos-vue" />
        <Icon style="font-size: 6rem;" icon="emojione:blond-haired-person-medium-skin-tone" />
        <Icon style="font-size: 6rem;" icon="noto:cut-of-meat" />
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.main-cont {
    display: flex;
    flex-direction: row;
    gap: 10%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: -15%;
}
    
</style>