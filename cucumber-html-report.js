const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/cucumber-json",
    reportPath: "cypress/reports",
    displayDuration: true,
    durationInMS: true,
    pageTitle: "plantilla_cypress_BDD_POM_TypeScript",
    reportName: "Reporte de pruebas",
    metadata: {
        browser: {
            name: "chrome",
        },
        device: "Pruebas a nivel local",
        platform: {
            name: "Linux",
        }
    }
});