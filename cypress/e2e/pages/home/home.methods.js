import { HomeData } from "./home.data";
import { HomeElements } from "./home.elements";

export class HomeMethods{
    static navegarASafeguru(){
        HomeElements.visit.visitarPagina();
    }
    static abrirMenu(){
        HomeElements.productosMenu.menu.click();
    }

    static abrirCalzadoTrabajo(){
        HomeElements.productosMenu.calzadoTrabajo.click();
    }

    static abrirRopaTrabajo(){
        HomeElements.productosMenu.ropaTrabajo.click();
    }

    static abrirProteccionOcular(){
        HomeElements.productosMenu.proteccionOcular.click();
    }

    static abrirProteccionRespiratoria(){
        HomeElements.productosMenu.proteccionRespiratoria.click();
    }

    static abrirGuantesTrabajo(){
        HomeElements.productosMenu.guantesTrabajo.click();
    }

    static abrirProteccionAuditiva(){
        HomeElements.productosMenu.proteccionAuditiva.click();
    }

    static abrirProteccionCabeza(){
        HomeElements.productosMenu.proteccionCabeza.click();
    }

    static abrirProteccionAltura(){
        HomeElements.productosMenu.ProteccionAltura.click();
    }

    static abrirSeguridadIndustrial(){
        HomeElements.productosMenu.seguridadIndustrial.click();
    }

    static abrirSenalizacion(){
        HomeElements.productosMenu.senalizacion.click();
    }

    static clickLinkProducto(nombreProducto){
        HomeElements.producto(nombreProducto).click({ multiple: true });
    }

    static clickCuenta(){
        HomeElements.iconos.cuenta.click()
    }

    static clickCarrito(){
        HomeElements.iconos.carrito.click()
    }

    static verificarAlerta(mensajeEsperado){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Muchas gracias, . Tu cuenta en Safeguru ha sido activada.`)
        })
    }
}