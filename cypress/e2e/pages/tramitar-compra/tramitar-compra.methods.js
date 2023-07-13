import { TramitarCompraElements } from "./tramitar-compra.elements";

export class TramitarCompraMethods{
    static insertEmail(email){
        TramitarCompraElements.cliente.email.type(email)
    }

    static pulsarContinuar(){
        TramitarCompraElements.cliente.continuar.click()
    }

    static insertContrasena(contrasena){
        TramitarCompraElements.cliente.contrasena.type(contrasena)
    }

    static pulsarIniciarSesion(){
        TramitarCompraElements.cliente.iniciarSesion.click()
    }

    static insertNombreDireccion(direccion){
        TramitarCompraElements.envio.nombreDireccion.type(direccion)
    }

    static insertNombre(nombre){
        TramitarCompraElements.envio.nombre.type(nombre)
    }

    static inserApellidos(apellidos){
        TramitarCompraElements.envio.apellidos.type(apellidos)
    }

    static insertNombreYNumeroVia(nombreVia){
        TramitarCompraElements.envio.nombreYNumeroVia.type(nombreVia)
    }

    static insertEdificioPiso(edificio){
        TramitarCompraElements.envio.edificioPiso.type(edificio)
    }

    static inserCiudad(ciudad){
        TramitarCompraElements.envio.ciudad.type(ciudad)
    }

    static insertProvincia(provincia){
        TramitarCompraElements.envio.provincia.type(provincia)
    }

    static insertCodigoPostal(codigo){
        TramitarCompraElements.envio.codigoPostal.type(codigo)
    }

    static insertTelefono(telefono){
        TramitarCompraElements.envio.telefono.type(telefono)
    }

    static pulsarGuardar(){
        TramitarCompraElements.envio.guardar.click()
    }

    static clickTransferenciaBancaria(){
        TramitarCompraElements.pago.transferenciaBancaria.click()
    }

    static clickPagoConTarjeta(){
        TramitarCompraElements.pago.pagoConTarjeta.click()
    }

    static clickPayPal(){
        TramitarCompraElements.pago.payPal.click()
    }

    static insertNumeroTarjeta(tarjeta){
        TramitarCompraElements.pago.numeroTarjeta.type(tarjeta)
    }

    static insertMesYAño(mesAño){
        TramitarCompraElements.pago.mesAño.type(mesAño)
    }

    static insertCVC(cvc){
        TramitarCompraElements.pago.cvc.type(cvc)
    }

    static clickAceptarTerminos(){
        TramitarCompraElements.pago.aceptarTerminos.click()
    }

    static pulsarPagar(){
        TramitarCompraElements.pago.pagar.click()
    }
}