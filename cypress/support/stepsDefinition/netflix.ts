import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps";
import {netflixpage} from "../pageObject/netflixPage";
import {Usuarios} from "../config/Usuarios";

var usuario = new Usuarios();
const netflix = new netflixpage()

Given('el usuario está en la página de inicio de Netflix',function (){
    netflix.goToUrl('https://www.netflix.com/')
})

When('hace clic en "Iniciar sesión"',function (){
    netflix.clickInTheButtonLogIn()
})

And('ingresa su nombre de usuario',function (){
    //netflix.goToClickFielEmail()
    netflix.writeInFieldEmail(usuario.userLogin) //encriptar
})

And('ingresa su contraseña',function (){
    //netflix.goToClickFielPassword()
    netflix.writeInFielPassword(usuario.passwordLogin) //encriptar
    cy.wait(3000)
})

And('hace clic en "Iniciar sesión" dentro de Netflix',function (){
    netflix.goToClickInButtonLogInOfLogIn()
})

And('selecciona un perfil de usuario',function () {
    netflix.goToClickInTheProfileUsers()
})

And('hace clic en "Películas"',function (){
    cy.wait(3000)
    netflix.goToClickInButtonFilm()
})

And('hace clic en "Géneros"',function (){
    netflix.goToClickInTheButtonGenders()
})

And('selecciona el género "Terror"',function (){
    netflix.goToClickInTheButtonTerror()
})

And('selecciona una pelicula',function (){
    netflix.goToClickInTheFilm() ///campo opcional
})

And('hace clic en "Reproducir"', function () {
    netflix.goToClickInTheButtonPlay()
})

Then('la película se reproduce', function () {
    netflix.seeValideFilm()
})

