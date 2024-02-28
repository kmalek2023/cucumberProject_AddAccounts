@codefiosLoginUsingDatabase @regression
Feature: Codefios Login page functionality validation with data from MySQL server

  @codefiosLoginUsingDatabaseScenario1 @smoke
  Scenario: 1- User should be able to login with valid credential from DB
    Given User is on the Codefios login page
    When  User enters "username" from MySQL database
    When  User enters "password" from MySQL database
    And   User clicks on sign in button
    Then  User should be able to land dashBoard page
