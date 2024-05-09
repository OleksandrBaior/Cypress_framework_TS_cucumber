/// <reference types="cypress" />
import mainPage from '../../pages/main.page';

it('TC_03_Verify cookie pop-up in case allowing all cookies at once', () => {
    cy.getCookies().should('be.empty');

    mainPage.visit();
    mainPage.cookiesElements.acceptAllBtn().click();
    mainPage.cookiesElements.cookieModal().should('not.visible');

    cy.getCookies().should('have.length.greaterThan', 1);
});
