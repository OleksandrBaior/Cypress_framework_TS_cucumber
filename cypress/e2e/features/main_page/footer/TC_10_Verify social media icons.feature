@Main
Feature: Footer

  Background:
    Given I visit main page

  @TC_10
  Scenario: Verify social media icon
    When I scroll page down
    * Image footer is visible
    And I click on LinkedIn icon
    * LinkedIn page opens
    And I come back to main page
    * I click on twitter icon
    * Twitter page opens
    And I visit main page
    * I click on facebook icon
    Then Facebook page opens
