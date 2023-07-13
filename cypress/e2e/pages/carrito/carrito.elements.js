export class CarritoElements{
    static get buttons(){
        return{
            get tramitarCompra(){
                return cy.get('div[type="button"] div')
            },
        }
    }

    static get links(){
        return{
            eliminarProducto(nombreProducto){
                return cy.contains('h3', nombreProducto).closest('article').find('button')
            }
        }
    }
}


