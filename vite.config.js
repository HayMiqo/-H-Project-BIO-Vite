import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Базовые настройки
  base: './',  // Указывает на относительные пути
  root: '.', // корневая папка проекта (по умолчанию)
  publicDir: 'public', // статические файлы (не обрабатываются Vite)
  build: {
    outDir: 'dist', // папка сборки
    emptyOutDir: true, // очищать перед сборкой
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // входной HTML-файл
        // Если есть другие HTML-страницы, добавляем их здесь:
        // about: resolve(__dirname, 'about.html'),
      },
    },
  },
  server: {
    port: 3000, // порт dev-сервера
    open: true, // открывать в браузере автоматически
  },
  // server: {
  //   host: '0.0.0.0', // Доступ с любых IP в сети
  // }
});
