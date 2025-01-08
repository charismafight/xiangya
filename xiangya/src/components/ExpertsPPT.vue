<template>
  <Information title="专家介绍">
    <el-row>
      <el-col :span="24">
        <el-button type="primary" plain @click="down('周四周五-线上会议讲座专家简介-29人.pdf')"
          >点击下载周四周五-线上会议讲座专家简介</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <div class="spliter"></div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" plain @click="down('2. 周六周日-线下会议讲座专家简介-25人.pdf')"
          >点击下载线下会议讲座专家简介</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <div class="spliter"></div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" plain @click="down('3. 技术会场-讲座专家简介汇总 5人.pdf')"
          >点击下载技术会场-讲座专家简介</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <div class="spliter"></div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" plain @click="down('4. 科研论坛-讲座专家简介汇总 10人.pdf')"
          >点击下载科研论坛-讲座专家简介汇总</el-button
        >
      </el-col>
    </el-row>
  </Information>
</template>

<script setup>
import Information from './Information.vue'

const down = (s) => {
  let url = `/static/ppts/${s}`
  const filename = s
  const x = new XMLHttpRequest()
  x.open('GET', url, true)
  x.responseType = 'blob'
  x.onload = (e) => {
    const url = window.URL.createObjectURL(x.response)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
  }
  x.send()
}
</script>

<style lang="less">
.spliter {
  height: 5px;
}
</style>
