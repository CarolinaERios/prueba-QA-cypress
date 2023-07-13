export class RegistroElements{
    static get inputs(){
        return{
            get nombre(){
                return cy.get('input[class="sc-jTjUTQ dDCLKL"]').eq(0)
            },
            get apellido(){
                return cy.get('div[class="sc-bTTELM iAqfve"]').eq(1)
            },
            get email(){
                return cy.get('input[type="email"]').eq(0)
            },
            get contrasena(){
                return cy.get('input[type="password"]')
            }
        }
    }

    static get checkbox(){
        return{
            get soyEmpresa(){
                return cy.contains('span', 'Soy empresa')
            },
            get politicaPrivacidad(){
                return cy.get('div.sc-hQrevV span').eq(0)
            }
        }
    }

    static get links(){
        return{
            get privacidad(){
                return cy.get('a[href="https://safeguru.com/politica-de-privacidad"]')
            },
            get politica(){
                return cy.get('a[href="politica-de-privacidad"]')
            },
            get info(){
                return cy.get('a[href="mailto:info@safeguru.com"]')
            },
            get numeroTelefono(){
                return cy.get('a[title*="tel:+"]')
            },
            get iniciaSesion(){
                return cy.contains('h3', '¿Ya tienes una cuenta? ¡Inicia sesión!')
            }
        }
    }

    static get button(){
        return{
            get continuar(){
                return cy.get('button[type="submit"] div').eq(0)
            },
            get continuarRegistrado(){
                return cy.get('div.sc-dDPqvT button')
            }
        }
    }

    static get verificacion(){
        return{
            get verificar(){
                return cy.contains('p', 'Se ha iniciado la sesión. Bienvenid@ de vuelta!').should("be.visible")
            }
        }
    }

    //cy.contains('p', 'Se ha iniciado la sesión. Bienvenid@ de vuelta!')
}