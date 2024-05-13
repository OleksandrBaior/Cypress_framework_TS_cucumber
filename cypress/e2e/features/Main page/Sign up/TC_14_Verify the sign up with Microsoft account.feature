Feature: Sign up
    @SignUp
    Scenario: TC_14_Verify the sign up with Microsoft account
        Given I visit sign up page
        Then Microsoft button is visible 
        Then Microsoft button is clickable 