<!--
 * @Author       : Humility
 * @Date         : 2023-08-02 11:16:11
 * @LastEditTime : 2023-08-14 10:04:11
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\components\UnityView\index.vue
 * @Description  : Unity视图
-->
<template>
    <iframe :src="unityIndex" ref="unityIframe" name="Unity3D" title="Unity3D" frameborder="0" class="unity-view">
    </iframe>
</template>

<script setup lang="ts">
import { defineComponent, ref, onBeforeMount } from '@vue/runtime-core'
import unityBridge from './unityBridge'
unityBridge()// 初始化Unity通讯所需对象

defineComponent({
    name: 'UnityView'
})
/** Unity首页地址 */
const props = defineProps({
    unityIndex: {
        type: String,
        default: 'webgl/index.html'
    }
})
const unityIndex = ref(props.unityIndex);

/** Unity创建进度 */
const createProgress = ref(0);
const emit = defineEmits<{
    (event: 'loaded'): void
    (event: 'loading', progress: number): void
}>()
onBeforeMount(() => {
    window.addEventListener("message", ({ data }) => {
        const { type, progress } = data
        if (type == "creatingUnity") {
            createProgress.value = progress;
            if (progress == 100) {
                // 加载完成时间
                emit("loaded");
            } else {
                // 向父组件推送加载进度
                emit("loading", progress);
            }
        }
    });
})

/** 向Unity实例发送信息 */
const unityIframe = ref<any>(null);// Unity所在的Iframe
/**
 * @description: 向Unity场景中广播信息
 * @param {string} obj 场景中的对象名
 * @param {string} fun 对象挂载脚本的方法名
 * @param {string|object} msg 要发送信息
 * @return {void}
 */
function sendToUnity(obj: string, fun: string, msg?: string): void {
    unityIframe.value.contentWindow.sendMessage(obj, fun, msg);
}
defineExpose({
    sendToUnity
})
</script>

<style scoped>
.unity-view {
    background: rgb(0, 0, 10);
    border: 0;
}
</style>
