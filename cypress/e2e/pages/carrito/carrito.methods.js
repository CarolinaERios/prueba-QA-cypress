import { CarritoElements } from "./carrito.elements";

export class CarritoMethods{
    static clickEliminar(nombreProducto){
        CarritoElements.links.eliminarProducto(nombreProducto).click({force: true});
    }
}