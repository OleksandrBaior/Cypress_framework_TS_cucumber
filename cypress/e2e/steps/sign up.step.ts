import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import endpoints from 'resourcers/endpoints.json';
import mainPage from '../../pages/main.page';
import createTelnyxAccount from '../../pages/createTelnyxAccount';
import constants from '../../../resourcers/constants.json';
import randomUtils from '../../../utils/random.utils';

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
Given('I visit sign up page', () => {
    createTelnyxAccount.visit();
});
When('I input an inval conpany email', () => {
    createTelnyxAccount.modal.companyEmail().type(randomUtils.randomValue('text'));
});
When('I input an inval first name', () => {
    createTelnyxAccount.modal.firstName().type(randomUtils.randomValue('text'));
});
When('I input an inval last name', () => {
    createTelnyxAccount.modal.lastName().type(randomUtils.randomValue('text'));
});
When('I input an inval password', () => {
    createTelnyxAccount.modal.password().type(randomUtils.randomValue('text'));
});
Then('I stay on the sign up page', () => {
    cy.url().should('eq', endpoints.createTelnyxAccount);
    createTelnyxAccount.modal.title().should('be.visible');
});
Then('Company name field is in the error state', () => {
    createTelnyxAccount.modal.companyEmail().should('have.css', 'border-color', constants.styleFiels.borderColor);
});
Then('Password field is in the error state', () => {
    createTelnyxAccount.modal.password().should('have.css', 'border-color', constants.styleFiels.borderColor);
});
Then('Terms And Conditional checkbox is in the error state', () => {
    createTelnyxAccount.modal.termsAndConditional().should('have.css', 'border-color', constants.styleFiels.borderColor);
});
Then('Google button is visible', () => {
    createTelnyxAccount.modal.googleBtn().should('be.visible');
});
Then('Google button is clickable', () => {
    createTelnyxAccount.modal.googleBtn().should('not.have.attr', 'disabled');
});

Then('Microsoft button is visible', () => {
    createTelnyxAccount.modal.microsoftBtn().should('be.visible');
});
Then('Microsoft button is clickable', () => {
    createTelnyxAccount.modal.microsoftBtn().should('not.have.attr', 'disabled');
});
When('I click on apply a promo code', () => {
    createTelnyxAccount.modal.promoCodeLink().click();
});
Then('Promo code field appears', () => {
    createTelnyxAccount.modal.promoCode().should('be.visible');
});
