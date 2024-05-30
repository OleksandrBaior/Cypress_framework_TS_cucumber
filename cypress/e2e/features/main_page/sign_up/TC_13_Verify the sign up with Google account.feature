@Main
Feature: Sign up

  Background:
    Given I visit sign up page

  @TC_13
  Scenario: TC_13_Verify the sign up with Google account
    Then Google button is visible
    * Google button is clickable
