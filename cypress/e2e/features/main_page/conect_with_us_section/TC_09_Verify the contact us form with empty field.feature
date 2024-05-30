@Main
Feature: Conect with us section

  Background:
    Given I visit contact us page

  @TC_09
    Scenario: Verify the contact us form with empty field
        When I click on submit button
        Then Border becomes red and error message appears
