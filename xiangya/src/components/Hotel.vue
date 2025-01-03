<template>
  <Information title="酒店住宿">
    <el-row class="main" :gutter="0">
      <p>
        1.长沙泊富酒店（酒店地址：长沙市开福区芙蓉中路一段416号泊富国际广场B1层） 联系人：肖能能
        <el-link type="primary" href="tel:15874189514">15874189514</el-link><br /><br />
        高级单间20平米290元/晚 单早<br />
        城景大床房53平米348元/晚 单早<br />
        豪华单间53平米398元/晚 单早<br />
        豪华双间53平米418元/晚 双早<br /><br />

        2.留芳宾馆（酒店地址：湖南省长沙市开福区芙蓉中路留芳岭22号） 联系人：易红
        <el-link type="primary" href="tel:18974930376">18974930376</el-link><br /><br />
        高级商务双人间：258元/间（含双早）<br />
        豪华单间：298元/间（含早）
      </p>
    </el-row>
  </Information>
</template>

<script setup>
import Information from './Information.vue'
</script>

<style scoped>
p {
  width: 100%;
}
</style>
