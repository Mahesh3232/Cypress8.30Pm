

describe('Validate the tables', () => {
    let sum = 0
    it('Verify the total sum price colum', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            //cy.log(el.text())
            if (index != 0) {
                //cy.log(el.children().last().text())
                //cy.log(typeof(el.children().last().text()))
                //cy.log(typeof(Number(el.children('td').last().text())))
                sum = sum + Number(el.children('td').last().text())
            }
           
        }).then(()=>{
            expect(sum).to.eq(7100)
            //cy.log(sum)
        })
       
    })

    
})