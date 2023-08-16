/**
 * @Author       : Humility
 * @Date         : 2022-07-12 08:51:49
 * @LastEditTime : 2023-08-03 17:29:46
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\router\routes.ts
 * @Description  : 路由配置
 */

import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "index",
    component: () => import("@/views/index/index.vue"),
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index.vue"),
        name: "首页",
        meta: { title: "首页" },
      },
    ],
  },
];
export default routes;
