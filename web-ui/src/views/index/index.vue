<!--
 * @Author       : Humility
 * @Date         : 2023-08-03 17:28:29
 * @LastEditTime : 2023-08-09 17:12:44
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\views\index\index.vue
 * @Description  : 
-->
<template>
    <div class="content flex w-[100%] h-[100%] ">
        <map-view class="flex-1"></map-view>
        <div
            class="action flex flex-col justify-center items-center rounded-md absolute left-[0] top-[0] w-[16vw] h-[100%]">
            <div class="p-4 text-center">
                <h1 class="py-2">Humble Home</h1>
                <img :src="logo" alt="logo" title="logo" class="p-4 rounded-full" />
            </div>
            <div class="w-3/5 px-4 py-2 m-2 text-center rounded-md bg-sky-500 cursor-pointer" @click="enter('owner')">业主
            </div>
            <div class="w-3/5 px-4 py-2 m-2 text-center rounded-md bg-sky-500 cursor-pointer" @click="enter()">游客</div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import MapView from '@/components/MapView/index.vue'

import logo from '@/assets/images/icon.png'

import { useRouter } from 'vue-router'
const router = useRouter()
function enter(type?: string) {
    if (type == 'owner') {
        console.log('业主登录')
    } else {
        console.log('游客登录')
    }
    router.push('/home')
}

</script>

<style lang='less' scoped>
.content {
    .action {
        background-image: linear-gradient(36deg, #84fab00e 0%, #8fd3f40e 100%);
        backdrop-filter: blur(16px);
        // background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
        // background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
        // background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
    }
}
</style>