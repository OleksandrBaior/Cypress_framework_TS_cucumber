/// <reference types="cypress" />
import contactUs from '../../../../pages/contactUs.page';
import constants from '../../../../../resourcers/constants.json';
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit contact us page', () => {
    contactUs.visit();
});
When('I click on submit button', () => {
    contactUs.form.submitBtn().click();
});
Then('Border becomes red and error message appears', () => {
    contactUs.form.howCanWeHelp().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(contactUs.form.errorMsg).should('be.visible');
    cy.get(contactUs.form.errorMsg).should('have.text', constants.styleFiels.error);
});
