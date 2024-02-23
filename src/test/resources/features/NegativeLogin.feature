@codefiosNegativeFeature @regression
Feature: Codefios Login page negative functionality validation

  @LoginNegativeScenario1 @smoke
  Scenario Outline: 1 - User should not be able to login with invalid credentials
    Given User is on the Codefios login page
    When User enters username as "<username>"
    When User enters the password "<password>"
    And User clicks on sign in button
    Then User should remain on Login page

    Examples: 
      | username           | password |
      | demo1@codefios.com | abc123   |
      | demo@codefios.com  | abc124   |
      | demo1@codefios.com | abc14    |

	@LoginNegativeScenario2 
  Scenario Outline: 2 - User should not be able to login without credentials
    Given User is on the Codefios login page
    When User enters username as "<username>"
    When User enters the password "<password>"
    And User clicks on sign in button
    And User clicks OK on Alert
    Then User should remain on Login page

    Examples: 
      | username          | password |
      | demo@codefios.com |          |
      |                   | abc14    |
      |                   |          |
