export class IniciarSesionElements{
    static get inputs(){
        return{
            get email(){
               return cy.get('input[type="email"]').eq(0)
            },
            get contrasena(){
              return cy.get('input[type="password"]')
            }
        }
    }

    static get button(){
        return{
            get iniciarSesion(){
                return cy.get('button[type="submit"] div').eq(0)
            }
        }
    }

    static get links(){
        return{
            get contrasenaOlvidada(){
                return cy.contains('p', '¿Has olvidado tu contraseña?')
            },
            get registrate(){
                return cy.contains('h3', '¿No tienes una cuenta? ¡Regístrate!')
            }
        }
    }
}