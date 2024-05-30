@Cookie
Feature: Cookies

  Background:
    Given I visit main page

  @TC_01
  Scenario: Verify cookie pop-up in case clicking Allow all button
    Then Cookie modal is visible
    And I click on read more link
    * Title is visible
    And I come back to main page and reload page
    * Cookies Settings button is visible
    And I click on cookies settings button
    * Cookies Settings modal is visible
    And I click on close button
    * Cookies Settings modal is close
    * Cookies Settings button is present
    And I click on cookies settings button again
    * Cookies Settings modal is present
    And I click on confirm my choice button
    Then Cookies modal is visible
