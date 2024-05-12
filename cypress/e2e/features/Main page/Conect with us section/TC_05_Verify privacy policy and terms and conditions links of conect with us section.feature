Feature: Conect with us section
    @Main
    Scenario: TC_05_Verify privacy policy and terms and conditions links of conect with us section
        Given I visit main page
        When I sroll page down

        Then I click on privacy policy link
        Then Privacy policy page opens
        Then I come back to main page

        When I click on terms and conditional link
        Then Terms and conditional page opens








