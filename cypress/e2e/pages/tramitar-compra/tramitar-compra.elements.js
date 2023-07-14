export class TramitarCompraElements{
    static get cliente(){
        return{
            get email(){
                return cy.get('div.sc-fvbgbd input')
            },
            get continuar(){
                return cy.get('div.sc-heFykY button')
            },
            get contrasena(){
                return cy.get('div.sc-fvbgbd input')
            },
            get iniciarSesion(){
                return cy.get('button.continue-btn')
            }
        }
    }

    static get envio(){
        return{
            get direccion(){
                return cy.get('input[type="select"]').eq(0)
            },
            get nombreDireccion(){
                return cy.get('label:contains("Nombre de dirección")')
            },
            get nombre(){
                return cy.get('label:contains("Nombre")')
            },
            get apellidos(){
                return cy.get('label:contains("Apellidos")')
            },
            get nombreYNumeroVia(){
                return cy.get('label:contains("Nombre y número de vía")')
            },
            get edificioPiso(){
                return cy.get('label:contains("Apartamento, suite, unidad, edificio o piso")')
            },
            get ciudad(){
                return cy.get('label:contains("Ciudad")')
            },
            get provincia(){
                return cy.get('label:contains("Provincia")')
            },
            get codigoPostal(){
                return cy.get('label:contains("Código postal")')
            },
            get telefono(){
                return cy.get('input[type="phone"]')
            },
            get guardar(){
                return cy.get('button.gtm-submit')
            }
        }
    }

    static get pago(){
        return{
            get transferenciaBancaria(){
                return cy.get('input[value="banktransfer"]')
            },
            get pagoConTarjeta(){
                return cy.get('input[value="card"]')
            },
            get payPal(){
                return cy.get('input[value="paypal"]')
            },
            get numeroTarjeta(){
                return cy.get('span[aria-label="Número de la tarjeta de crédito o débito"]')
            },
            get mesAño(){
                return cy.get('span[aria-label="Fecha de caducidad de la tarjeta de crédito o débito"]')
            },
            get cvc(){
                return cy.get('span[aria-label="CVC/CVV de la tarjeta de crédito o débito"]')
            },
            get aceptarTerminos(){
                return cy.get('div.linkColor span')
            },
            get pagar(){
                return cy.get('button[id="payment-button"] div')
            }
        }
    }
}