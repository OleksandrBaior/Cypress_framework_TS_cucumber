import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import endpoints from 'resourcers/endpoints.json';
import mainPage from '../../../../pages/main.page';
import createTelnyxAccount from '../../../../pages/createTelnyxAccount';
import constants from '../../../../../resourcers/constants.json';

Given('I visit main page', () => {
    mainPage.visit();
});
When('I click on sign up', () => {
    mainPage.header.signUpBtn().click();
});
Then('The Create a Telnyx account modal is present', () => {
    cy.url().should('eq', endpoints.createTelnyxAccount);
    createTelnyxAccount.modal.title().should('be.visible');
});
When('I click on sign up button', () => {
    createTelnyxAccount.modal.signUpBtn().click();
});
Then('All neccessary fields are in the error state', () => {
    createTelnyxAccount.modal.companyEmail().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(createTelnyxAccount.modal.companyEmailError).should('be.visible');

    createTelnyxAccount.modal.firstName().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(createTelnyxAccount.modal.firstNameError).should('be.visible');

    createTelnyxAccount.modal.lastName().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(createTelnyxAccount.modal.lastNameError).should('be.visible');

    createTelnyxAccount.modal.password().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(createTelnyxAccount.modal.passwordRequired).should('be.visible');

    createTelnyxAccount.modal.termsAndConditional().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(createTelnyxAccount.modal.termsAndConditionalError).should('be.visible');
});
