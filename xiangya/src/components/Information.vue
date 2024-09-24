<template>
    <Header></Header>

    <el-row class="title">
        <el-col :span="8"></el-col>
        <el-col :span="8" class="t_content">
            <p>{{ title }}</p>
        </el-col>
        <el-col :span="8"></el-col>
    </el-row>

    <div class="content">
        <slot>
        </slot>
    </div>

    <Footer></Footer>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';

defineProps(['title'])
</script>

<style scoped>
.title {
    margin-top: 200px;
}

.title p {
    font-family: Microsoft YaHei;
    font-size: larger;
    color: rgb(255, 255, 255);
    text-align: center;
    margin-top: 8px;
}

.t_content {
    border-radius: 50px;
    background-color: #478093;
    height: 40px;
    text-align: center;
}

.content {
    position: relative;
    top: 10px;
}
</style>