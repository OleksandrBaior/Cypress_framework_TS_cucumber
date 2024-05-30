/// <reference types="cypress" />
import mainPage from '../../pages/main.page';
import constants from '../../../resourcers/constants.json';
import endpoints from '../../../resourcers/endpoints.json';
import contactUs from '../../pages/contactUs.page';
import randomUtils from '../../../utils/random.utils';
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Then('Title Section and title and description are visible', () => {
    mainPage.contactWithUsElements.tiltleSection().should('have.text', constants.mainPage.contactSection.tiltleSection);
    mainPage.contactWithUsElements.tiltle().should('have.text', constants.mainPage.contactSection.tiltle);
    mainPage.contactWithUsElements.description().should('have.text', constants.mainPage.contactSection.description);
});
When('I input invalid email', () => {
    mainPage.contactWithUsElements.emailInput().type(constants.emails.invalidEmail);
});
Then('Border becomes red', () => {
    mainPage.contactWithUsElements.emailInput().should('have.css', 'border', constants.styleFiels.redBorder);
});

When('I input valid email', () => {
    mainPage.contactWithUsElements.emailInput().type(constants.emails.validEmail);
});
Then('Border becomes green', () => {
    mainPage.contactWithUsElements.emailInput().focus();
    mainPage.contactWithUsElements.emailInput().should('have.css', 'border', constants.styleFiels.greenBorder);
});
When('I click submit button', () => {
    mainPage.contactWithUsElements.submitBtn().click();
});
Then('Create account page opens', () => {
    cy.url().should('eq', endpoints.createAccount);
});
When('I sroll page down', () => {
    mainPage.contactWithUsElements.tiltleSection().scrollIntoView();
});
Then('I click on privacy policy link', () => {
    mainPage.contactWithUsElements.privacyPolicyLink().click();
});
Then('Privacy policy page opens', () => {
    cy.url().should('eq', endpoints.privacyPolicy);
});
When('I click on terms and conditional link', () => {
    mainPage.contactWithUsElements.termsAndCondition().click();
});
Then('Terms and conditional page opens', () => {
    cy.url().should('eq', endpoints.termsAndConditions);
});
Given('I visit contact us page', () => {
    contactUs.visit();
});
Then('Title is visitble', () => {
    contactUs.form.title().should('be.visible');
});
When('I select Sales-Inquiry option', () => {
    contactUs.form.howCanWeHelp().select('Sales-Inquiry');
});
When('I input random first name', () => {
    contactUs.form.firstName().type(randomUtils.randomValue('firstName'));
});
When('I input random last name', () => {
    contactUs.form.lastName().type(randomUtils.randomValue('middleName'));
});
When('I input random email', () => {
    contactUs.form.email().type(randomUtils.randomValue('email'));
});
When('I select +380 option', () => {
    contactUs.form.country().select('+380');
});
When('I input random phone number', () => {
    contactUs.form.phoneNumber().type(randomUtils.randomValue('phoneNumber'));
});
When('I input random webseite', () => {
    contactUs.form.companyWebsite().type(randomUtils.randomValue('text'));
});
When('I select AI Inference option', () => {
    contactUs.form.primaryInterest().select('AI / Inference');
});
When('I select $500 - $1000 option', () => {
    contactUs.form.budget().select('$500 - $1000');
});
When('I input random how Do You Plan', () => {
    contactUs.form.howDoYouPlan().type(randomUtils.randomValue('text'));
});
When('I input random how Did You Hear About Telnyxn', () => {
    contactUs.form.howDidYouHearAboutTelnyx().type(randomUtils.randomValue('text'));
});
When('I check subscription', () => {
    contactUs.form.subscriptionCheckbox().check();
});
When('I click on submit button and check the text on button', () => {
    contactUs.form.submitBtn().click();
    contactUs.form.submitBtn().should('have.text', 'Please Wait');
});
Then('Success title is visible', () => {
    contactUs.form.successTitle().should('be.visible');
});
When('I click on submit button', () => {
    contactUs.form.submitBtn().click();
});
Then('Border becomes red and error message appears', () => {
    contactUs.form.howCanWeHelp().should('have.css', 'border-color', constants.styleFiels.borderColor);
    cy.get(contactUs.form.errorMsg).should('be.visible');
    cy.get(contactUs.form.errorMsg).should('have.text', constants.styleFiels.error);
});
