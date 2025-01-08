<template>
  <Information title="直播地址">
    <div style="text-align: center">
      <img src="../assets/images/live.png" height="240" width="240" />
    </div>
    <div style="text-align: center">
      <el-button type="primary" plain @click="redirect">直接跳转到直播间</el-button>
    </div>
  </Information>
</template>

<script setup lang="ts">
import Information from './Information.vue'

const redirect = () => {
  window.open(
    'https://wx.vzan.com/live/page/1488463236?v=1735875369141&ver=dec03451762442aab1e971e3fee3f2b8',
    '_blank'
  )
}
</script>
