@Cookie
Feature: Cookies

  Background:
    Given I visit main page
    * Cookies is empty

    @TC_03   
    Scenario: Verify cookie pop-up in case allowing all cookies at once
        When I click on accept all button
        Then Cookie modal is close
        * Cookies is not empty
