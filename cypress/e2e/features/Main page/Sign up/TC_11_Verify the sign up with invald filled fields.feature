Feature: Sign up
    @SignUp
    Scenario: TC_11_Verify the sign up with all empty fields
        Given I visit main page
        When I click on sign up 
        Then The Create a Telnyx account modal is present
        When I click on sign up button
        Then All neccessary fields are in the error state