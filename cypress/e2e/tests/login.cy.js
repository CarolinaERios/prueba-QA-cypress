import { HomeData } from "../pages/home/home.data";
import { HomeMethods } from "../pages/home/home.methods";
import { IniciarSesionData } from "../pages/iniciar-sesion/iniciar-sesion.data";
import { IniciarSesionMethods } from "../pages/iniciar-sesion/iniciar-sesion.methods";
import { Logger } from "../util/logger";

describe(HomeData.testSuites.login, () =>{
    it('Inicio de sesión válido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        cy.visit("https://safeguru.com/");
        cy.clearCookies()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en el icono de "Cuenta"')
        HomeMethods.clickCuenta();

        Logger.stepNumber(3)
        Logger.step('Ingresar email y contraseña válidos')
        IniciarSesionMethods.insertEmail(IniciarSesionData.usuarioValido.email)
        IniciarSesionMethods.insertContrasena(IniciarSesionData.usuarioValido.contrasena)

        Logger.stepNumber(4)
        Logger.step('Click en botón de iniciar sesión')
        IniciarSesionMethods.clickIniciarSesionButton();
        Logger.verificacion('Verificar que se muestra mensaje de inicio de sesión correcto')
        IniciarSesionMethods.verificarInicioSesion();
    })

    it('Inicio de sesión inválido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        cy.visit("https://safeguru.com/");
        cy.clearCookies()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en el icono de "Cuenta"')
        HomeMethods.clickCuenta();

        Logger.stepNumber(3)
        Logger.step('Ingresar email y contraseña inválidos')
        IniciarSesionMethods.insertEmail(IniciarSesionData.usuarioNoVaido.email)
        IniciarSesionMethods.insertContrasena(IniciarSesionData.usuarioNoVaido.contrasena)

        Logger.stepNumber(4)
        Logger.step('Click en botón de iniciar sesión')
        IniciarSesionMethods.clickIniciarSesionButton();
        Logger.verificacion('Verificar que se muestra mensaje de inicio de sesión correcto')
        IniciarSesionMethods.verificarError();
    })
})