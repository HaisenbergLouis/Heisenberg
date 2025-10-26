<template>
  <div class="over">
    <div class="body">
      <!-- <button class="chars">char</button> -->
      <div class="box">
        <p>
          Welcome to my website, I am a FrontEnd development learner. Studying in TianShui Normal
          University.
        </p>
      </div>
      <div class="pic">
        <div class="Toux"></div>
        <div class="TouxRe"><img src="/src/images/微信图片_20250816223428.png" alt="" /></div>
      </div>
    </div>
    <div class="tail">
      <svg height="80%" width="90%" fill="blue">
        <text
          class="animation-text"
          height="100%"
          width="100%"
          x="50%"
          y="10%"
          dy=".5em"
          font-size="100px"
          stroke-width="4"
          fill="white"
          stroke="black"
        >
          Say my name
        </text>
        <text
          class="animation-text"
          height="100%"
          width="100%"
          x="50%"
          y="60%"
          dy=".5em"
          font-size="200px"
          stroke="white"
          fill="black"
          stroke-width="6"
        >
          HEISENBERG
        </text>
      </svg>
    </div>
  </div>
  <div class="wapper">
    <div class="display">
      <div class="img">
        Heisenberg
        <!-- <img src="/src/images/pexels-pixabay-37403.jpg" alt="" />  -->
      </div>
      <div class="img">
        Heisenberg
        <!-- <img src="/src/images/pexels-pixabay-37403.jpg" alt="" /> -->
      </div>
      <div class="img">
        Heisenberg
        <!-- <img src="/src/images/pexels-pixabay-37403.jpg" alt="" /> -->
      </div>
      <div class="img">
        Heisenberg
        <!-- <img src="/src/images/pexels-pixabay-37403.jpg" alt="" /> -->
      </div>
      <div class="img">
        Heisenberg
        <!-- <img src="/src/images/pexels-pixabay-37403.jpg" alt="" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
onMounted(() => {
  // setTimeout(() => {
  //   const cover = document.querySelector('.cover')
  //   if (cover) {
  //     // cover.style.transition = 'opacity 2s ease'; // 添加过渡效果
  //     cover.style.opacity = 0 // 修改透明度
  //     cover.style.zIndex = -1
  //   }
  // }, 1000)
  let split = SplitText.create('.box', { type: 'words, chars' })
  // let split = new SplitText(".box", { type: "words, chars" });同样可以

  gsap.from(split.chars, {
    // wordBreak:,
    delay: 1,
    duration: 1,
    x: 100,
    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
    stagger: 0.05,
  })
  gsap.to('.Toux', {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: 'linear',
    transformOrigin: 'center center',
  })
})
</script>
<style>
* {
  margin: 0;
  padding: 0;
  /* font-size: 1vmin; */
}

.over {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgb(164, 12, 12), red, rgb(164, 12, 12));
  /* background-image: url(/src/images/pexels-pixabay-37403.jpg);
    background-size: cover; */
  /* background-color: red; */
}

.body {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.body .box {
  /* word-break: break-all; */

  height: auto;
  width: 850px;
  font-size: 60px;
  line-height: 100px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  /* background-color: aliceblue; */
}

.body .pic {
  /* background-color: aliceblue; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 600px;
}

.Toux {
  position: relative;
  height: 560px;
  width: 560px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.Toux::before,
.Toux::after {
  position: absolute;
  content: '';
  /* z-index: -1; */
  height: 560px;
  width: 560px;
  border-radius: 50%;
  background-color: rgb(197, 47, 2);
  /* background-image: conic-gradient(from 0turn at 50% 50%, white, rgb(0, 8, 255)); */
  background-image: conic-gradient(transparent, transparent, rgb(255, 255, 255));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.Toux::after {
  animation-delay: -5s;
}

.TouxRe {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: antiquewhite;
}

.TouxRe img {
  width: 545px;
  height: 545px;
  border-radius: 50%;
  mix-blend-mode: darken;
}

.tail {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vh;
  width: 100%;
}

.tail svg {
  fill: antiquewhite;
  display: flex;
  text-anchor: middle;
}

.tail svg text {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  stroke-dasharray: 50 20;
  stroke-dashoffset: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: animation-text 2s ease-in-out infinite;
}

@keyframes animation-text {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: 70;
  }
}

.wapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.display {
  position: sticky;
  width: 100%;
  /* height: 80rem; */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
