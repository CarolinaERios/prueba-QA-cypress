import { Logger } from "../../util/logger";
import { HomeMethods } from "../home/home.methods";
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

    static clickRegistrarse(){
        IniciarSesionElements.links.registrate.click()
    }

    static verificarInicioSesion(){
        HomeMethods.verificarAlerta('Se ha iniciado la sesión. Bienvenid@ de vuelta!')
    }

    static verificarError(){
        HomeMethods.verificarAlerta('No existe cuenta para este correo, porfavor comprueba tus datos e inténtalo de nuevo.')
    }
}