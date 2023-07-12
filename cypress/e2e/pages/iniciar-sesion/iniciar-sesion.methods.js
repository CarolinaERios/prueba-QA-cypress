import { IniciarSesionElements } from "./iniciar-sesion.elements";

export class IniciarSesionMethods{
    static insertEmail(email){
        IniciarSesionElements.inputs.email.type(email)
    }

    static insertContrasena(contrasena){
        IniciarSesionElements.inputs.contrasena.type(contrasena)
    }

    static clickIniciarSesionButton(){
        IniciarSesionElements.button.iniciarSesion.click()
    }

    static iniciarSesion(email, contrasena){
        this.insertEmail(email)
        this.insertContrasena(contrasena)
        this.clickIniciarSesionButton()
    }
}