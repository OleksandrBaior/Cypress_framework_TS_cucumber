/// <reference types="cypress" />
import contactUs from '../../../../pages/contactUs.page';
import constants from '../../../../../resourcers/constants.json';

it('TC_09_Verify the contact us form with empty field', () => {
    contactUs.visit();

    contactUs.form.submitBtn().click();
    contactUs.form.howCanWeHelp().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(contactUs.form.errorMsg).should('be.visible');
    cy.get(contactUs.form.errorMsg).should('have.text', constants.styleFiels.error);
});
