<template>
    <el-row class="header">
        <el-col :span="2">
            <router-link to="/">
                <el-link :underline="false">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    首页
                </el-link>
            </router-link>
        </el-col>
    </el-row>
</template>

<style scoped>
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
    text-align: left;
    height: 60px;
    top: 0px;
    left: 0px;
    padding-top: 15px;
    background-color: #8f8fe1;
}
</style>