import { RegistroElements } from "./registro.elements";

export class RegistroMethods{
    static insertNombre(nombre){
        RegistroElements.inputs.nombre.type(nombre)
    }

    static insertApellido(apellido){
        RegistroElements.inputs.apellido.type(apellido)
    }

    static insertEmail(email){
        RegistroElements.inputs.email.type(email)
    }

    static insertContrasena(contrasena){
        RegistroElements.inputs.contrasena.type(contrasena)
    }

    static marcarSoyEmpresa(){
        RegistroElements.checkbox.soyEmpresa.check()
    }

    static marcarHeLeido(){
        RegistroElements.checkbox.politicaPrivacidad.click({ multiple: true })
    }

    static clickContinuarButton(){
        RegistroElements.button.continuar.click({ multiple: true })
    }

    static clickContinuarButtonRegistrado(){
        RegistroElements.button.continuarRegistrado.click({ multiple: true })
    }

    static registrarse(nombre, apellido, email, contrasena){
        this.insertNombre(nombre);
        this.insertApellido(apellido);
        this.insertEmail(email);
        this.insertContrasena(contrasena);
        this.marcarHeLeido();
        this.clickContinuarButton();
        this.clickContinuarButtonRegistrado();
    }
}