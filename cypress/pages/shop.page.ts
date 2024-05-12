import BasePage from './base.page';
import endpoints from '../../resourcers/endpoints.json';

class ShopPage extends BasePage {
    homeTab = {
        featuredProducts: () => cy.get('[class*="color-background"]'),
        firstItem: () => cy.get('[class*="color-background"] button').first(),
    };
    yourCart = {
        shoppingCart: () => cy.get('#CartDrawer'),
        addedItem: () => cy.get('#CartDrawer-Form'),
        deleteItemIcon: () => cy.get('#CartDrawer-Remove-1 button'),
        emptyText: () => cy.get('[class="cart__empty-text"]'),
        continueShoppingBtn: () => cy.get('#CartDrawer a'),
    };

    visit() {
        cy.visit(endpoints.shop);
    }
}

export default new ShopPage();
