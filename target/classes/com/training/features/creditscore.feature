@sanity @creditscore
Feature: This is a smple check for credit score

  Scenario: Just check if you can get load
    ## Heading If we want to change the work_type one by one . we will use Data Table
    Given You have enough credit score
      | work_type  | years_of_exp |
      | govt       |           10 |
      | private    |           12 |
      | consultant |            9 |
    When you apply for a loan
    Then Loan is sanctioned
