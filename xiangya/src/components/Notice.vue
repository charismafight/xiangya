<template>
  <Header crumb="大会议程"></Header>
  <el-row>
    <el-row>
      <el-container>
        <el-main>
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_1.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_2.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_3.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_4.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_5.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_6.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_7.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_8.jpg"
            alt=""
          />
          <img
            src="../assets/images/notices/20250106/湖南省2024年病理年会总日程20250106_页面_9.jpg"
            alt=""
          />
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
  const url = '/static/pdfs/湘雅病理教育教学国际论坛日程安排_updated_20240926.pdf'
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
