<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="header">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ crumb }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>

const p = defineProps({
    crumb: String
})
</script>

<style scoped>
.header {
    height: 30px;
    background-color: rgb(242, 247, 251);
    align-content: center;
}
</style>