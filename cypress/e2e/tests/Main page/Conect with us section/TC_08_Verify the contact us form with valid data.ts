/// <reference types="cypress" />
import contactUs from '../../../../pages/contactUs.page';
import randomUtils from '../../../../../utils/random.utils';
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

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
    contactUs.form.firstName().type(randomUtils.rundomValue('firstName'));
});
When('I input random last name', () => {
    contactUs.form.lastName().type(randomUtils.rundomValue('middleName'));
});
When('I input random email', () => {
    contactUs.form.email().type(randomUtils.rundomValue('email'));
});
When('I select +380 option', () => {
    contactUs.form.country().select('+380');
});
When('I input random phone number', () => {
    contactUs.form.phoneNumber().type(randomUtils.rundomValue('phoneNumber'));
});
When('I input random webseite', () => {
    contactUs.form.companyWebsite().type(randomUtils.rundomValue('text'));
});
When('I select AI Inference option', () => {
    contactUs.form.primaryInterest().select('AI / Inference');
});
When('I select $500 - $1000 option', () => {
    contactUs.form.budget().select('$500 - $1000');
});
When('I input random how Do You Plan', () => {
    contactUs.form.howDoYouPlan().type(randomUtils.rundomValue('text'));
});
When('I input random how Did You Hear About Telnyxn', () => {
    contactUs.form.howDidYouHearAboutTelnyx().type(randomUtils.rundomValue('text'));
});
When('I check subscription', () => {
    contactUs.form.subscriptionCheckbox().check();
});

When('I click on submit button', () => {
    contactUs.form.submitBtn().click();
    contactUs.form.submitBtn().should('have.text', 'Please Wait');
});
Then('Success title is visible', () => {
    contactUs.form.successTitle().should('be.visible');
});
