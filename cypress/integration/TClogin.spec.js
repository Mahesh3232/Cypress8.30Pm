
//AAA ==> Action Arrange Assertions
describe('Varify the login functionality',()=>{
    it('Verify the login functionality with valid credentials',()=>{
        //Step 1 ==> Visit the Url
        cy.visit('https://www.saucedemo.com/')
        //Step 2 ==> Enter the userName
        cy.get('#user-name').type('standard_user')
        //Step 3 ==> Enter the Password
        cy.get('#password').type('secret_sauce')
        //Step 4 ==> Click on login Button
        cy.get('.submit-button').click()
        //Step 5 ==> Verify the sucessfull login 
        //Assertions
        //implicit assertions
        //Explicit assertions
        cy.url().should('contains','inventory')
        cy.get('.app_logo').should('be.visible')

    })
})

//<input id="user-name"></input>

//Formula
//tagname[attr = "Value"]
//input[id="user-name"]

//by id
//Use #
//#user-name

//by class
//Use .