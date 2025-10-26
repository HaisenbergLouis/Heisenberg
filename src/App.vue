<template>
  <Loading v-if="showLoading" />
  <router-view />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Loading from '@/components/Loading.vue'

const showLoading = ref(true)

onMounted(() => {
  // 1.5秒后隐藏加载动画
  setTimeout(() => {
    showLoading.value = false
  }, 1500)
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
