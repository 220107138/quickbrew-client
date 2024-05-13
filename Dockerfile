# Используем Node.js образ
FROM node:14-alpine

# Установка рабочей директории
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock) для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущего каталога в рабочую директорию
COPY . .

# Собираем приложение
RUN npm run build

# Открываем порт 3000 для доступа к приложению
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
