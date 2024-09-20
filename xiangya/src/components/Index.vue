<template>
    <div>
        <RouterLink to="/">
            <img src="../assets/images/banner_large.png" width="100%" height="200">
        </RouterLink>
    </div>
    <div class="gradient-color" style="text-align: center;">
        <h1 class="tt">湘雅病理教育教学国际论坛</h1>
        <h3 class="ttt">暨肿瘤病理规范化诊断及新进展培训班会议</h3>
        <p class="seminar_date">湖南长沙10月12日——13日</p>
    </div>
    <!-- countdown -->
    <div>
        <Countdown countdownSize="2rem" deadline="2024-10-12" mainColor="#ffcd6f" secondFlipColor="#f7ad23" />
    </div>
    <div class="square">
        <div class="square-inner grid">
            <div>
                <el-card>
                    <RouterLink to="/info">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#409efc">
                                <Message />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        邀请函
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/schedule">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#95d475">
                                <InfoFilled />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        基本信息
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/notice">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#eebe77">
                                <Reading />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        会议通知
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/schedule">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#f4c28f">
                                <Memo />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        大会议程
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/register">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#a8bffa">
                                <Menu></Menu>
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        个人中心
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/hotel_location">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#78d2f4">
                                <LocationInformation />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        会场交通
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/register">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#88df9a">
                                <Avatar />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        个人参会注册
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/contact">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#75dbaf">
                                <Comment />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        联系我们
                    </template>
                </el-card>
            </div>
            <div>
                <el-card>
                    <RouterLink to="/hotel">
                        <el-button class="btn">
                            <el-icon :size="iconSize" color="#75dbaf">
                                <OfficeBuilding />
                            </el-icon>
                        </el-button>
                    </RouterLink>
                    <template #footer>
                        酒店住宿
                    </template>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { Countdown } from 'vue3-flip-countdown'
const iconSize = 60;

const iconColor = '#eebe77'

</script>

<style scoped>
.el-card {
    --el-card-padding: 2px;
    background-color: rgb(255, 246, 229);
}

.countdown {
    font-size: medium;
    color: white;
    text-align: center;
}

.btn {
    width: 100px;
    height: 60px;
    border: 0px;
    background-color: rgba(255, 255, 255, 0.1);
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1%;
    grid-auto-flow: row;
}

.grid-countdown {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1%;
    grid-auto-flow: row;
}

.grid>div {
    font-size: 18px;
    line-height: 2;
    text-align: center;
}

p {
    width: 100%;
    line-height: 1px;
}

.tt {
    font-size: 28px;
    font-family: SimSun;
    font-weight: bold;
}

.ttt {
    font-size: 19px;
    font-family: SimSun;
    font-weight: bold;
}

.seminar_date {
    font-size: 16px;
}

.gradient-color {
    background-image: linear-gradient(to right, #ffcd6f, white);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 120px;
}
</style>