Feature: Footer
    @Main
    Scenario: TC_10_Verify social media icon
        Given I visit main page
        When I scroll page down
        Then Image footer is visible

        When I click on LinkedIn icon
        Then LinkedIn page opens
        Then I come back to main page

        When I click on twitter icon
        Then Twitter page opens
        Then I come back to main page again

        When I click on facebook icon
        Then Facebook page opens
