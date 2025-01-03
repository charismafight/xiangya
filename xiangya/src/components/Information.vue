<template>
  <Header :crumb="title"></Header>

  <div class="content">
    <el-row class="title">
      <el-col :span="8"> </el-col>
      <el-col :span="8" class="t_content">
        <p>{{ title }}</p>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>

    <div>
      <slot> </slot>
    </div>
  </div>

  <Footer></Footer>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'

defineProps(['title'])
</script>

<style lang="less" scoped>
@title_height: 40px;

.title {
  height: @title_height;

  img {
    height: @title_height;
    width: 40px;
  }
}

.title p {
  font-family: Microsoft YaHei;
  font-size: larger;
  color: white;
  text-align: center;
  margin-top: 8px;
}

.t_content {
  border-radius: 50px;
  background-color: #478093;
  height: @title_height;
  text-align: center;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url('../assets/images/content_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
