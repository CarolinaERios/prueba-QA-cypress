import { HomeMethods } from "../home/home.methods";
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
        RegistroElements.checkbox.politicaPrivacidad.click({force: true})
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

    static verificarBienvenido(){
        HomeMethods.verificarAlerta('Muchas gracias, . Tu cuenta en Safeguru ha sido activada.')
    }

    static verificarDatosIncorrectos(){
        HomeMethods.verificarAlerta('Incluye un signo "@" en la dirección de correo electrónico.')
    }

    static generarStringsRandom(length = 8){
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while(counter < length){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    static generarEmailRandom(){
        const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const longitud = 10;
        let email = '';
      
        for (let i = 0; i < longitud; i++) {
          const indice = Math.floor(Math.random() * caracteres.length);
          email += caracteres.charAt(indice);
        }
      
        email += '@example.com';
      
        return email;
    }
}