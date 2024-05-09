/// <reference types="cypress" />
import mainPage from '../../../pages/main.page';

it('TC_06_Verify the navigation bar', () => {
    mainPage.visit();

    for (const buttonName in mainPage.navigationBar) {
        mainPage.navigationBar[buttonName]().should('be.visible');
    }
});
