![img.png](cypress%2Ffixtures%2Fimg.png)
# Comandos Ejecutables en `package.json`

Este archivo proporciona una descripción de los comandos definidos en la sección `scripts` del archivo `package.json`.

## Comandos

**cypress open**: Abre Cypress Test Runner en modo interactivo, permitiendo la ejecución y depuración de pruebas manualmente.
cypress:run
```sh
cypress open
```

**cypress run**: Ejecuta las pruebas de Cypress en modo headless (sin interfaz gráfica), generando resultados en la consola y guardando reportes.
report
```sh
cypress run
```


**node cucumber-html-report.js**: Abre el archivo index.html en el directorio de reportes usando xdg-open, que es compatible con muchos entornos de Linux.
report:open
```sh
node cucumber-html-report.js
```


**open ./cypress/reports/index.html**: Abre el archivo index.html en el directorio de reportes usando open, que es compatible con macOS.
report:clean
```sh
open ./cypress/reports/index.html
```
**npm run report && npm run report:open**: Genera el reporte HTML ejecutando el script report y luego abre el archivo index.html usando el comando report:open (de acuerdo con el sistema operativo).
```sh
npm run report && npm run report:open
```


**rm -rf cypress/reports/**: Elimina todos los archivos en el directorio cypress/reports, limpiando los reportes generados.
report:delete
```sh
rm -rf cypress/reports/*
```

**rm -rf cypress/reports/**: Elimina el directorio cypress/reports y todo su contenido, eliminando el directorio de reportes en su totalidad.
report:generate:open
```sh
rm -rf cypress/reports/
```

