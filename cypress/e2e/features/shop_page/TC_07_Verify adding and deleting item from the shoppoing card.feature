Feature: Shop page
  Scenario: TC_07_Verify adding and deleting item from the shoppoing card
    Given I visit shop page
    Then Products list is visible 
    When I click on first item
    Then Shopping cart is open
    Then Added item is present
    When I click delete icon
    Then Shopping cart is empty
    When I click countiue button
    Then Shopping cart is close