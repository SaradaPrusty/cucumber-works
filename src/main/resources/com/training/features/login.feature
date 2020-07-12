# this is my comment
@sanity @login
Feature: to validate login

  Scenario: to check if the user is valid
    Given the web application is loaded
    When the user logs in with user name
    And the password is entered
    When the user is "valid"
    Then take the user to "home" page
	@invalidLogin
  Scenario: to check if the user is invalid
    Given the web application is loaded
    When the user logs in with user name
    And the password is entered
    When the user is "invalid"
    Then take the user to "error" page

  Scenario: to check if the user is invalid
    Given the web application is loaded
    When the user logs in with user name
    And the password is entered
    When the user is "manager"
    Then take the user to "successmanager" page
