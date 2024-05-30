@Main
Feature: Conect with us section

  Background:
    Given I visit main page

  @TC_05
    Scenario: Verify privacy policy and terms and conditions links of conect with us section
        When I sroll page down
        And I click on privacy policy link
        * Privacy policy page opens
        And I come back to main page
        * I click on terms and conditional link
        Then Terms and conditional page opens








