FROM nginx:latest

# Удаляем стандартный конфиг Nginx, если есть
RUN rm /etc/nginx/conf.d/default.conf
# Копируем нашу конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/
# Копируем собранные файлы Vite-проекта в директорию Nginx для статики
COPY dist /usr/share/nginx/html
EXPOSE 80 