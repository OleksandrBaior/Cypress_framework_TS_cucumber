import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import shopPage from '../../pages/shop.page';

When('I visit shop page', () => {
    shopPage.visit();
});


