import BasePage from './base.page';
import endpoints from '../../resourcers/endpoints.json';

class CreateTelnyxAccount extends BasePage {
    modal = {
        title: () => cy.get('[class="c-PJLV c-rMlRu c-bNMkKE"]'),
        signUpBtn: () => cy.get('.c-gJSRkV > .c-kDQqQr'),
        companyEmail: () => cy.get('#email'),
        companyEmailError: '#email_message',
        firstName: () => cy.get('#first_name'),
        firstNameError: '#first_name_message',
        lastName: () => cy.get('#last_name'),
        lastNameError: '#last_name_message',
        password: () => cy.get('#password'),
        passwordRequired: '#required',
        termsAndConditional: () => cy.get('#terms_and_conditions'),
        termsAndConditionalError: '#terms_and_conditions_message',
        googleBtn: () => cy.get('[class="nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb "]'),
        microsoftBtn: () => cy.get('.c-fGHEql > .c-kDQqQr'),
        promoCodeLink: () => cy.get('button.c-ewUecD > .c-khZXrc > .c-PJLV'),
        promoCode: () => cy.get('#promo_code'),
    };

    visit() {
        cy.visit(endpoints.createTelnyxAccount);
    }
}

export default new CreateTelnyxAccount();
