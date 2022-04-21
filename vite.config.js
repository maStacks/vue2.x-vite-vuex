import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";

export default defineConfig({
  // base: '/aaa',
  outDir: 'target',
   // 反向代理
   server: {
    port: 8080,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: 'https://blog.csdn.net/weixin_45292658',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    createVuePlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
});
