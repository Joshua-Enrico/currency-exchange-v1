# Currency Exchange Pi

## Descripción del Proyecto

Currency Exchange , es un servicio para cambiar divisar, este proyecto levanta un contenedor que contiene redis, mysql y el servicio en nest js
solo es necesario levantar el contenedor y todo esta configurado para ser usado

## Uso

Construye y levanta el contenedor.

```bash
docker-compose build
docker-compose up -d
```

# Desafío de Desarrollo

Este proyecto es parte de un desafío de desarrollo que incluye las siguientes tareas:

1. **Lenguaje de Programación:**
   - [x] Utilizar Node.js con NestJS como se especifica.

2. **Seguridad con JWT:**
   - [x] Implementar JWT (JSON Web Token) para asegurar las consultas a la API.

3. **In Memory Database:**
   - [x] Crear la información del tipo de cambio en una base de datos en memoria, como por ejemplo, utilizando variables globales o algún módulo que simule una base de datos en memoria.

4. **Dockerizar la Solución:**
   - [x] Crear un archivo `Dockerfile` para dockerizar tu aplicación NestJS.

5. **Uso de la API desde Postman:**
   - [x] Documentar y compartir una colección de Postman para mostrar cómo usar la API.

6. **Pruebas Unitarias:**
   - [ ] Realizar pruebas unitarias para validar la funcionalidad de tu código. Puedes utilizar herramientas como Jest para pruebas unitarias en NestJS.

7. **Documentar el API con Swagger u OpenAPI:**
   - [x] Generar documentación API utilizando Swagger o OpenAPI.

8. **Crear un POST para Actualizar el Valor del Tipo de Cambio:**
   - [x] Implementar una ruta `POST` que permita actualizar el valor del tipo de cambio.

9. **Desplegar en AWS:**
   - [ ] Considerar desplegar tu aplicación en AWS. Puedes utilizar servicios como AWS Elastic Beanstalk, AWS ECS, o incluso AWS Lambda según la infraestructura que prefieras.

10. **Utilizar NestJS con Fastify:**
    - [x] Cambiar el servidor HTTP de Express a Fastify en NestJS para aprovechar las características de rendimiento adicionales de Fastify.

11. **Subir el Código a un Repositorio:**
    - [x] Subir tu código a un repositorio de código fuente, como GitHub o GitLab.

12. **Implementar Control de Excepciones:**
    - [x] Imple
