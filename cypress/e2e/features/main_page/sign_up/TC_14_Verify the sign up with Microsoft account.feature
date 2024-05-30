@Main
Feature: Sign up

  Background:
    Given I visit sign up page

  @TC_14
  Scenario: Verify the sign up with Microsoft account
    Then Microsoft button is visible
    * Microsoft button is clickable
