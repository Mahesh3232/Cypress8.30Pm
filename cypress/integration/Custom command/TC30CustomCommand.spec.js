describe('Varify the login functionality', () => {

    beforeEach(()=>{
        cy.login('#user-name','#password','input[name="login-button"]','standard_user','secret_sauce')
        // Cypress.Commands.add('login', (emailField,PassField,submitButton,email, password) => { 
        //     cy.visit('https://www.saucedemo.com/')
        //     cy.get(emailField).type(email)
        //     cy.get(PassField).type(password)
        //     cy.get(submitButton).click()
        //  })
    })

    it('Verify the login functionality with valid credentials', () => {
        cy.get('.app_logo').should('be.visible') 
    })

    it('Verify the login functionality with valid credentials', () => {
        cy.get('.title').should('have.text', 'Products')
    })

    it('Verify the login functionality with valid credentials', () => {
        cy.url().should('contains', 'inventory')
    })
})

