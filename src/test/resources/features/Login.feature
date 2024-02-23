@codefiosLogin @regression
Feature: Codefios Login page functionality validation

  @codefiosLoginScenario1 @smoke
  Scenario Outline: 1- User should be able to login with valid credential
    Given User is on the Codefios login page
    When  User enters username as "<username>"
    When User enters the password "<password>"
    And   User clicks on sign in button
    Then  User should be able to land dashBoard page

 
 Examples: 
      | username           | password |
      | demo@codefios.com  |  abc123  |