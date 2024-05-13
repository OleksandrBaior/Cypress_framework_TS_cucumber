import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import createTelnyxAccount from '../../../../pages/createTelnyxAccount';

Given('I visit sign up page', () => {
    createTelnyxAccount.visit();
});
Then('Microsoft button is visible', () => {
    createTelnyxAccount.modal.microsoftBtn().should('be.visible');
});
Then('Microsoft button is clickable', () => {
    createTelnyxAccount.modal.microsoftBtn().should('not.have.attr', 'disabled');
});

