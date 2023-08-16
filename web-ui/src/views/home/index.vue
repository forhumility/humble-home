<!--
 * @Author       : Humility
 * @Date         : 2023-08-03 17:28:55
 * @LastEditTime : 2023-08-15 16:45:35
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\views\home\index.vue
 * @Description  : 
-->
<template>
    <app-container :legends="legends">
        <template v-slot:left>

        </template>
        <template v-slot:right>

        </template>
    </app-container>
</template>

<script setup lang='ts'>
import AppContainer from '@/layout/AppContainer/index.vue'
const legends = [{ color: '#ccf', name: 'ccf' }]

</script>

<style scoped lang="less">
.network {
    .status {
        fill: aquamarine;
    }
}
</style>