@sanity @product
Feature: to shop for the product

  #Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios.
  Background: 
    When the internet connection is up

  Scenario Outline: 
    Given the browser is launched
    And enter the login details are given
      | username | password   |
      | mintu    | secret123  |
      | richa    | goswami333 |
      | shrikant | kanth1234  |
    When the product is "<product_selected>"
    Then the VPN product catalog is "<loaded>"
    And select product from the list

    Examples: 
      | product_selected               | loaded     |
      | product selected               | loaded     |
      | product selected               | not loaded |
      | product not selected           | loaded     |
      | product not selected           | not loaded |
      | product selected not available | loaded     |
      | product selected not available | not loaded |

  Scenario: 
    When user is valid
    Then say Hi
