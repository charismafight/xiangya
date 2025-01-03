<template>
  <Header crumb="大会议程"></Header>
  <el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" plain @click="down">下载文件</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-container>
        <el-main>
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_01.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_02.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_03.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_04.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_05.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_06.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_07.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_08.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_09.jpg" alt="" />
          <img src="../assets/images/notices/湖南省2024年病理年会日程-第6版_页面_10.jpg" alt="" />
        </el-main>
      </el-container>
    </el-row>
  </el-row>
  <Footer></Footer>
</template>

<script setup>
import Footer from './Footer.vue'
import Header from './Header.vue'

const down = () => {
  const url = '/assets/pdfs/湖南省2024年病理年会日程-第6版(2).pdf'
  const filename = '湖南省2024年病理年会日程.pdf'
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

<style scoped>
img {
  width: 100%;
  object-fit: cover;
}
</style>
