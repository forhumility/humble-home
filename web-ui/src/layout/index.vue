<!--
 * @Author       : Humility
 * @Date         : 2021-08-04 17:13:37
 * @LastEditTime : 2023-08-11 14:48:09
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\layout\index.vue
 * @Description  : 
-->
<template>
  <section class="app-wrapper flex relative">
    <!-- Unity 3D -->
    <unity-view class="app-3d"></unity-view>
    <!-- UI 2D -->
    <div class="app-2d fixed">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UnityView from '@/components/UnityView/index.vue'
import { defineComponent } from "@vue/runtime-core";
defineComponent({
  name: "Layout",
});

</script>
<style scoped lang="less">
.app-wrapper {
  width: 100%;
  height: 100%;

  .app-3d {
    width: 100%;
    height: 100%;
  }

  .app-2d {
    width: 100%;
    height: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

// Fade Bottom

// Speed: 1x
.fade-bottom-enter-active,
.fade-bottom-leave-active {
  transition: opacity 0.25s, transform 0.3s;
}

.fade-bottom-enter-from {
  opacity: 0;
  transform: translateY(-10%);
}

.fade-bottom-leave-to {
  opacity: 0;
  transform: translateY(10%);
}

// fade-scale
.fade-scale-leave-active,
.fade-scale-enter-active {
  transition: all 0.28s;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(1.2);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

// Fade Top
.fade-top-enter-active,
.fade-top-leave-active {
  transition: opacity 0.2s, transform 0.25s;
}

.fade-top-enter-from {
  opacity: 0;
  transform: translateY(8%);
}

.fade-top-leave-to {
  opacity: 0;
  transform: translateY(-8%);
}
</style>
