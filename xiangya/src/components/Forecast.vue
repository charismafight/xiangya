<template>
    <Header></Header>

    <Information title="天气预报">
        <el-row class="main" :gutter="0" v-if="weathers" v-for="w in weathers">
            <el-col>
                <p>{{ w.date }}
                    <skycon :condition="setWeatherIcon(w.dayweather)" color="white" size="40" />
                    {{ w.daytemp }}℃
                    {{ w.dayweather }}
                </p>
            </el-col>
        </el-row>
    </Information>
</template>

<script setup>
import Header from './Header.vue';
import axios from 'axios';
import Skycon from "vue3-skycons";
import { onMounted, ref } from 'vue'
import Information from './Information.vue';

let weathers = ref([])

const getWeather = async () => {
    const params = {
        key: '8e5fa8e17181a66c8e7f0ef99530cff1',
        weather: {}, //用于存放天气相关的数据
        city: '430100',
        extensions: 'all',
        iconCondition: null, //icon值
    };
    const { data } = await axios.get(`https://restapi.amap.com/v3/weather/weatherInfo`, { params });
    weathers.value = [...data.forecasts[0].casts];
}

onMounted(async () => {
    await getWeather();
})


const setWeatherIcon = (weather) => {
    if (weather === '晴') {
        return 'clear-day';
    } else if (weather.includes('云')) {
        return 'partly-cloudy-day';
    } else if (weather.includes('风')) {
        return 'wind';
    } else if (weather.includes('雨')) {
        return 'rain';
    } else if (weather.includes('雪')) {
        return 'snow';
    } else if (weather.includes('雾')) {
        return 'fog';
    }
    return 'cloudy';
}
</script>


<style scoped></style>