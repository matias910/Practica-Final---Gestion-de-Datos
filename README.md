# Práctica Final — Sistemas de Gestión de Datos: Torneo de Fútbol

**Samuel Valencia – Matias Zapata – Miguel Angel Jimenez**

Sistemas de Gestión de Datos  
Escuela de Ciencias Aplicadas e Ingeniería

Docente: Bibiana Maria Rodriguez

---

## Descripción

Aplicación web fullstack para la gestión de un torneo de fútbol. Permite administrar equipos, partidos y datos relacionados mediante una interfaz web conectada a un backend en Node.js y una base de datos relacional. El proyecto incluye un frontend desarrollado con JavaScript, HTML y CSS usando React Router DOM para la navegación, y un pipeline de integración continua configurado con GitHub Actions.

---

## Objetivo

Desarrollar un sistema completo de gestión de datos aplicando los conceptos de bases de datos relacionales, desarrollo de APIs REST y construcción de interfaces web, integrando las tres capas en una solución funcional para la administración de un torneo de fútbol.

---

## Estructura del Proyecto

```
Practica-Final---Gestion-de-Datos/
├── .github/
│   └── workflows/          # Configuración de CI/CD con GitHub Actions
├── Torneo-Futbol/          # Frontend de la aplicación (JavaScript, HTML, CSS)
├── backend/                # Servidor Node.js — lógica de negocio y API REST
├── database/               # Scripts SQL para creación e inicialización de la BD
├── package.json            # Dependencias del proyecto
└── package-lock.json
```

---

## Tecnologías Utilizadas

| Capa | Tecnología |
|------|-----------|
| Frontend | JavaScript, HTML, CSS, React Router DOM |
| Backend | Node.js |
| Base de datos | SQL |
| CI/CD | GitHub Actions |

---

## Compilación y Ejecución

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18 o superior
- Gestor de base de datos compatible con los scripts SQL incluidos (MySQL / PostgreSQL)
- npm

### 1. Clonar el repositorio

```bash
git clone https://github.com/matias910/Practica-Final---Gestion-de-Datos.git
cd Practica-Final---Gestion-de-Datos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar la base de datos

Ejecutar los scripts de la carpeta `/database` en tu gestor de base de datos para crear las tablas e insertar los datos iniciales.

```bash
# Ejemplo con MySQL:
mysql -u usuario -p nombre_base_de_datos < database/script.sql
```

### 4. Iniciar el backend

```bash
cd backend
node index.js
```

### 5. Iniciar el frontend

```bash
cd Torneo-Futbol
npm start
```

Una vez levantados ambos servicios, accede a la aplicación en `http://localhost:3000`.

---

## Funcionalidades

Desde la interfaz web es posible:

- Registrar y gestionar equipos participantes del torneo
- Cargar y consultar resultados de partidos
- Visualizar tablas de posiciones y estadísticas
- Navegar entre secciones mediante React Router DOM

---

## CI/CD

El repositorio cuenta con un flujo de integración continua en `.github/workflows/` que automatiza la validación del proyecto ante cada push o pull request a la rama principal.

