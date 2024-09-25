<template>
    <Information title="大会专家">
        <div v-for="i in 17">
            <img :src="imgUrls[i]" height="auto" width="100%" />
        </div>
    </Information>
    <div style="height: 60px;"></div>
    <Footer></Footer>
</template>

<script setup>
import Information from './Information.vue';
import Footer from './Footer.vue';

/* @vite-ignore */
const imgUrls = Array.from({ length: 18 }, (_, i) => new URL(`../assets/images/experts/5b893262-d74e-47ba-997f-9635192a164b-${i}abcd.jpg`, import.meta.url));
</script>