import {classPage} from "./selectPage";

export class netflixpage extends classPage{

    constructor() {
        const elements ={
            logInFiel: '#signIn',
            email: '#\\:r0\\:',
            password: '#\\:r3\\:',
            profile: ':nth-child(1) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon',
            logInButton: '.default-ltr-cache-62lxnw',
            buttonFilm: '.tabbed-primary-navigation > :nth-child(4) > a',
            buttonGenders: '.label',
            buttonTerror: ':nth-child(3) > :nth-child(7) > .sub-menu-link',
            film: '#title-card-2-0 > .ptrack-content > .slider-refocus > .boxart-size-16x9 > .boxart-image',
            buttonPlay: '#appMountPoint > div > div > div:nth-child(1) > div.focus-trap-wrapper.previewModal--wrapper.detail-modal.has-smaller-buttons > div > div.previewModal--player_container.detail-modal.has-smaller-buttons > div:nth-child(3) > div > div.previewModal--player-titleTreatment-left.previewModal--player-titleTreatment.detail-modal.has-smaller-buttons.detail-modal.has-smaller-buttons > div.buttonControls--container > a.primary-button.playLink.isToolkit > button',
            playFilm: '.watch-video--back-container',
        }
        super(elements);
    }

    ////METODOS///

    public goToUrl(url: string){
        this.visit(url)
    }

    public seePage(screen: string){
        this.view(screen)
    }

    public goToClickFielEmail(){
        this.goToClick(this.elements.email)
    }

    public goToClickFielPassword(){
        this.goToClick(this.elements.password)
    }

    public goToClickInTheProfileUsers(){
        this.goToClick(this.elements.profile)
    }

    public clickInTheButtonLogIn(){
        this.goToClick(this.elements.logInFiel)
    }

    public writeInFieldEmail(text: string){
        this.write(this.elements.email, text)
    }

    public writeInFielPassword(text:string){
        this.write(this.elements.password, text)
    }

    public goToClickInButtonLogInOfLogIn(){
        this.goToClick(this.elements.logInButton)
    }

    public goToClickInButtonFilm(){
        this.goToClick(this.elements.buttonFilm)
    }

    public goToClickInTheButtonGenders(){
        this.goToClick(this.elements.buttonGenders)
    }

    public goToClickInTheButtonTerror(){
        this.goToClick(this.elements.buttonTerror)
    }

    public goToClickInTheFilm(){
        this.goToClickNotForce(this.elements.film)
    }

    public goToClickInTheButtonPlay(){
        this.goToClick(this.elements.buttonPlay)
    }

    public seeValideFilm(){
        this.seeValide(this.elements.playFilm)
    }
}