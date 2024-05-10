Feature: Cookies
    @Cookie    
    Scenario: TC_03_Verify cookie pop-up in case allowing all cookies at once
        Given Cookies is empty
        Given I visit main page
        When I click on accept all button
        Then Cookie modal is close
        Then Cookies is not empty
