/// <reference types="cypress" />
import contactUs from '../../../pages/contactUs.page';
import randomUtils from '../../../../utils/random.utils';

it('TC_08_Verify the contact us form with valid data', () => {
    contactUs.visit();

    contactUs.form.title().should('be.visible');
    contactUs.form.howCanWeHelp().select('Sales-Inquiry');
    contactUs.form.firstName().type(randomUtils.rundomValue('firstName'));
    contactUs.form.lastName().type(randomUtils.rundomValue('middleName'));
    contactUs.form.email().type(randomUtils.rundomValue('email'));
    contactUs.form.country().select('+380');
    contactUs.form.phoneNumber().type(randomUtils.rundomValue('phoneNumber'));
    contactUs.form.companyWebsite().type(randomUtils.rundomValue('text'));
    contactUs.form.primaryInterest().select('AI / Inference');
    contactUs.form.budget().select('$500 - $1000');
    contactUs.form.howDoYouPlan().type(randomUtils.rundomValue('text'));
    contactUs.form.howDidYouHearAboutTelnyx().type(randomUtils.rundomValue('text'));
    contactUs.form.subscriptionCheckbox().check();
    contactUs.form.submitBtn().click();
    contactUs.form.submitBtn().should('have.text', 'Please Wait');

    contactUs.form.successTitle().should('be.visible');
});
