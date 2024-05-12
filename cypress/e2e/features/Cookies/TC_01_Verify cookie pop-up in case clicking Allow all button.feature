Feature: Cookies
    @Cookie
    Scenario: TC_01_Verify cookie pop-up in case clicking Allow all button
        Given I visit main page
        Then Cookie modal is visible

        When I click on read more link
        Then Title is visible

        When I come back to main page
        Then Cookies Settings button is visible

        When I click on cookies settings button
        Then Cookies Settings modal is visible

        When I click on close button
        Then Cookies Settings modal is close
        Then Cookies Settings button is present

        When I click on cookies settings button again
        Then Cookies Settings modal is present

        When I click on confirm my choice button
        Then Cookies modal is visible