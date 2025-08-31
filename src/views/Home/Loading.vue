<template>
    <div class="cover"><img src="/src/images/pexels-pixabay-37403.jpg" alt=""></div>
</template>


<script setup>

import { gsap } from "gsap";
gsap.to(".cover", {
    scale: 0.3
})

</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.cover {
    height: 100vh;
    width: 100vw;
}

.cover img {
    width: 100%;
    height: 100%;
}
</style>