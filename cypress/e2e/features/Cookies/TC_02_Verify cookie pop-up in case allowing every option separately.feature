Feature: Cookies
    @Cookie
    Scenario: TC_02_Verify cookie pop-up in case allowing every option separately
        Given I visit main page
        When I click on settings button

        Then I check performance checkbox
        Then I check functional checkbox
        Then I check targetting checkbox
        
        When I click on confirm my choice
        Then Cookie modal is close