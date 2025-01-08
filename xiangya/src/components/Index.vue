<template>
  <el-row>
    <el-col :span="24" class="header"> </el-col>
  </el-row>
  <el-row class="content">
    <el-col class="gradient-color" style="text-align: center">
      <h1 class="tt">湖南省医学会病理学专业委员会2024年学术年会</h1>
      <p class="seminar_date">湖南长沙1月9日——12日</p>

      <!-- countdown -->
      <div>
        <Countdown
          countdownSize="2rem"
          deadline="2025-1-9"
          mainColor="#ffcd6f"
          secondFlipColor="#f7ad23"
        />
      </div>

      <div>
        <div class="grid">
          <div>
            <el-card>
              <RouterLink to="/info">
                <el-button class="btn">
                  <el-icon :size="iconSize" :color="iconColor">
                    <Message />
                  </el-icon>
                </el-button>
              </RouterLink>
              <template #footer> 会议通知 </template>
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
              <template #footer> 会议日程 </template>
            </el-card>
          </div>
          <div>
            <el-card>
              <a href="https://mm.sciconf.cn/cn/minisite/index/27326">
                <el-button class="btn">
                  <el-icon :size="iconSize" :color="iconColor">
                    <Memo />
                  </el-icon>
                </el-button>
              </a>
              <template #footer> 参会注册 </template>
            </el-card>
          </div>
          <div>
            <el-card>
              <RouterLink to="/expert">
                <el-button class="btn">
                  <el-icon :size="iconSize" :color="iconColor">
                    <Avatar />
                  </el-icon>
                </el-button>
              </RouterLink>
              <template #footer> 专家简介 </template>
            </el-card>
          </div>
          <div>
            <el-card>
              <RouterLink to="/competition">
                <el-button class="btn">
                  <el-icon :size="iconSize" :color="iconColor">
                    <InfoFilled />
                  </el-icon>
                </el-button>
              </RouterLink>
              <template #footer> 参赛报名 </template>
            </el-card>
          </div>
          <div>
            <el-card>
              <RouterLink to="/live">
                <el-button class="btn">
                  <el-icon :size="iconSize" :color="iconColor">
                    <VideoCameraFilled />
                  </el-icon>
                </el-button>
              </RouterLink>
              <template #footer> 线上会议 </template>
            </el-card>
          </div>
          <div>
            <el-card>
              <RouterLink to="/forecast">
                <el-button class="btn">
                  <el-icon :size="iconSize" :color="iconColor">
                    <PartlyCloudy />
                  </el-icon>
                </el-button>
              </RouterLink>
              <template #footer> 交通天气 </template>
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
              <template #footer> 酒店住宿 </template>
            </el-card>
          </div>
          <div>
            <el-card>
              <RouterLink to="/contact">
                <el-button class="btn">
                  <el-icon :size="iconSize" :color="iconColor">
                    <Menu></Menu>
                  </el-icon>
                </el-button>
              </RouterLink>
              <template #footer> 联系我们 </template>
            </el-card>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>

  <Footer></Footer>
</template>

<script setup lang="js">
import { Countdown } from 'vue3-flip-countdown'
import Footer from './Footer.vue'
const iconSize = 40

const iconColor = 'white'
</script>

<style scoped>
.el-card {
  --el-card-padding: 2px;
  background-color: rgb(206, 87, 77);
  width: 90px;
  color: rgb(55, 15, 3);
}

.countdown {
  font-size: medium;
  color: white;
  text-align: center;
}

.header {
  height: 19vh;
  background-image: url('../assets/images/header.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.content {
  display: flex;
  flex-direction: column;
  height: 79vh;
  background-image: url('../assets/images/background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.btn {
  border: 0px;
  background-color: rgba(255, 255, 255, 0);
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

.grid > div {
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
  /* background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
</style>
