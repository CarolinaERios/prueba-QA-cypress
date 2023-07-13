import { Logger } from "../../util/logger";
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
        Logger.subStep('Insertar email')
        this.insertEmail(email)
        Logger.subStep('Insertar contraseña')
        this.insertContrasena(contrasena)
        Logger.subStep('Click en el botón de iniciar sesión')
        this.clickIniciarSesionButton()
    }
}