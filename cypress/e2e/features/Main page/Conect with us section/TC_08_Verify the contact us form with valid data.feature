Feature: Conect with us section
    @Main
    Scenario: TC_08_Verify the contact us form with valid data
        Given I visit contact us page
        Then Title is visitble
        When I select Sales-Inquiry option
        When I input random first name
        When I input random last name
        When I input random email
        When I select +380 option
        When I input random phone number
        When I input random webseite
        When I select AI Inference option
        When I select $500 - $1000 option
        When I input random how Do You Plan
        When I input random how Did You Hear About Telnyxn
        When I check subscription

        When I click on submit button
        Then Success title is visible