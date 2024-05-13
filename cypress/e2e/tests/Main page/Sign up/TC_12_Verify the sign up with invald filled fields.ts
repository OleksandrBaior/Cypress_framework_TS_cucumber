import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import endpoints from 'resourcers/endpoints.json';
import createTelnyxAccount from '../../../../pages/createTelnyxAccount';
import constants from '../../../../../resourcers/constants.json';
import randomUtils from '../../../../../utils/random.utils';

Given('I visit sign up page', () => {
    createTelnyxAccount.visit();
});
When('I input an inval conpany email', () => {
    createTelnyxAccount.modal.companyEmail().type(randomUtils.rundomValue('text'));
});
When('I input an inval first name', () => {
    createTelnyxAccount.modal.firstName().type(randomUtils.rundomValue('text'));
});
When('I input an inval last name', () => {
    createTelnyxAccount.modal.lastName().type(randomUtils.rundomValue('text'));
});
When('I input an inval password', () => {
    createTelnyxAccount.modal.password().type(randomUtils.rundomValue('text'));
});
When('I click on sign up button', () => {
    createTelnyxAccount.modal.signUpBtn().click();
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


