describe('Verify js alerts with cypress',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('Verify JS basic alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(text)=>{
            //cy.log(text)
            expect(text).to.eql('I am a JS Alert')
        })
    })

    it.only('Verify JS basic alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'alert').as('alert')
        })
        //cy.contains(/JS Alert/i).click()
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('@alert').should('have.been.calledOnceWith', 'I am a JS Alert')
    })
})