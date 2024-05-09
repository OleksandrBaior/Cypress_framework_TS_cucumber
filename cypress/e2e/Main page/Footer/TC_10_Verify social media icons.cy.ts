/// <reference types="cypress" />
import mainPage from '../../../pages/main.page';
import endpoints from '../../../../resourcers/endpoints.json';

it('TC_10_Verify social media icon', () => {
    mainPage.visit();

    mainPage.footerSection.footer().scrollIntoView();
    mainPage.footerSection.imageFooter().should('be.visible');
    mainPage.footerSection.linkedIn().invoke('removeAttr', 'target');
    mainPage.footerSection.linkedIn().click();
    cy.url().should('include', endpoints.linkedin);
    mainPage.visit();

    mainPage.footerSection.twitter().invoke('removeAttr', 'target');
    mainPage.footerSection.twitter().click();
    cy.url().should('include', endpoints.twitter);
    mainPage.visit();

    mainPage.footerSection.facebook().invoke('removeAttr', 'target');
    mainPage.footerSection.facebook().click();

    cy.url().should('include', endpoints.facebook);
});
