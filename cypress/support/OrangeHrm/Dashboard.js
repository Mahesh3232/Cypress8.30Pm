export class Dashboard{
    elements={
        MainMenu:'ul[class="oxd-main-menu"]',
        quickLaunchTab:'.orangehrm-quick-launch',
        DashBoardLogo:'[alt="client brand banner"]'
    }

    VerifyMainMenuTab(){
        cy.get(this.elements.MainMenu).children().should('have.length',12)
    }

    VerifyQuickLunchTab(){
        cy.get(this.elements.quickLaunchTab).children().should('have.length',6)
    }

    VerifyDashboardLogo(){
        cy.get(this.elements.DashBoardLogo).should('be.visible')
    }
}