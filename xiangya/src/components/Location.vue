<template>
    <div>
        <Header></Header>
        <div id="amp-container" style="height: 500px;top:60px;" />
        <div style="text-align: center;">
            <el-button style="margin-top: 70px;" type="primary" plain @click="redirect">导航到茉莉国际酒店</el-button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import Header from './Header.vue';

export default defineComponent({
    setup() {
        const dataMap = reactive({
            map: '',
            markerLayer: '',
            latitude: 28.222926, //纬度
            lngitude: 112.93503, //经度
        });
        const TMap = (window as any).TMap;
        onMounted(() => {
            init();
            markerLayer();
        });
        const init = () => {
            let center = { lat: 28.222926, lng: 112.93503 };
            dataMap.map = new TMap.Map(document.getElementById('amp-container'), {
                center: center,
                zoom: 18,
                viewMode: '2D'
            });
        };
        //标记地图 
        const markerLayer = () => {
            dataMap.markerLayer = new TMap.MultiMarker({
                map: dataMap.map,  //指定地图容器
                //样式定义
                styles: {
                    //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
                    "myStyle": new TMap.MarkerStyle({
                        "width": 25,  // 点标记样式宽度（像素）
                        "height": 35, // 点标记样式高度（像素）
                        // "src": '../../assets/logo.png',  //图片路径
                        'background': 'pink',
                        //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
                        "anchor": { x: 16, y: 32 }
                    })
                },
                //点标记数据数组
                geometries: [
                    {
                        "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
                        "styleId": 'myStyle',  //指定样式id
                        "position": new TMap.LatLng(dataMap.latitude, dataMap.lngitude),  //点标记坐标位置
                    },
                ]
            });
        };
        const address = ref('');

        return {
            ...toRefs(dataMap),
            address
        };
    },
    components: {
        Header
    },
    methods: {
        redirect() {
            window.open('https://apis.map.qq.com/uri/v1/marker?marker=coord:28.222926,112.93503;title:长沙茉莉花国际酒店;addr:长沙茉莉花国际酒店&referer=QX2BZ-PK4LJ-QHSFI-DXVQW-DOE63-N6FGS', '_blank');
        }
    }
});
</script>
