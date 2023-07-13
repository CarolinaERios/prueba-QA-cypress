import { CarritoElements } from "./carrito.elements";

export class CarritoMethods{
    static tramitarPedico() {
        CarritoElements.buttons.tramitarCompra.click()
    }
    static clickEliminar(nombreProducto){
        CarritoElements.links.eliminarProducto(nombreProducto).click({force: true});
    }
}