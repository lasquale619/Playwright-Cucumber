@login
Feature: verify login verify user is able to login with valid and invalid credentials

  Background:
    Given I navigate to "https://practice.expandtesting.com/notes/app/login"

  @valid
  Scenario: verify user is able to login with valid credentials
    When I enter my email "testlogiciel@gmail.com"
    And I enter my password "123456"
    And I click the login button
    Then I should see "MyNotes"

  @invalid
  Scenario Outline: verify user is not able to login with invalid credentials
    When I enter my email "<email>"
    And I enter my password "<password>"
    And I click the login button
    Then I should see the message "<error_message>"

    Examples:
      | email                  | password  | error_message                                   |
      | testlogiciel@gmail.com | wrongpass | Incorrect email address or password             |
      | wrongemail@gmail.com   |    123456 | Incorrect email address or password             |
      |                        | wrongpass | Email address is required                       |
      | wrongemail@gmail.com   |           | Password is required                            |
      |                        |           | Email address is required, Password is required |
