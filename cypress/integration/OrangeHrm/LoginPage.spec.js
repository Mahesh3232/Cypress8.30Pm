import { homepage } from '../../support/OrangeHrm/LoginPage'
describe('Validate the login Page',()=>{
    let home = new homepage()
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Validate login functionality with valid credentials',()=>{
        home.login('Admin','admin123')
        home.AfterValidation()
        // cy.get('#user-name').type('standard_user')
        // cy.get('#password').type('secret_sauce')
        // cy.get('#login-button').click()
    })

    it('Validate login functionality with invalid credentials',()=>{
        home.login('Admin','admin12345')
        cy.get('[class="oxd-alert oxd-alert--error"]').should('be.visible')
    })

    it.only('Verify the forgot password functionality',()=>{
        home.ForgotPassword()
    })

    it.only('Verify the social media icons on homepage',()=>{
        home.SocialMediaIcons()
    })
})