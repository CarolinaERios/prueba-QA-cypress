import { HomeData } from "../pages/home/home.data"
import { HomeMethods } from "../pages/home/home.methods"
import { IniciarSesionMethods } from "../pages/iniciar-sesion/iniciar-sesion.methods"
import { RegistroMethods } from "../pages/registro/registro.methods"
import { Logger } from "../util/logger"

const usuario = RegistroMethods.generarStringsRandom();
const contrasena = RegistroMethods.generarStringsRandom(10);
const email = RegistroMethods.generarEmailRandom();

describe(HomeData.testSuites.registroYLogin, () => {
    it('Registro de usuario valido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        cy.visit("https://safeguru.com/");
        cy.clearCookies()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en el icono de "Cuenta"')
        HomeMethods.clickCuenta();

        Logger.stepNumber(3)
        Logger.step('Hacer clic en "¿No tienes una cuenta? ¡Registrate!"')
        IniciarSesionMethods.clickRegistrarse();

        Logger.stepNumber(4)
        Logger.step('Completar todos los campos obligatorios con información válida')
        RegistroMethods.insertNombre(usuario)
        RegistroMethods.insertApellido(usuario)
        RegistroMethods.insertEmail(email)
        RegistroMethods.insertContrasena(contrasena)

        Logger.stepNumber(5)
        Logger.step('Aceptar política de privacidad')
        RegistroMethods.marcarHeLeido();

        Logger.stepNumber(6)
        Logger.step('Pulsar botón "Continuar"')
        RegistroMethods.clickContinuarButton();
        RegistroMethods.clickContinuarButtonRegistrado();
        
    })

})