/// <reference types="cypress" />
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import mainPage from '../../pages/main.page';

Then('All elements of navbar are present', () => {
    for (const buttonName in mainPage.navigationBar) {
        mainPage.navigationBar[buttonName]().should('be.visible');
    }
});
