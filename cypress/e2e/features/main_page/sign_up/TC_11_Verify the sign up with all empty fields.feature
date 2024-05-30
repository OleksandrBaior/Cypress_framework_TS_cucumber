@Main
Feature: Sign up

  Background:
    Given I visit main page

  @TC_11
  Scenario: Verify the sign up with all empty fields
    When I click on sign up
    * The Create a Telnyx account modal is present
    And I click on sign up button
    Then All neccessary fields are in the error state
