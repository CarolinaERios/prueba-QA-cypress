import { HomeMethods } from "../home/home.methods";
import { DetallesProductoElements } from "./detalles-producto.elements";

export class DetallesProductoMethods{
    static clickAñadirCesta(){
        DetallesProductoElements.buttons.añadirCesta.click({force: true})
    }
    static clickSumarProducto(){
        DetallesProductoElements.buttons.sumarProducto.click({force: true})
    }

    static clickVolverProductos(){
        DetallesProductoElements.buttons.volverProductos.click()
    }

    static verificacionPaginaDetalleProducto(){
        DetallesProductoElements.buttons.añadirCesta.should('be.visible')
    }

    static verificacionProductoAñadido(){
        HomeMethods.verificarAlerta('Resumen de pedido')
    }
}