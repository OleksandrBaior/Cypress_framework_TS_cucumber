Feature: Conect with us section
    @Main
    Scenario: TC_09_Verify the contact us form with empty field
        Given I visit contact us page
        When I click on submit button
        Then Border becomes red and error message appears
