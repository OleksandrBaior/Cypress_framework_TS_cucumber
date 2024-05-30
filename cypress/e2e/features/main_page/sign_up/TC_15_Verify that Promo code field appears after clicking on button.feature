@Main
Feature: Sign up

  Background:
    Given I visit sign up page

  @TC_15
  Scenario: TC_15_Verify that Promo code field appears after clicking on button
    When I click on apply a promo code
    Then Promo code field appears
