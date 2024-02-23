@dashboardFeature @regression
Feature: Dashboard page load validation
  

  @dashboardPageValidation
  Scenario Outline: 1- List Accounts link is clicked successfully
		Given User is on the Codefios login page
    When  User enters username as "<username>"
    When User enters the password "<password>"
    And  User clicks on sign in button
    Then User should be able to land dashBoard page

 
 Examples: 
      | username           | password |
      | demo@codefios.com  |  abc123  |