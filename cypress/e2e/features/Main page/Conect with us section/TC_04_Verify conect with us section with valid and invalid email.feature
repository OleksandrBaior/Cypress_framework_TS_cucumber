Feature: Conect with us section
    @Main
    Scenario: TC_04_Verify connect with us section with valid and invalid email
        Given I visit main page
        When I sroll page down
        Then Title Section and title and description are visible

        When I input invalid email
        Then Border becomes red

        When I input valid email
        Then Border becomes green

        When I click submit button
        Then Create account page opens