@sanity @telecom
Feature: validating the user call details

  # ClickonRun as and then click on run as 1 cucmber feature. You will get the step code methods. You don't have to write also
  Scenario: to check if the user has dialed valid number
    Given the telephone is working
    When the number is dialed
    And ring tone is heard
    Then the call is picked by recipient
    But there should not be a distrubance
