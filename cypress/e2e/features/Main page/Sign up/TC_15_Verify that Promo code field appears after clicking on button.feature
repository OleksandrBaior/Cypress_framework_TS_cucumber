Feature: Sign up
    @SignUp
    Scenario: TC_15_Verify that Promo code field appears after clicking on button
        Given I visit sign up page
        When I click on apply a promo code
        Then Promo code field appears