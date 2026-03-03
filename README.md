# GitHub Repository Finder

Aplicación hecha en React + TypeScript que permite buscar los repositorios públicos de un usuario de GitHub y mostrar información básica como nombre, descripción, lenguaje y estrellas.

## Tecnologías

- React
- TypeScript
- TailwindCSS
- Zustand

---

## Arquitectura

Organicé el proyecto usando una estructura basada en **arquitectura hexagonal**, separando responsabilidades en tres capas principales

### API
Aquí está la comunicación directa con GitHub
Solo se encarga de hacer la petición HTTP y devolver la respuesta

### Domain
Contiene:
- Models
- Use cases
La idea fue mantener la lógica separada de la UI.

### Presentation
Incluye:
- Componentes
- Página principal
- Hooks personalizados
- Integración con Zustand para el historial de búsquedas



## Ejecutar el proyecto

```bash
npm install
npm run dev