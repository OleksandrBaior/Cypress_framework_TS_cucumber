@Main
Feature: Sign up

  Background:
    Given I visit sign up page

  @TC_12
  Scenario: TC_12_Verify the sign up with all empty fields
    When I input an inval conpany email
    And I input an inval first name
    * I input an inval last name
    * I input an inval password
    * I click on sign up button
    * I stay on the sign up page
    * Company name field is in the error state
    * Password field is in the error state
    Then Terms And Conditional checkbox is in the error state
