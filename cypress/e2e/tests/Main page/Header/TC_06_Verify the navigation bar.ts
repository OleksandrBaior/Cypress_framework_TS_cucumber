/// <reference types="cypress" />
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../../../pages/main.page';

Given('I visit main page', () => {
    mainPage.visit();
});
Then('All elements of navbar are present', () => {
    for (const buttonName in mainPage.navigationBar) {
        mainPage.navigationBar[buttonName]().should('be.visible');
    }
});
