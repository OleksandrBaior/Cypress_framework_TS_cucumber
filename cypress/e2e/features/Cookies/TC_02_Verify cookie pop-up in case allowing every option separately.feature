@Cookie
Feature: Cookies

  Background:
    Given I visit main page

    @TC_02
    Scenario: Verify cookie pop-up in case allowing every option separately
        When I click on settings button
        And I check performance checkbox
        * I check functional checkbox
        * I check targetting checkbox
        * I click on confirm my choice
        Then Cookie modal is close