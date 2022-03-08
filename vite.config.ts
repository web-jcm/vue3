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
    cors: true, // 跨域
    proxy: {
      "/api": {
        target: "http://localhost:8080/api/", // 目标地址
        changeOrigin: true, // 修改源
        secure: false, // ssl
        rewrite: (path) => path.replace("/api/", "/"),
      },
    },
  },
});
