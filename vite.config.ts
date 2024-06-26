import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-tictactoe-annkar73/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".src", import.meta.url))
    },
  },
});
