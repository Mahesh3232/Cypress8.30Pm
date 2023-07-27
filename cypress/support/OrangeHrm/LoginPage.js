export class homepage{
    elements = {
        UsernameField:'[name="username"]',
        PassField: '[name="password"]',
        LoginBtn:'[type="submit"]',
        cartIcon:'[class="oxd-brand-banner"]',
        ForgotPass:'.orangehrm-login-forgot-header',
        SocialIcons:'[class="orangehrm-login-footer-sm"]',
        MainLogo:'[alt="company-branding"]'
    }

    login(Username,Password){
        cy.get(this.elements.UsernameField).type(Username)
        cy.get(this.elements.PassField).type(Password)
        cy.get(this.elements.LoginBtn).click()
    }

    AfterValidation(){
        cy.get(this.elements.cartIcon).should('be.visible')
    }

    ForgotPassword(){
        cy.get(this.elements.ForgotPass).click()
        cy.url().should('contain','requestPasswordResetCode')
        cy.get('.orangehrm-forgot-password-title').should('have.text','Reset Password')
    }

    SocialMediaIcons(){
        cy.get(this.elements.SocialIcons).children().should('have.length',4)
    }

    MainLogo(){
        cy.get(this.elements.MainLogo).should('be.visible')
    }
}
