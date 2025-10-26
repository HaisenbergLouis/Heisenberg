<template>
  <div class="layout-container">
    <!-- 导航栏 -->
    <div class="navigation">
      <div class="logo"><img src="/src/images/资源 1.svg" alt="" /></div>
      <div class="content">
        <div class="search">
          <input type="text" placeholder="请输入你要搜索的内容" value="" />
          <search width="30px"></search>
        </div>

        <ul>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="owner"><img src="/src/images/微信图片_20250816223428.png" alt="" /></div>
    </div>

    <!-- 主要内容区域 - 使用 router-view 显示子页面 -->
    <router-view />

    <!-- 底部 -->
  </div>
</template>

<script setup lang="ts">
// 布局组件，包含导航栏和主要内容区域
</script>

<style scoped>
.navigation {
  background-color: rgba(40, 40, 41, 0.423);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 5vh;
}

.logo {
  position: absolute;
  left: 0;
  margin-left: 25px;
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
  font-size: 18px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 70px;
  border-radius: 15px;
  padding: 10px;
}

ul li:hover {
  background-color: rgb(0, 0, 0);
  color: rgba(255, 255, 255, 0.712);
  transition: 0.5s;
}

.layout-container {
  width: 100vw;
  height: 100vh;
}
</style>
