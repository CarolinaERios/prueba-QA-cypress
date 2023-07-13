export class Logger{
    static stepNumber(numero){
        const text = `Step # ${numero}`
        cy.log(text)
        cy.allure().step(text)
    }

    static step(descripcion){
        const text = `Step - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }

    static verificacion(descripcion){
        const text = `Verificacion # ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep(descripcion){
        const text = `SubStep - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerificacion(descripcion){
        const text = `SubVerificacion - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }
}