/// <reference types="cypress" />
import shopPage from '../../pages/shop.page';
import constants from '../../../resourcers/constants.json';

it('TC_07_Verify adding and deleting item from the shoppoing card', () => {
    shopPage.visit();

    shopPage.homeTab.featuredProducts().should('be.visible');
    shopPage.homeTab.firstItem().click();
    shopPage.yourCart.shoppingCart().should('be.visible');
    shopPage.yourCart.addedItem().should('be.visible');
    shopPage.yourCart.deleteItemIcon().click();
    shopPage.yourCart.emptyText().should('have.text', constants.shopPage.shoppingCart.emptyText);
    shopPage.yourCart.continueShoppingBtn().click();
    shopPage.yourCart.shoppingCart().should('not.be.visible');
});
