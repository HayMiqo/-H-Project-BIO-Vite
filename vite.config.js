import { defineConfig } from 'vite';

export default defineConfig({
build: {
    // Входной файл, который Vite будет использовать для сборки
    rollupOptions: {
      input: './src/main.js',  // Замените на путь к вашему входному файлу
    },
},
});
