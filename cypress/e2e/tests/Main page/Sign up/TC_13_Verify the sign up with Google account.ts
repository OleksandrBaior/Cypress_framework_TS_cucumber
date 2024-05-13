import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import createTelnyxAccount from '../../../../pages/createTelnyxAccount';

Given('I visit sign up page', () => {
    createTelnyxAccount.visit();
});
Then('Google button is visible', () => {
    createTelnyxAccount.modal.googleBtn().should('be.visible');
});
Then('Google button is clickable', () => {
    createTelnyxAccount.modal.googleBtn().should('not.have.attr', 'disabled');
});

