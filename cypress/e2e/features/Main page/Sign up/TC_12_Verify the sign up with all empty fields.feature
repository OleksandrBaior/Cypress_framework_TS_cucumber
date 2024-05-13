Feature: Sign up
    @SignUp
    Scenario: TC_12_Verify the sign up with all empty fields
        Given I visit sign up page
        When I input an inval conpany email
        When I input an inval first name
        When I input an inval last name
        When I input an inval password
        When I click on sign up button
        Then I stay on the sign up page
        Then Company name field is in the error state
        Then Password field is in the error state
        Then Terms And Conditional checkbox is in the error state