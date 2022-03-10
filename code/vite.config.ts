import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3000, // 端口
    open: true, // 启动打开浏览器
    proxy: {
      "/api": {
        target: "https://v1.hitokoto.cn/", // 目标地址
        changeOrigin: true, // 修改源
        rewrite: (path) => {
          console.log(path)
          return path.replace("/api", "")
        },
      },
    },
  },
});
