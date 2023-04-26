describe('Validate gorestApis',()=>{
    it('Validate GET Api using cy.request',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.duration).to.be.lessThan(600)
            expect(res.body.length).to.eq(10)
        })
    })
})