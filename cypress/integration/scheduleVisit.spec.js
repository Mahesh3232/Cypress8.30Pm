//import { it } from "mocha";

Cypress.on("uncaught:exception", function () {
    return false;
});

describe('Check the valuation with Map functionality', function () {
    it('Check valuation for new user', function () {

        cy.visit('https://instahome.aurumtrex.com')
        cy.wait(10000)
        cy.get('.val-homebtn.col-9.fs20.text-white.py-3.mt-4').click({ force: true })
        cy.get('.col-lg-10 > .m-0').type('aurum', { force: true })
        cy.get('div[class="card card-height px-2 "] div:nth-child(1) h6:nth-child(1)').click({ force: true })
        cy.get('svg[class="cursor-pointer"]').click({ force: true })
    })

    it('Fill up the property details with valid data', function () {
        let text =
            cy.get('select[name="BEDROOM_NUM"]').select(1, { force: true })
        // cy.get('select[name="BEDROOM_NUM"]').select('"1"')
        cy.get('select[name="BATHROOM_NUM"]').select(2, { force: true })
        cy.wait(1000)
        cy.get(':nth-child(3) > .form-group > .form-select').select(2, { force: true })
        cy.get('select[name="Facing"]').select('South-East', { force: true })
        cy.get('div[class="row pe-0"] div.col-lg-6 [placeholder="Enter Carpet Area"]').type(505, { force: true })
        cy.get('div[class="row pe-0"] div.col-lg-6 [placeholder="Enter Total Floors"]').type(25, { force: true })
        cy.get(':nth-child(8) > .form-group > .form-control').type(10, { force: true })
        cy.get(':nth-child(10) > .form-group > .form-select').select('Unfurnished', { force: true })
        cy.get('.btn.btn-Continue-enable.py-2.px-4').click({ force: true })
        //cy.get('div[class=" step-box d-flex flex-lg-column flex-row justify-content-between mb-4"] div.val-steps div.box-9').should('have.value',[color="#fff"])
        //cy.get('.col-lg-9.col-md-12.col-12  .form-control.col-12.val-select').type('Demo Data')
        cy.get('[name="project_name"]').type('Demo Data', { force: true })

        cy.get('[name="Open"]').type('0', { force: true })
        cy.get('[name="Covered"]').type('1', { force: true })
        cy.get('#react-select-2-input').type('Bus Stop{enter} Swimming pol{enter} WIFI{enter} Parking{enter} Garden{enter} Railway Station{enter}', { force: true })
        cy.get('.mb-2:nth-child(6) .val-select').select('2020', { force: true }).should('have.value', '2020')
        cy.get('.mb-2:nth-child(7) .val-select').select('2023', { force: true }).should('have.value', '2023')
        cy.get('#get-valuation').click({ force: true })
    })
    it('Login with valid mobile number', function () {

        // cy.get('.input-group> div .login-input.w-100.selectorgadget_suggested').click()
        cy.wait(5000)
        cy.get('.row > .col-lg-7 > .pt-5 > .input-group > .d-flex').type(9988776655)
        cy.get('.row > .col-lg-7 > .pt-5 > div.text-center > .button-gradient').click()
        cy.get('[data-testid="otp-input-root"]').type(1111)
        cy.get('.row.justify-content-center > .button-gradient').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Form submitted successfully')
    })
    it('Schedule a site visit', function(){
        cy.get('[class="btn-schedulevisit"]').click({force: true})
        cy.get('.react-calendar__month-view__days > :nth-child(11)').click()
        cy.wait(1000)
        cy.get('[class=" css-1d8n9bt"]').click()
        cy.wait(3000)
        cy.get('[class=" css-yt9ioa-option"]').contains('01:30 PM - 02:00 PM').click({force:true})
    })
})
//01:30 PM - 02:00 PM
//02:30 PM - 03:00 PM