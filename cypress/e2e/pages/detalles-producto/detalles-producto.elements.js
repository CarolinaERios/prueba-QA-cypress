export class DetallesProductoElements{
    static get buttons(){
        return{
            get añadirCesta(){
                return cy.get('button.btn--add-to-bag')
                
            },
            get volverProductos(){
                return cy.get('button[title="Go Back"]')
            },
            get sumarProducto(){
                return cy.get('button[name="Add unit"] div')
            },
            get restarProducto(){
                return cy.get('button[name="delete unit"] div')
            }
        }
    }
    
}