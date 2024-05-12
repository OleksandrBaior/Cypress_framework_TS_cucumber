import BasePage from './base.page';
import endpoints from '../../resourcers/endpoints.json';

class ContactUs extends BasePage {
    form = {
        title: () => cy.get('[id="5tQmV9hsOULxIh30SYcWn2"] h1'),
        firstName: () => cy.get('#FirstName'),
        lastName: () => cy.get('#LastName'),
        email: () => cy.get('#Email'),
        howCanWeHelp: () => cy.get('#Reason_for_Contact__c'),
        country: () => cy.get('#Phone_Number_Extension__c'),
        phoneNumber: () => cy.get('#Phone_Number_Base__c'),
        companyWebsite: () => cy.get('#Website'),
        howDidYouHearAboutTelnyx: () => cy.get('#How_did_you_hear_about_Telnyx_Open__c'),
        subscriptionCheckbox: () => cy.get('#mktoCheckbox_14991_0'),
        submitBtn: () => cy.get('#mktoForm_1987 button'),
        primaryInterest: () => cy.get('#Use_Case_Form__c'),
        budget: () => cy.get('#Form_Budget__c'),
        howDoYouPlan: () => cy.get('#Form_Additional_Information__c'),
        successTitle: () => cy.contains('Thank you.'),
        errorMsg: '#ValidMsgReason_for_Contact__c',
    };

    visit() {
        super.visit(endpoints.contactUs);
    }
}

export default new ContactUs();
