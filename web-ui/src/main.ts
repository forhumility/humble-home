/**
 * @Author       : Humility
 * @Date         : 2023-08-03 14:53:23
 * @LastEditTime : 2023-08-04 09:47:46
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\src\main.ts
 * @Description  :
 */
import { createApp } from "vue";
import router from "./router";
import stroe from "./store";

import App from "./App.vue";
// tailwindcss
import "./assets/css/index.css";

createApp(App).use(router).use(stroe).mount("#app");
console.log(
  `%c
      humble-home
  
      ██████╗ ██╗   ██╗
      ██╔══██╗╚██╗ ██╔╝
      ██████╔╝ ╚████╔╝
      ██╔══██╗  ╚██╔╝
      ██████╔╝   ██║
      ╚═════╝    ╚═╝
  
      ██╗  ██╗██╗   ██╗███╗   ███╗██╗██╗     ██╗████████╗██╗   ██╗
      ██║  ██║██║   ██║████╗ ████║██║██║     ██║╚══██╔══╝╚██╗ ██╔╝
      ███████║██║   ██║██╔████╔██║██║██║     ██║   ██║    ╚████╔╝
      ██╔══██║██║   ██║██║╚██╔╝██║██║██║     ██║   ██║     ╚██╔╝
      ██║  ██║╚██████╔╝██║ ╚═╝ ██║██║███████╗██║   ██║      ██║
      ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝
      `,
  "color: #ccf"
);
