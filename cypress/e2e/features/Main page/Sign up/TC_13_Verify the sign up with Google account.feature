Feature: Sign up
    @SignUp
    Scenario: TC_13_Verify the sign up with Google account
        Given I visit sign up page
        Then Google button is visible 
        Then Google button is clickable 