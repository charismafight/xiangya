<template>
    <Header></Header>
    <el-row style="top:140px">
        <el-row>
            <el-col :span="24">
                <el-button type="primary" plain @click="down">下载文件</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-container>
                <el-main>
                    <img src="../assets/images/notice3.jpg" alt="">
                    <img src="../assets/images/notice4.jpg" alt="">
                </el-main>
            </el-container>
        </el-row>
    </el-row>
    <Footer></Footer>
</template>

<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue'

const down = () => {
    const url = '/assets/pdfs/肿瘤病理规范化诊断及新进展培训班会议通知_updated.pdf'
    const filename = '肿瘤病理规范化诊断及新进展培训班会议通知.pdf'
    const x = new XMLHttpRequest()
    x.open('GET', url, true)
    x.responseType = 'blob'
    x.onload = e => {
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