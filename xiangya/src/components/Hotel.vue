<template>
    <Information title="酒店住宿">
        <el-row class="main" :gutter="0">
            <p>1. 茉莉花国际酒店<br>谭彤18773286745</p>
            <p>2. 维也纳国际酒店（时代帝店）<br>汪静191982199673 </p>
            <p>茉莉花国际酒店二维码：</p>
            <div>
                <img src="../assets/images/hotel_qrcode.png">
            </div>
        </el-row>
    </Information>
</template>

<script setup>
import Information from './Information.vue';

</script>

<style scoped>
p {
    width: 100%;
    height: 30px;
}
</style>