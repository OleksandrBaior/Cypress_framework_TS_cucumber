@Main
Feature: Conect with us section

  Background:
    Given I visit contact us page

  @TC_08
    Scenario: Verify the contact us form with valid data
        * Title is visitble
        When I select Sales-Inquiry option
        And I input random first name
        * I input random last name
        * I input random email
        * I select +380 option
        * I input random phone number
        * I input random webseite
        * I select AI Inference option
        * I select $500 - $1000 option
        * I input random how Do You Plan
        * I input random how Did You Hear About Telnyxn
        * I check subscription
        * I click on submit button and check the text on button
        Then Success title is visible