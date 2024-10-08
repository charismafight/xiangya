<template>
    <Information title="直播地址">
        <div style="text-align: center;">
            <img src="../assets/images/live_qrcode.png" height="240" width="240">
        </div>
        <div style="text-align: center;">
            <el-button type="primary" plain @click="redirect">直接跳转到直播间</el-button>
        </div>
    </Information>
</template>

<script setup lang="ts">
import Information from './Information.vue';

const redirect = () => {
    window.open('https://wx.vzan.com/live/page/903169705?v=1727332090300&ver=5cf35c9984144221867852ba24f6affa', '_blank');
}

</script>