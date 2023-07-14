import { CarritoElements } from "./carrito.elements";

export class CarritoMethods{
    static tramitarPedico() {
        CarritoElements.buttons.tramitarCompra.click({force: true})
    }
    static clickEliminar(nombreProducto){
        CarritoElements.links.eliminarProducto(nombreProducto).click({force: true});
    }

    static verificarEstamosPaginaCarrito(){
        cy.url().should('include', 'https://safeguru.com/cart')
    }
}