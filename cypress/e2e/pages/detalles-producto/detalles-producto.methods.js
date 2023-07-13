import { DetallesProductoElements } from "./detalles-producto.elements";

export class DetallesProductoMethods{
    static clickAñadirCesta(){
        DetallesProductoElements.buttons.añadirCesta.click()
    }

    static clickVolverProductos(){
        DetallesProductoElements.buttons.volverProductos.click()
    }
}