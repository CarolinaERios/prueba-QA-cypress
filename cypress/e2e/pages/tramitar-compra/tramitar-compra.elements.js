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
                return cy.get('div.full-width input')
            },
            get nombre(){
                return cy.get('div.half-width input').eq(0)
            },
            get apellidos(){
                return cy.get('input.ijFrhP').eq(1)
            },
            get nombreYNumeroVia(){
                return cy.get('input.ijFrhP').eq(1)
            },
            get edificioPiso(){
                return cy.get('input.ijFrhP').eq(1)
            },
            get ciudad(){
                return cy.get('input.ijFrhP').eq(1)
            },
            get provincia(){
                return cy.get('input.ijFrhP').eq(1)
            },
            get codigoPostal(){
                return cy.get('input.ijFrhP').eq(1)
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
                return cy.get('input[name="cardnumber"]')
            },
            get mesAño(){
                return cy.get('input[name="exp-date"]')
            },
            get cvc(){
                return cy.get('input[name="cvc"]')
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