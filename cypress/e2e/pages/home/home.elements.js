import { HomeData } from "./home.data"

export class HomeElements{
    static get productosMenu(){
        return{
            get menu(){
                return cy.get('button[name="Menu"]')
            },
            get calzadoTrabajo(){
                return cy.get('a[href="https://safeguru.com/category/calzado-de-trabajo"] span').eq(0)
            },
            get ropaTrabajo(){
                return cy.get('a[href="https://safeguru.com/category/ropa-de-trabajo"] span').eq(0)
            },
            get proteccionOcular(){
                return cy.get('a[href="https://safeguru.com/category/proteccion-ocular"] span').eq(0)
            },
            get proteccionRespiratoria(){
                return cy.get('a[href="https://safeguru.com/category/proteccion-respiratoria"] span').eq(0)
            },
            get guantesTrabajo(){
                return cy.get('a[href="https://safeguru.com/category/guantes-de-trabajo"] span').eq(0)
            },
            get proteccionAuditiva(){
                return cy.get('a[href="https://safeguru.com/category/proteccion-auditiva"] span').eq(0)
            },
            get proteccionCabeza(){
                return cy.get('a[href="https://safeguru.com/category/proteccion-de-cabeza"] span').eq(0)
            },
            get protccionAltura(){
                return cy.get('a[href="https://safeguru.com/category/proteccion-en-altura"] span').eq(0)
            },
            get seguridadIndustrial(){
                return cy.get('a[href="https://safeguru.com/category/seguridad-industrial"] span').eq(0)
            },
            get senalizacion(){
                return cy.get('a[href="https://safeguru.com/category/senalizacion"] span').eq(0)
            }
        }
    }

    static producto(nombreProducto){
        return cy.get('div.link-wrapper').should('contain', nombreProducto)
    }

    static get iconos(){
        return{
            get cuenta(){
                return cy.get('a[title="Cuenta"]')
            },
            get carrito(){
                return cy.get('button[aria-label="Bag"]')
            }

        }
    }

    static get visit(){
        return{
            get visitarPagina(){
                return cy.visit(HomeData.url);
            }
        }
    }
    
    
}