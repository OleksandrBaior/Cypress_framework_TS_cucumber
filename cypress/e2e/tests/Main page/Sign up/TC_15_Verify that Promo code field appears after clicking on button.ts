import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import createTelnyxAccount from '../../../../pages/createTelnyxAccount';

Given('I visit sign up page', () => {
    createTelnyxAccount.visit();
});
When('I click on apply a promo code', () => {
    createTelnyxAccount.modal.promoCodeLink().click()
});
Then('Promo code field appears', () => {
    createTelnyxAccount.modal.promoCode().should('be.visible')
});

