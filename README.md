# API REST de Tracks

Bienvenido al proyecto API REST de Tracks. Este proyecto es una API que desarrolle para practicar conceptos de Node.js, Express, JWT, Mongo, Swagger y testing abarcando desde la configuración inicial hasta la implementación de características avanzadas. A continuación, se detalla cómo configurar el entorno y ejecutar la aplicación.

## Contenido

1. [Configuración del Entorno](#configuración-del-entorno)
2. [Iniciando el Proyecto](#iniciando-el-proyecto)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Funcionalidades Principales](#funcionalidades-principales)
5. [Documentación y Validación](#documentación-y-validación)
6. [Seguridad y Trazabilidad](#seguridad-y-trazabilidad)

## Configuración del Entorno

- Instala [Node](https://nodejs.org/) en Windows.
- Instala [Visual Studio Code](https://code.visualstudio.com/) en Windows.
- Instala [Git](https://git-scm.com/) en Windows.
- Crea una base de datos en [Mongo Atlas](https://www.mongodb.com/cloud/atlas) gratis.
- Configura el firewall para permitir cualquier IP en Mongo Atlas.
- Obten la URL de conexión (DB_URI) de MongoDB.

## Iniciando el Proyecto

1. Instala las dependencias: `npm install`.
2. Inicia el proyecto: `npm start` para producción o `npm run dev` para desarrollo.

## Estructura del Proyecto

- **src**: Código fuente de la aplicación.
  - **config**: Configuraciones, variables de entorno.
  - **controllers**: Controladores para gestionar las rutas.
  - **coverage**: Informes de cobertura de pruebas.
  - **doc**: Documentación del proyecto.
  - **jest**: Pruebas unitarias con Jest.
  - **models**: Definiciones de modelos para MongoDB.
  - **routes**: Rutas dinámicas en Express.
  - **storage**: Almacenamiento de archivos y recursos.
  - **utils**: Utilidades y funciones auxiliares.
  - **validators**: Validadores para las solicitudes y datos de la aplicación.

## Funcionalidades Principales

- Gestión de tracks y usuarios.
- Autenticación con JSON Web Tokens (JWT).
- Validación de datos y manejo de errores.
- Implementación de middleware y soft delete.
- Documentación con Swagger.

## Documentación y Validación

- Utilización de Postman para la documentación y validación de la API.
- Creación de validadores para las solicitudes POST.
- Implementación de middleware para la validación.

## Seguridad y Trazabilidad

- Protección de rutas con roles y permisos.
- Manejo de errores con Slack.
- Uso de JSON Web Tokens (JWT) para autenticación.


---

¡Gracias por revisar este README! Para obtener más detalles, explore el código fuente y las instrucciones de cada sección. Cualquier comentario o sugerencia es bienvenido.
