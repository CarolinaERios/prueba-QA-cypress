import { CarritoMethods } from "../pages/carrito/carrito.methods";
import { DetallesProductoMethods } from "../pages/detalles-producto/detalles-producto.methods";
import { HomeData } from "../pages/home/home.data";
import { HomeMethods } from "../pages/home/home.methods";
import { IniciarSesionData } from "../pages/iniciar-sesion/iniciar-sesion.data";
import { IniciarSesionMethods } from "../pages/iniciar-sesion/iniciar-sesion.methods";
import { TramitarCompraData } from "../pages/tramitar-compra/tramitar-compra.data";
import { TramitarCompraMethods } from "../pages/tramitar-compra/tramitar-compra.methods";
import { Logger } from "../util/logger";

const usuario = IniciarSesionData.usuarioValido;
const producto = 'Base para poste de seguridad'

describe(HomeData.testSuites.catalogoYCompras, () => {
    it('Navegación por categorías', () => {
        
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navegar a Safeguru')
        cy.visit("https://safeguru.com/");
        cy.clearCookies()
        Logger.subStep('Click en el icono de Cuenta')
        HomeMethods.clickCuenta();
        Logger.subStep('Rellenar campos y pulsar botón de inicio de sesión')
        IniciarSesionMethods.iniciarSesion(usuario.email, usuario.contrasena)

        Logger.stepNumber(2)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.abrirMenu();
        HomeMethods.abrirSeguridadIndustrial();
        Logger.verificacion('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        cy.wait(10000)
        HomeMethods.verificacionListadoProductos('Base para poste de seguridad')
        HomeMethods.verificacionListadoProductos('Alarm Bar A-Safe')
        
    })

    it('Agregar producto al carrito', () => {
        
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navegar a Safeguru')
        cy.visit("https://safeguru.com/");
        cy.clearCookies()
        Logger.subStep('Click en el icono de Cuenta')
        HomeMethods.clickCuenta();
        Logger.subStep('Rellenar campos y pulsar botón de inicio de sesión')
        IniciarSesionMethods.iniciarSesion(usuario.email, usuario.contrasena)

        Logger.stepNumber(2)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.abrirMenu();
        HomeMethods.abrirSeguridadIndustrial();

        Logger.stepNumber(3)
        Logger.step('Hacer click en un producto específico')
        HomeMethods.clickLinkProducto(producto)

        Logger.stepNumber(5)
        Logger.verificacion('Verificar que se muestra la página de detalles del producto')
        DetallesProductoMethods.verificacionPaginaDetalleProducto();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Añadir a la cesta"')
        DetallesProductoMethods.clickAñadirCesta();
        DetallesProductoMethods.clickSumarProducto();
        DetallesProductoMethods.clickAñadirCesta();

        Logger.stepNumber(7)
        Logger.verificacion('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        DetallesProductoMethods.verificacionProductoAñadido();
       
        
    })

    it('Realizar una compra', () => {
        
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navegar a Safeguru')
        cy.visit("https://safeguru.com/");
        cy.clearCookies()
        Logger.subStep('Click en el icono de Cuenta')
        HomeMethods.clickCuenta();
        Logger.subStep('Rellenar campos y pulsar botón de inicio de sesión')
        IniciarSesionMethods.iniciarSesion(usuario.email, usuario.contrasena)

        Logger.stepNumber(2)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.abrirMenu();
        HomeMethods.abrirSeguridadIndustrial();

        Logger.stepNumber(3)
        Logger.step('Hacer click en un producto específico')
        HomeMethods.clickLinkProducto(producto)

        Logger.stepNumber(5)
        Logger.verificacion('Verificar que se muestra la página de detalles del producto')
        DetallesProductoMethods.verificacionPaginaDetalleProducto();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Añadir a la cesta"')
        DetallesProductoMethods.clickAñadirCesta();
        DetallesProductoMethods.clickSumarProducto();
        DetallesProductoMethods.clickAñadirCesta();

        Logger.stepNumber(7)
        Logger.verificacion('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        DetallesProductoMethods.verificacionProductoAñadido();

        Logger.stepNumber(8)
        Logger.step('Hacer clic en el icono del carrito en la barra de navegación')
        HomeMethods.clickCarrito();

        Logger.stepNumber(9)
        Logger.verificacion('Verificar que se muestra la página del carrito de compras')
        CarritoMethods.verificarEstamosPaginaCarrito();

        Logger.stepNumber(10)
        Logger.step('Hacer clic en el botón "Tramitar compra"')
        CarritoMethods.tramitarPedico();

        Logger.stepNumber(11)
        Logger.step('Hacer clic en el botón "Tramitar compra"')
        TramitarCompraMethods.insertarInformacionEnvio(TramitarCompraData.info);
        TramitarCompraMethods.insertInformacionPago();
        
    })
})