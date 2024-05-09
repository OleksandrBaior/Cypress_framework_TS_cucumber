/// <reference types="cypress" />
import mainPage from '../../../pages/main.page';
import endpoints from '../../../../resourcers/endpoints.json';

it('TC_05_Verify privacy policy and terms and conditions links of conect with us section', () => {
    mainPage.visit();

    mainPage.contactWithUsElements.tiltleSection().scrollIntoView();
    mainPage.contactWithUsElements.privacyPolicyLink().click();
    cy.url().should('eq', endpoints.privacyPolicy);
    cy.go('back');

    mainPage.contactWithUsElements.termsAndCondition().click();
    cy.url().should('eq', endpoints.termsAndConditions);
});
