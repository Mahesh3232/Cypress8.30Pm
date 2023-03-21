

describe('Verify the date picker functionality',()=>{

    it('Verify Calender through cypress',()=>{
        let date = new Date()
        date.setDate(date.getDate() + 200)
        let da = date.getDate()// current date
        let month = date.getMonth()//Return current month index
        //jan = 0 feb = 1 march = 2
        let fullMonth = date.toLocaleString('default',{month:"long"})
        let fullMonth2 = date.toLocaleString('default',{month:"short"})
        let year = date.getFullYear()
      
        cy.log(da)
        //cy.log(month)
        cy.log(fullMonth)
        //cy.log(fullMonth2)
        cy.log(year)

    })
})