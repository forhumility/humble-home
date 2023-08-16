<!--
 * @Author       : Humility
 * @Date         : 2023-08-04 11:16:32
 * @LastEditTime : 2023-08-11 14:18:08
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\layout\AppContainer\index.vue
 * @Description  : 
-->
<template>
    <div class="page_container">
        <div class="left" :class="leftStyle == 'double' ? 'page_left_double' : 'page_left_lonely'">
            <slot name="left">
                page left
                <!-- 页面左侧内容。注：使用"double"样式时需使用两个div作为左右两列的根节点 -->
            </slot>
        </div>
        <div class="right" :class="rightStyle == 'double' ? 'page_right_double' : 'page_right_lonely'">
            <slot name="right">
                page right
                <!-- 页面右侧内容。注：使用"double"样式时需使用两个div作为左右两列的根节点 -->
            </slot>
        </div>
        <footer class="bottom" v-show="legends.length > 0">
            <div v-for="(legend, i) in  legends " :key="i">
                <span :style="{ background: legend.color }"></span>
                {{ legend.name }}
            </div>
        </footer>
    </div>
</template>

<script setup lang='ts'>
import { defineComponent, toRefs } from '@vue/runtime-core';
defineComponent({
    name: 'AppContainer'
})
const props = defineProps({
    // 左侧面板样式
    leftStyle: {
        type: String,
        default: () => {
            return 'lonely'
        },
    },
    // 右侧面板样式
    rightStyle: {
        type: String,
        default: () => {
            return 'lonely'
        },
    },
    // 底部图例
    legends: {
        type: Array<Legend>,
        default: () => {
            // 举个栗子，数组内的元素格式如下
            // {name: "某某", color: "#ccf"}
            return [];
        },
    },
})
const { leftStyle, rightStyle, legends } = toRefs(props)
interface Legend {
    name?: string
    color?: string
}
</script>

<style lang='less' scoped>
.page_container {
    width: 100%;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
    z-index: 0;
    >div {
        z-index: 2;
        position: absolute;
        display: block;
        top: 0;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }

    .left,
    .right {
        display: flex;
        flex-direction: column;
    }

    /**  左侧面板单列 */
    .page_left_lonely {
        width: 17vw;
        padding-left: 1vw;
    }

    /**  左侧面板双列 */
    .page_left_double {
        width: 34vw;
        flex-direction: row;

        >div {
            max-width: 17vw;
            flex: 1;
            padding-left: 1vw;
        }
    }

    /**  右侧面板单列 */
    .page_right_lonely {
        width: 16vw;
        padding-right: 1vw;
    }

    /**  右侧面板双列 */
    .page_right_double {
        width: 34vw;
        flex-direction: row;

        >div {
            max-width: 17vw;
            flex: 1;
            padding-right: 1vw;
        }
    }

    /**  底部图例 */
    .bottom {
        min-width: 26vw;
        height: 4vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: fixed;
        left: 50vw;
        bottom: 4vh;
        transform: translateX(-50%);

        >div {
            display: flex;
            justify-content: center;
            align-items: center;

            >span {
                display: block;
                width: 2vh;
                height: 2vh;
                margin-right: 0.5vh;
            }
        }
    }
}
</style>