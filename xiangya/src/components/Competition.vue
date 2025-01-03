<template>
  <Information title="参赛报名">
    <el-row><p>石蜡切片比赛扫下方二维码报名</p></el-row>
    <el-row>
      <img src="../assets/images/register/石蜡切片比赛.jpg" />
    </el-row>
    <el-row><p>病理医师识图比赛扫下方二维码报名</p></el-row>
    <el-row><img src="../assets/images/register/医师识图比赛.jpg" /></el-row>
  </Information>
</template>

<script setup lang="ts">
import Information from './Information.vue'
</script>

<style scoped>
img {
  width: 70%;
  height: 70%;
}

.el-row {
  justify-content: center;
}

p {
  width: 100%;
  text-align: center;
}
</style>
