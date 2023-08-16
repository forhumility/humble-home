<template>
    <iframe :src="mapUrl" ref="mapIframe" name="MapView" title="MapView" frameborder="0" class="map-view">

    </iframe>
</template>

<script setup lang='ts'>
import { defineComponent, ref } from '@vue/runtime-core';
defineComponent({
    name: 'MapView'
})
const props = defineProps({
    mapUrl: {
        type: String,
        default: 'https://embed.windy.com/embed2.html?lat=22.82872231826077&lon=108.29236977725982&detailLat=22.82872231826077&detailLon=108.29236977725982&width=1920&height=1080&zoom=7&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1'
        // src="https://embed.windy.com/embed2.html?lat=19.436&lon=113.247&detailLat=23.118&detailLon=113.254&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1"
    }
})
const mapUrl = ref(props.mapUrl);

const mapIframe = ref<any>(null)

</script>

<style lang='less' scoped>
.map-view {
    display: block;
    flex: 1;
    background: rgb(0, 0, 10);
    border: 0;
}
</style>