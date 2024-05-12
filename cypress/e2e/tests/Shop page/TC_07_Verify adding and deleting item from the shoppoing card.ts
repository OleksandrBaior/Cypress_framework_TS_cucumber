/// <reference types="cypress" />
import shopPage from '../../../pages/shop.page';
import constants from '../../../../resourcers/constants.json';
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit shop page', () => {
    shopPage.visit();
});
Then('Products list is visible', () => {
    shopPage.homeTab.featuredProducts().should('be.visible');
});
When('I click on first item', () => {
    shopPage.homeTab.firstItem().click();
});
Then('Shopping cart is open', () => {
    shopPage.yourCart.shoppingCart().should('be.visible');
});
Then('Added item is present', () => {
    shopPage.yourCart.addedItem().should('be.visible');
});
When('I click delete icon', () => {
    shopPage.yourCart.deleteItemIcon().click();
});
Then('Shopping cart is empty', () => {
    shopPage.yourCart.emptyText().should('have.text', constants.shopPage.shoppingCart.emptyText);
});
When('I click countiue button', () => {
    shopPage.yourCart.continueShoppingBtn().click();
});
Then('Shopping cart is close', () => {
    shopPage.yourCart.shoppingCart().should('not.be.visible');
});
