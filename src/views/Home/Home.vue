<template>
  <div class="over">
    <div class="cover">
      <div class="square">
        <div class="square-item1" style="background-color: blue;"></div>
        <div class="square-item2" style="background-color: red;"></div>
        <div class="square-item3" style="background-color: green;"></div>
        <div class="square-item4" style="background-color: pink;"></div>
      </div>

    </div>
    <div class="navigation">
      <div class="logo"><img src="/src/images/资源 1.svg" alt=""></div>
      <div class="content">
        <div class="search">
          <input type="text" placeholder="请输入你要搜索的内容" value="">
          <search width="30px"></search>
        </div>

        <ul>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="owner"><img src="/src/images/微信图片_20250816223428.png" alt=""></div>
    </div>

    <div class="body">
      <!-- <button class="chars">char</button> -->
      <div class="box">
        <p>Welcome to my website, I am a FrontEnd development learner.
          Studying in TianShui Normal University.</p>

      </div>
      <div class="pic">
        <div class="Toux"></div>
        <div class="TouxRe"><img src="/src/images/微信图片_20250816223428.png" alt=""></div>
      </div>
    </div>
    <div class="tail">
      <svg height="80%" width="90%" fill="blue"><text class="animation-text" height="100%" width="100%" x="50%" y="10%"
          dy=".5em" font-size="100px" stroke-width="4" fill="white" stroke="black">Say my
          name</text><text class="animation-text" height="100%" width="100%" x="50%" y="60%" dy=".5em" font-size=200px
          stroke="white" fill="black" stroke-width="6">HEISENBERG</text></svg>
    </div>

  </div>
  <div class="display">
    <div class="img1"><img src="/src/images/pexels-pixabay-37403.jpg" alt=""></div>
    <div class="img2"><img src="/src/images/pexels-pixabay-37403.jpg" alt=""></div>
    <div class="img3"><img src="/src/images/pexels-pixabay-37403.jpg" alt=""></div>
    <div class="img4"><img src="/src/images/pexels-pixabay-37403.jpg" alt=""></div>
    <div class="img5"><img src="/src/images/pexels-pixabay-37403.jpg" alt=""></div>
  </div>


</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
onMounted(() => {
  setTimeout(() => {
    const cover = document.querySelector('.cover');
    if (cover) {
      // cover.style.transition = 'opacity 2s ease'; // 添加过渡效果
      cover.style.opacity = 0; // 修改透明度
      cover.style.zIndex = -1;

    }
  }, 1000);
  gsap.timeline({ repeat: -1, delay: -2.5, repeatDelay: 0 })
    .to(".square-item1", {
      x: 200,
      backgroundColor: "blue",
    })
    .to(".square-item1", {
      y: 200,
      backgroundColor: "blue",

    })
    .to(".square-item1", {
      x: 0,
      backgroundColor: "blue",

    })
    .to(".square-item1", {
      y: 0,
      backgroundColor: "blue",

    });

  gsap.timeline({ repeat: -1, delay: -2, repeatDelay: 0 })
    .to(".square-item2", {
      x: 200,
      backgroundColor: "red",

    })
    .to(".square-item2", {
      y: 200,
      backgroundColor: "red",

    })
    .to(".square-item2", {
      x: 0,
      backgroundColor: "red",

    })
    .to(".square-item2", {
      y: 0,
      backgroundColor: "red",

    });

  gsap.timeline({ repeat: -1, delay: -1.5, repeatDelay: 0 })
    .to(".square-item3", {
      x: 200,
      backgroundColor: "green",

    })
    .to(".square-item3", {
      y: 200,
      backgroundColor: "green",

    })
    .to(".square-item3", {
      x: 0,
      backgroundColor: "green",

    })
    .to(".square-item3", {
      y: 0,
      backgroundColor: "green",

    });

  gsap.timeline({ repeat: -1, delay: -1, repeatDelay: 0 })
    .to(".square-item4", {
      x: 200,
      backgroundColor: "pink",

    })
    .to(".square-item4", {
      y: 200,
      backgroundColor: "pink",

    })
    .to(".square-item4", {
      x: 0,
      backgroundColor: "pink",

    })
    .to(".square-item4", {
      y: 0,
      backgroundColor: "pink",

    });
  let split = SplitText.create(".box", { type: "words, chars" });
  // let split = new SplitText(".box", { type: "words, chars" });同样可以

  gsap.from(split.chars, {
    // wordBreak:,
    delay: 1,
    duration: 1,
    x: 100,
    autoAlpha: 0,   // fade in from opacity: 0 and visibility: hidden
    stagger: 0.05,

  });
  gsap.to('.Toux', {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: 'linear',
    transformOrigin: 'center center',
  });


})

</script>
<style>
* {
  margin: 0;
  padding: 0;

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

.cover {
  position: absolute;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* height: 100vh;
    width: 100vw; */
  box-shadow: inset;

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

.navigation {
  background-color: rgba(40, 40, 41, 0.423);
  /* background-position: 20% 58%; */
  /* position: sticky; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 5vh;
  /* background-color: antiquewhite; */
}

.logo {
  position: absolute;
  left: 0;
  margin-left: 25px;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
}

.owner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  position: absolute;
  right: 0;
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.owner img {
  border-radius: 50%;
  height: 50px;
  width: 50px;

}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: gray; */
  width: 85vw;
  height: 100%;
}

.content .search {
  opacity: 1;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search input {
  opacity: 0.5;
  margin-right: 5px;
  padding: 5px;
  height: 30px;
  width: 250px;
  border-radius: 5px;
}

.content ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

ul li {
  /* color: aliceblue; */
  font-size: 18px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 70px;
  border-radius: 15px;
  /* background-color: rgb(255, 255, 255); */
  padding: 10px;
}

ul li:hover {
  background-color: rgb(0, 0, 0);
  color: rgba(255, 255, 255, 0.712);
  transition: 0.5s;
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

.display {
  width: 100vw;
  height: 100vh;
  /* display: flex; */

}

.img1,
.img2,
.img3,
.img4,
.img5 {
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: row;
}

.display img {
  height: 60px;
  width: 80px;
}
</style>
