# Usa una imagen de Node.js como base
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para la aplicación
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto en el que tu aplicación Nest.js se ejecuta (ajusta el puerto según tu configuración)
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["npm", "run", "start"]
