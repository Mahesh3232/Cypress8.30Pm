import { Dashboard } from '../../support/OrangeHrm/Dashboard';
import { homepage } from '../../support/OrangeHrm/LoginPage';

describe('Verify the Dashboard page',()=>{
    let dashborad = new Dashboard()
    let login = new homepage()

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.login('Admin','admin123')
        cy.url().should('contain','dashboard')
    })

    it('Verify mainmenu of dashborad',()=>{ 
        dashborad.VerifyMainMenuTab()
    })

    it('Verify the Quick lunchtab',()=>{
        dashborad.VerifyQuickLunchTab()
    })

    it('Verify the DashBoardPage logo',()=>{
        dashborad.VerifyDashboardLogo()
    })

})