import { TramitarCompraElements } from "./tramitar-compra.elements";

export class TramitarCompraMethods{
    static insertEmail(email){
        TramitarCompraElements.cliente.email.invoke('val', email)
    }

    static pulsarContinuar(){
        TramitarCompraElements.cliente.continuar.click()
    }

    static insertContrasena(contrasena){
        TramitarCompraElements.cliente.contrasena.invoke('val', contrasena)
    }

    static pulsarIniciarSesion(){
        TramitarCompraElements.cliente.iniciarSesion.click()
    }

    static insertNombreDireccion(direccion){
        TramitarCompraElements.envio.nombreDireccion.invoke('val', direccion)
    }

    static insertNombre(nombre){
        TramitarCompraElements.envio.nombre.invoke('val', nombre)
    }

    static inserApellidos(apellidos){
        TramitarCompraElements.envio.apellidos.invoke('val', apellidos)
    }

    static insertNombreYNumeroVia(nombreVia){
        TramitarCompraElements.envio.nombreYNumeroVia.invoke('val', nombreVia)
    }

    static insertEdificioPiso(edificio){
        TramitarCompraElements.envio.edificioPiso.invoke('val', edificio)
    }

    static inserCiudad(ciudad){
        TramitarCompraElements.envio.ciudad.invoke('val', ciudad)
    }

    static insertProvincia(provincia){
        TramitarCompraElements.envio.provincia.invoke('val', provincia)
    }

    static insertCodigoPostal(codigo){
        TramitarCompraElements.envio.codigoPostal.invoke('val', codigo)
    }

    static insertTelefono(telefono){
        TramitarCompraElements.envio.telefono.invoke('val', telefono)
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
        TramitarCompraElements.pago.numeroTarjeta.invoke('val', tarjeta)
    }

    static insertMesYAño(mesAño){
        TramitarCompraElements.pago.mesAño.invoke('val', mesAño)
    }

    static insertCVC(cvc){
        TramitarCompraElements.pago.cvc.invoke('val', cvc)
    }

    static clickAceptarTerminos(){
        TramitarCompraElements.pago.aceptarTerminos.click()
    }

    static pulsarPagar(){
        TramitarCompraElements.pago.pagar.click()
    }

    static insertarInformacionEnvio(data){
        this.insertNombreDireccion(data.direccion)
        this.insertNombre(data.nombre)
        this.inserApellidos(data.apellidos)
        this.insertNombreYNumeroVia(data.nombreVia)
        this.insertEdificioPiso(data.edificio)
        this.inserCiudad(data.ciudad)
        this.insertProvincia(data.provincia)
        this.insertCodigoPostal(data.codigo)
        this.insertTelefono(data.telefono)
        this.pulsarGuardar

    }

    static insertInformacionPago(){
        this.clickTransferenciaBancaria
        this.clickAceptarTerminos
        this.pulsarPagar
    }
}