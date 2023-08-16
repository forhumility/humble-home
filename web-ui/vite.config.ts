/**
 * @Author       : Humility
 * @Date         : 2023-08-03 14:53:23
 * @LastEditTime : 2023-08-07 09:52:58
 * @LastEditors  : Humility
 * @FilePath     : \web-ui\vite.config.ts
 * @Description  :
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_BASE_URL } = env;
  return {
    plugins: [vue()],
    server: {
      //
      host: "0.0.0.0",
      // 端口
      port: 3333,
      // 打开浏览器
      open: true,
      // 自定义代理规则
      proxy: {
        [VITE_BASE_URL]: {
          target: "http://192.168.1.51:8123",
          changeOrigin: true,
          rewrite: (path) => {
            const reg = new RegExp(`^${VITE_BASE_URL}`);
            return path.replace(reg, "");
          },
        },
      },
      fs: {
        // 可以为项目根目录的上一级提供服务
        allow: [".."],
      },
    },
    publicDir: "public",
    build: {
      // 指定输出路径，默认'dist'
      outDir: "dist",
      // 指定生成静态资源的存放路径(相对于build.outDir)
      assetsDir: "assets",
      // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
      assetsInlineLimit: 4096,
      // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
      cssCodeSplit: true,
      // 构建后是否生成source map文件，默认false
      sourcemap: false,
      // 为true时，会生成manifest.json文件，用于后端集成
      manifest: false,
    },
    resolve: {
      alias: {
        // 如果报错__dirname找不到，需要安装 @types/node --save-dev
        "@": path.resolve(__dirname, "src"),
        "@/": path.resolve(__dirname, "src/"),
      },
    },
  };
});
