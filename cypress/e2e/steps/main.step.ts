import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../pages/main.page';

Given('I visit main page', () => {
    mainPage.visit();
});
Then('I come back to main page', () => {
    cy.go('back');
});
When('I come back to main page and reload page', () => {
    cy.go('back');
    cy.reload();
});
