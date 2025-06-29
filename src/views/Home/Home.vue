<template>
    <div class="over">
        <div class="header">
            <svg class="head" width="auto" height="1100">
                <circle class="round1" cx="200" cy="200" r="300"></circle>
                <text class="text1" x="330" y="350" fill="#910000" font-size="200" font-weight="900">Heisenberg's</text>
                <text class="text3" x="870" y="650" fill="#910000" font-size="200" font-weight="900">Website</text>
                <circle class="round1" cx="1800" cy="1000" r="300"></circle>
                <text class="text2" x="1200" y="1000" fill="#910000" font-size="120" font-weight="700">{{
                    currentTime }}</text>
            </svg>
        </div>
    </div>




</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');

const updateTime = () => {
    currentTime.value = new Date().toLocaleTimeString(); // 输出如 "14:30:45"
};

onMounted(() => {
    updateTime();
    setInterval(updateTime, 1000);
});



</script>

<style scoped>
.head {
    position: absolute;
}

@media screen {}

.content {
    background-color: aliceblue;
    height: 200px;
    width: 300px;
}

.can {
    overflow: hidden;
}


.round1 {
    fill: rgb(255, 47, 0);
    filter: drop-shadow(0px 0px 200px rgb(235, 41, 6)) invert(100%) blur(0.5rem) brightness(100%);


}



.round1:hover {
    transform: scale(1.2);
    transition: 1s;
}

.text1 {
    fill: #910000;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 6;
    stroke-dasharray: 30 20;
    stroke-dashoffset: 30;
    animation: linear 2s ease infinite;
}

.text2 {
    fill: #910000;
    stroke: white;
    stroke-linecap: round;
    /* stroke-linejoin: round; */
    stroke-width: 3;
    stroke-dasharray: 20 15;
    stroke-dashoffset: 20;
    animation: linear 2s ease infinite;
}



@keyframes linear {
    0% {
        stroke-dashoffset: 100;
    }

    100% {
        stroke-dashoffset: 0;
    }
}

.text3:hover {
    /* transform: skew(25deg) rotate(-10deg) rotateX(35deg); */
    text-shadow: -1px 1px 0px white,
        -2px 2px 0px white,
        -3px 3px 0px white,
        -4px 4px 0px white,
        -5px 5px 0px white,
        -6px 6px 0px white,
        -7px 7px 0px white,
        -8px 8px 0px white,
        -9px 9px 0px white,
        -10px 10px 0px white,
        -11px 11px 0px white,
        -12px 12px 0px white,
        -13px 13px 0px white,
        -14px 14px 0px white,
        -15px 15px 0px white;
    transition: 1s;
}


.over {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: #000000;
}
</style>
