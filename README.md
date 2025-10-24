# 📚 Virtual Library App

Una aplicación web para gestionar tu biblioteca personal virtual, donde puedes descubrir, reseñar y organizar tus libros favoritos.

## 🚀 Características

- **Catálogo de libros** integrado con OpenLibrary API
- **Sistema de usuarios** con autenticación
- **Reseñas y calificaciones** de libros
- **Listas personalizadas** (favoritos, "leer después")
- **Historial de lectura** con seguimiento de progreso
- **Interfaz moderna** construida con React

## 🛠️ Tecnologías

### Backend
- **Node.js** con Express.js
- **MySQL** como base de datos
- **OpenLibrary API** para información de libros
- **JWT** para autenticación (próximamente)

### Frontend
- **React.js** (próximamente)
- **CSS moderno** con diseño responsivo

### Despliegue
- **Docker** para contenedores
- **nginx** como proxy reverso

## 📦 Instalación

1. Clona el repositorio
```bash
git clone https://github.com/IsmaCar/virtual-library-app.git
cd virtual-library-app
```

2. Instala las dependencias del backend
```bash
cd backend
pnpm install
```

3. Configura las variables de entorno
```bash
cp .env.example .env
# Edita el archivo .env con tus credenciales de MySQL
```

4. Crea la base de datos
```bash
node scripts/setup-db.js
```

5. Inicia el servidor de desarrollo
```bash
pnpm run dev
```

## 🎯 Estado del Proyecto

Este proyecto está en **desarrollo activo** como parte de mi aprendizaje de desarrollo web full-stack.

### ✅ Completado
- [x] Configuración del servidor Express
- [x] Conexión a base de datos MySQL
- [x] Estructura de tablas y relaciones
- [x] Script de configuración de BD

### 🔄 En Progreso
- [ ] Modelos de datos
- [ ] Sistema de rutas API
- [ ] Controladores de negocio
- [ ] Autenticación de usuarios

### 📋 Próximamente
- [ ] Frontend con React
- [ ] Integración con OpenLibrary API
- [ ] Sistema de autenticación JWT
- [ ] Dockerización completa

## 📧 Contacto

**Ismael Carballo Martín** - Desarrollador en formación

---

*Proyecto educativo desarrollado para aprender tecnologías web modernas.*
