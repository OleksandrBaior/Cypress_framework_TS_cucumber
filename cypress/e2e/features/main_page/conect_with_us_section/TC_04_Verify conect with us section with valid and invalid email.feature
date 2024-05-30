@Main
Feature: Conect with us section

  Background:
    Given I visit main page

  @TC_04
  Scenario: Verify connect with us section with valid and invalid email
    When I sroll page down
    * Title Section and title and description are visible
    And I input invalid email
    * Border becomes red
    And I input valid email
    * Border becomes green
    And I click submit button
    Then Create account page opens
