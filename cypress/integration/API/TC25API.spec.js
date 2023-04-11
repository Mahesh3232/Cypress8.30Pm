describe('Verify the APIs',()=>{
    it('Validate the GET Api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res['body']['data'].length).to.eq(res['body']['data'].length)
            expect(res['body']['per_page']).to.eq(res['body']['data'].length)
            expect(res['body']['per_page']).to.eq(res.body.data.length)
        })
    })

    it('Validate the properties for multiple users',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
           res.body.data.forEach(el => {
                expect(el).to.have.haveOwnProperty('id')
                expect(el).to.have.haveOwnProperty('email')
                expect(el).to.have.haveOwnProperty('first_name')
                expect(el).to.have.haveOwnProperty('last_name')
                expect(el).to.have.haveOwnProperty('avatar')
                expect(el).to.have.all.keys('id','email','first_name','last_name','avatar')
           });
        })
    })

    it.only('Validate the GET Api for singal user',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            expect(res.body.data[0].email).to.eq('michael.lawson@reqres.in')
        })
    })
})