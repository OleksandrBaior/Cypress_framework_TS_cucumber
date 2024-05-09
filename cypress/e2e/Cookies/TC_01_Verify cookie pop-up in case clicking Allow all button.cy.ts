/// <reference types="cypress" />
import mainPage from '../../pages/main.page';

it('TC_01_Verify cookie pop-up in case clicking Allow all button', () => {
    mainPage.visit();

    mainPage.cookiesElements.cookieModal().should('be.visible');
    mainPage.cookiesElements.readMoreLink().click({ force: true });
    mainPage.cookiesElements.titleReadMorePage().should('have.text', 'Telnyx Cookie Policy');
    cy.go('back');
    cy.reload();
    mainPage.cookiesElements.cookiesSettingsBtn().should('be.visible');
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true });
    mainPage.cookiesElements.cookiesSettingsModal().should('be.visible');

    mainPage.cookiesElements.cookiesSettingsCloseBtn().click({ force: true });
    mainPage.cookiesElements.cookiesSettingsModal().should('not.be.visible');

    mainPage.cookiesElements.cookiesSettingsBtn().should('be.visible');
    mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true }).click({ force: true });
    mainPage.cookiesElements.cookiesSettingsModal().should('be.visible');

    mainPage.cookiesElements.confirmMyChoiceBtn().should('be.visible');
    mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });

    mainPage.cookiesElements.cookieModal().should('not.be.visible');
});
