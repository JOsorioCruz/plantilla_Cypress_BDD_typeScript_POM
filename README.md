![img.png](cypress%2Ffixtures%2Fimg.png)
# Proyecto: Seleccionar una Película de Terror en Netflix

Este proyecto utiliza Cypress, Allure, TypeScript y el patrón de diseño Page Object Model (POM) para automatizar
la selección y reproducción de una película de terror en Netflix.

## Estructura del Proyecto

```
├── .idea
├── cypress
│ ├── e2e
│ │ ├── features
│ │ │ └── netflix.feature
│ │ ├── fixtures
│ │ └── support
│ │ └── config
│ │ └── Usuarios.ts
│ ├── pageObject
│ │ ├── interfaces.ts
│ │ ├── netflixPage.ts
│ │ └── selectPage.ts
│ └── stepsDefinition
│ ├── netflix.ts
│ ├── commands.ts
│ └── e2e.ts
├── node_modules
├── .gitignore
├── cucumber-html-report.js
├── cypress.config.ts
├── Ejecutables.md
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```


## Comandos para ejecutar en consola
Abre Cypress en modo interactivo
npm run cypress:open

Ejecuta las pruebas en modo headless.
npm run cypress:run

Limpia los reportes anteriores, ejecuta las pruebas y genera un nuevo reporte.
npm run test
