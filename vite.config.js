import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    server: {
        proxy: {
          '/api': {
            target: 'https://stg.carwale.com/',
            changeOrigin: true,
            secure: false,
          },
        },
      },
});
