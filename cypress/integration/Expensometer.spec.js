///<reference types="cypress"/>

describe('Test the Expensometer functionality', function () {

    it('Check the containt of expensometer functionality', function () {
        cy.visit('https://instahome.aurumtrex.com/expensometer')
        cy.wait(1500)
        // cy.get('input[class="form-control purchasse-input border-1 "]').click({force: true}).type(1000000)
        // cy.wait(1000)
        let purchasePriceText, registrationFeesText, stampDutyText, legalChargesText, finalTotal;

        cy.get('p[class="text-secondry fs-6 mb-2 fw-normal text-end"]')
            .invoke('text')
            .then((text) => {
                purchasePriceText = text;
            });

        cy.get('p[class="text-secondry fs-6 my-2 fw-light text-end"]')
            .invoke('text')
            .then((text) => {
                registrationFeesText = text;
            });

        cy.get('p[class="text-secondry fs-6 my-3 fw-normal text-end"]').first()
            .invoke('text')
            .then((text) => {
                stampDutyText = text;
            });

        cy.get('p[class="text-secondry fs-6 my-3 fw-normal text-end"]').last()
            .invoke('text')
            .then((text) => {
                legalChargesText = text;
                cy.log(legalChargesText)
            });

        cy.get('p[class="text-white fs-5 fw-bold text-end mb-0"]').last()
            .invoke('text')
            .then((text) => {
                finalTotal = text;
                cy.log(finalTotal)
            });
        

        cy.then(() => {
            const purchasePrice = parseInt(purchasePriceText.replace(/\D/g, ''));
            const registrationFees = parseInt(registrationFeesText.replace(/\D/g, ''));
            const stampDuty = parseInt(stampDutyText.replace(/\D/g, ''));
            const legalCharges = parseInt(legalChargesText.replace(/\D/g, ''));
            const finalTotaltext = parseInt(finalTotal.replace(/\D/g, ''));
            const sum = purchasePrice + registrationFees + stampDuty + legalCharges;
            expect(sum).to.eql(finalTotaltext)
        })

    })
})
