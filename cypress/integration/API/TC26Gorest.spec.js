

describe('Validate Basic Auth Apis', () => {
    it('Validate Get User Api', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.body.length).to.eq(10)
            expect(res.duration).to.be.lessThan(500)
        })
    })

    it.only('Validate Basic auth Post Api', () => {
        let email = `tenali.ramakrishna@15${Math.floor(Math.random() * 6)}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": email,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
            }
        }).then((res)=>{
            cy.log(email)
            cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.duration).to.be.lessThan(500)
        })
    })

    it('Validate basic auth Put Api',()=>{
        
    })
})