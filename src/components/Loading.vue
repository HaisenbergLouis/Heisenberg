<template>
  <div class="cover">
    <div class="square">
      <div class="square-item1" style="background-color: blue"></div>
      <div class="square-item2" style="background-color: red"></div>
      <div class="square-item3" style="background-color: green"></div>
      <div class="square-item4" style="background-color: pink"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
onMounted(() => {
  setTimeout(() => {
    const cover = document.querySelector('.cover')
    if (cover && cover instanceof HTMLElement) {
      // cover.style.transition = 'opacity 2s ease' // 添加过渡效果
      cover.style.opacity = '0'
      cover.style.zIndex = '-1'
    }
  }, 1000)
  gsap
    .timeline({ repeat: -1, delay: -2.5, repeatDelay: 0 })
    .to('.square-item1', {
      x: 200,
      backgroundColor: 'blue',
    })
    .to('.square-item1', {
      y: 200,
      backgroundColor: 'blue',
    })
    .to('.square-item1', {
      x: 0,
      backgroundColor: 'blue',
    })
    .to('.square-item1', {
      y: 0,
      backgroundColor: 'blue',
    })

  gsap
    .timeline({ repeat: -1, delay: -2, repeatDelay: 0 })
    .to('.square-item2', {
      x: 200,
      backgroundColor: 'red',
    })
    .to('.square-item2', {
      y: 200,
      backgroundColor: 'red',
    })
    .to('.square-item2', {
      x: 0,
      backgroundColor: 'red',
    })
    .to('.square-item2', {
      y: 0,
      backgroundColor: 'red',
    })

  gsap
    .timeline({ repeat: -1, delay: -1.5, repeatDelay: 0 })
    .to('.square-item3', {
      x: 200,
      backgroundColor: 'green',
    })
    .to('.square-item3', {
      y: 200,
      backgroundColor: 'green',
    })
    .to('.square-item3', {
      x: 0,
      backgroundColor: 'green',
    })
    .to('.square-item3', {
      y: 0,
      backgroundColor: 'green',
    })

  gsap
    .timeline({ repeat: -1, delay: -1, repeatDelay: 0 })
    .to('.square-item4', {
      x: 200,
      backgroundColor: 'pink',
    })
    .to('.square-item4', {
      y: 200,
      backgroundColor: 'pink',
    })
    .to('.square-item4', {
      x: 0,
      backgroundColor: 'pink',
    })
    .to('.square-item4', {
      y: 0,
      backgroundColor: 'pink',
    })
})
</script>
<style scoped>
.cover {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* height: 100vh;
    width: 100vw; */
  /* box-shadow: inset; */

  opacity: 1;
  /* transition: transform 1s ease, opacity 1s ease; */
}

.square {
  position: relative;
  height: 300px;
  width: 300px;
  /* background-color: rgb(81, 81, 137); */
}

.square div {
  position: absolute;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  /* background-color: blue; */
}
</style>
