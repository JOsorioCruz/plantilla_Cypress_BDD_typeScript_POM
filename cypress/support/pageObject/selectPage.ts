import {selectionElements} from "./interfaces";

export abstract class classPage {
    protected readonly elements: selectionElements

    protected constructor(elements: selectionElements) {
        this.elements=elements
    }

    protected visit(url: string){
        cy.visit(url)
    }

    protected view(screen: string){
        cy.viewport(<"macbook-16" | "macbook-15" | "macbook-13" | "macbook-11">screen)
    }

    protected write(selector:string, text:string){
        cy.get(selector).type(text)

    }

    protected goToClick(selector:string){
        cy.get(selector).click({ force: true })
    }

    protected goToClickNotForce(selector:string){
        cy.get(selector).click()
    }

    protected validateName(validate:string){
        cy.contains(validate)
    }

    protected toEnter(selector:string){
        cy.get(selector).type('{enter}')
    }

    protected toSelect(selector:string, text:string){
        cy.get(selector).select(text)
    }

    protected seeValide(selector:string){
        cy.get(selector).should('be.visible')
    }
}