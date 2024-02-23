@listAccountFeature @regression
Feature: List Account Page functionality validation

  @addAccountScenario1
  Scenario Outline: 1 - User is able to create a new Account
    Given User is on the Codefios login page
    When User enters username as "<username>"
    When User enters the password "<password>"
    And User clicks on sign in button
    Then User should be able to land dashBoard page
    And User clicks on List Account
    Then User should be able to land New Account page
    And User clicks on Add Account
    And User enters "<accountName>" in the Account Name field
    And User enters "<description>" in the Description field
    And User enters "<InitialBalance>" in the Initial Balance field
    And User enters "<accountNumber>" in the A/C Numbers field
    And User enters "<contactPerson>" in the Contact Person field
    And User clicks on Save
    Then User validates account created successfully

    Examples: 
      | username          | password | accountName | description    | InitialBalance | accountNumber | contactPerson     |
      | demo@codefios.com | abc123   | Saving      | KM Description |          25000 |          5588 | KM_contact_person |
