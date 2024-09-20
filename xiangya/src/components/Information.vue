<template>
    <Header></Header>

    <el-row class="title">
        <el-col :span="8"></el-col>
        <el-col :span="8" class="t_content">
            <p>{{ title }}</p>
        </el-col>
        <el-col :span="8"></el-col>
    </el-row>

    <slot>
        <el-row class="main" :gutter="0">
            <el-col>
                <p>尊敬的各位专家、同道:</p>
            </el-col>
            <el-col>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;为庆祝湘雅医学院办学 110
                    周年，提高病理学工作者的专业技术水平和业务素质，促进病理界的学术交流与合作，提高教学、科研学术水平，规范肿瘤病理诊断标准化与分子病理检测规范化、提高疾病的病理精准诊断，拟于2024年10月11日-13日在长沙举办湘雅病理教育教学国际论坛-暨“肿瘤病理规范化诊断及新进展培训班”，并举行湖南省青年病理教师讲课比赛。
                </p>
            </el-col>
            <p style="text-align: right;width: 100%;">湖南省医学会病理学专业委员会<br>中南大学湘雅医学院<br>2024年7月15日
            </p>
        </el-row>
    </slot>

    <Footer></Footer>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';

defineProps(['title'])
</script>

<style scoped>
.title {
    margin-top: 100px;
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
</style>