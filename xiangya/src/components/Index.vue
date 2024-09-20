<template>
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
                            <el-icon :size="iconSize" :color="iconColor">
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
const iconSize = 40;

const iconColor = '#eebe77'

</script>

<style scoped>
.el-card {
    --el-card-padding: 2px;
    background-color: rgb(255, 246, 229);
    width: 90px;
}

.countdown {
    font-size: medium;
    color: white;
    text-align: center;
}

.square {}

.btn {
    border: 0px;
    background-color: rgba(255, 255, 255, 0.1);
}

.grid {
    position: relative;
    top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20% 8%;
    grid-auto-flow: row;
    font-size: small;
    justify-items: center;
}

.grid-countdown {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1%;
    grid-auto-flow: row;
}

.grid>div {
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
    margin-top: 200px;
}
</style>