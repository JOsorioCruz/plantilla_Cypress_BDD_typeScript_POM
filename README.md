![img.png](cypress%2Ffixtures%2Fimg.png)
# Proyecto: Seleccionar una Película de Terror en Netflix

Este proyecto utiliza Cypress, Allure, TypeScript y el patrón de diseño Page Object Model (POM) para automatizar
la selección y reproducción de una película de terror en Netflix.

## Estructura del Proyecto

### 1. Estructura de Archivos

- **pageObject**
  - NetflixPage.ts: Clase que define los elementos y métodos para interactuar con la página de Netflix.
- **interfaces**
  - SelectionElements.ts: Define la interfaz para los elementos de selección.
- **e2e**
  - SeleccionarPelicula.feature: Archivo de características en Gherkin para definir el escenario de prueba.
  - SeleccionarPelicula.ts: Implementación de los pasos de Gherkin utilizando Cypress y Page Objects.
- **config**
  - Usuarios.ts: Archivo que contiene las credenciales del usuario.
## Comandos para ejecutar en consola
Abre Cypress en modo interactivo

bash
npm run cypress:open


Ejecuta las pruebas en modo headless.

bash
npm run cypress:run

Limpia los reportes anteriores, ejecuta las pruebas y genera un nuevo reporte.

bash
npm run test
