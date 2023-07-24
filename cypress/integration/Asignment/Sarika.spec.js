describe('check the functionality of cashify.in website', () => {
    Cypress.on('uncaught:exception', function () {
        return false
    })

    it('after some steps go to the login page', () => {
        cy.visit("https://www.cashify.in/sell-old-mobile-phone")
        cy.get('[href="/sell-old-mobile-phone"] >div >span').scrollIntoView().click()
        cy.wait(1000)
        cy.get('[href="/sell-old-mobile-phone"] >div >svg').trigger('mouseover')

    })
})