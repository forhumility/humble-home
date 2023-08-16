/*
 * @Author       : Humility
 * @Date         : 2021-08-03 17:27:53
 * @LastEditTime : 2021-08-04 17:25:26
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\router\index.ts
 * @Description  : 路由入口
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, form, next) => {
    // console.log('form', form, 'to', to)
    next()
})

export default router