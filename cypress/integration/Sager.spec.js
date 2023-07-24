describe('Test', () => {
    it('Test One', () => {
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     return false
        // })
        cy.visit('https://www.makemytrip.com/flights/',{ headers: { "Accept-Encoding": "gzip, deflate" } })
        // cy.get('#dropdownForm1').click({ force: true })
        // cy.get('[class="col-2"]').first().dblclick({ force: true }).wait(500).click({ force: true })
    })

    // it("inframe practice", function () {
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     // cy.get('#courses-iframe').then((el) => {
    //     //     let body = el.contents().find('body')
    //     //     cy.wrap(body).as('Iframebody')
    //     //     cy.get('@Iframebody').find('a[href="mentorship"]').eq(0).should('have.text', 'Mentorship')
    //     //     cy.get('@Iframebody').find('a[href="mentorship"]').eq(0).click()
    //     //     cy.wait(7000)
    //     //     //    not work       
    //     //     cy.get('@Iframebody').find('.pricing-title').first().should('have.text', 'BRONZE')
    //     //     //cy.get('@Iframebody').find('[class="row"] .pricing-container .pricing-header .bg-pattern-1 .pricing-title').first().should('have.text', 'BRONZE')

    //     // })

    //     cy.get('#courses-iframe').then((ele) => {
    //         cy.log(ele)
    //         let body2 = ele[0].contentDocument.body
    //         cy.log(body2)
    //         cy.wrap(body2).as('Iframe')
    //         cy.get('@Iframe').find('a[href="mentorship"]').eq(0).should('have.text', 'Mentorship').click()
    //         cy.get('@Iframe').find('.container-fluid > .row.clearfix').children().first().find('div[class="text"]')
    //     })
    // })

    // it.only('', () => {
    //     let url
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/', {
    //         onBeforeLoad(win) {
    //             url = cy.stub(win, 'open', url1 => { url = url1 }).as('open')
    //             cy.log(url1)
    //         }
    //     })
    //     cy.get('#openwindow').click()
    //     cy.get('@open').then(() => {
    //         cy.window().then((win) => {

    //             win.location.href = url
    //         })
    //     })
    //     cy.title().should('contains', 'QAClick Academy')
    // });
})


// cy.window().then(win => {
//     cy.stub(win, 'open').callsFake((url) => {
//         //cy.log(url)
//         SecondUrl = url
//         return win.open.wrappedMethod.call(win, url, '_self')
//     }).as('open');
//     cy.get('.way_icon_gl').click()
//     //  cy.get('@open'); 
// });



