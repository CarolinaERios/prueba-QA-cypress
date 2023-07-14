export class IniciarSesionData{
    static get usuarioValido(){
        return{
            email: "susana@yopmail.com",
            contrasena: "susana@yopmail.com"
        }
    }

    static get usuarioNoVaido(){
        return{
            email: "pepito@gmail.com",
            contrasena: "trucutru"
        }
    }
}