@Main
Feature: Header

  Background:
    Given I visit main page

  @TC_06
  Scenario: Verify the navigation bar
    Then All elements of navbar are present
