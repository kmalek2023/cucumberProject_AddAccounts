$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/Dashboard.feature");
formatter.feature({
  "name": "Dashboard page load validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dashboardFeature"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1- List Accounts link is clicked successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dashboardPageValidation"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to land dashBoard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1- List Accounts link is clicked successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dashboardFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@dashboardPageValidation"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to land dashBoard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_should_be_able_to_land_dashBoard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/ListAccounts.feature");
formatter.feature({
  "name": "List Account Page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@listAccountFeature"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1 - User is able to create a new Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addAccountScenario1"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to land dashBoard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on List Account",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to land New Account page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on Add Account",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountName\u003e\" in the Account Name field",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the Description field",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cInitialBalance\u003e\" in the Initial Balance field",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the A/C Numbers field",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the Contact Person field",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.step({
  "name": "User validates account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountName",
        "description",
        "InitialBalance",
        "accountNumber",
        "contactPerson"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "Saving",
        "KM Description",
        "25000",
        "5588",
        "KM contact person"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1 - User is able to create a new Account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@listAccountFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@addAccountScenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to land dashBoard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_should_be_able_to_land_dashBoard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on List Account",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_clicks_on_List_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to land New Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_should_be_able_to_land_New_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Add Account",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_clicks_on_Add_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Saving\" in the Account Name field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_enters_in_the_Account_Name_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"KM Description\" in the Description field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_enters_in_the_Description_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"25000\" in the Initial Balance field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_enters_in_the_Initial_Balance_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5588\" in the A/C Numbers field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_enters_in_the_A_C_Numbers_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"KM contact person\" in the Contact Person field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_enters_in_the_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_clicks_on()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListAccountsStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/Login.feature");
formatter.feature({
  "name": "Codefios Login page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@codefiosLogin"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1- User should be able to login with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosLoginScenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to land dashBoard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1- User should be able to login with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosLogin"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@codefiosLoginScenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to land dashBoard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_should_be_able_to_land_dashBoard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/LoginDataFromDatabase.feature");
formatter.feature({
  "name": "Codefios Login page functionality validation with data from MySQL server",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@codefiosLoginUsingDatabase"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "1- User should be able to login with valid credential from DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@codefiosLoginUsingDatabase"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@codefiosLoginUsingDatabaseScenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"username\" from MySQL database",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_from_MySQL_database(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"password\" from MySQL database",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_from_MySQL_database(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to land dashBoard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DashboardStepDefinition.user_should_be_able_to_land_dashBoard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/NegativeLogin.feature");
formatter.feature({
  "name": "Codefios Login page negative functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@codefiosNegativeFeature"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1 - User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginNegativeScenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demo1@codefios.com",
        "abc123"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc124"
      ]
    },
    {
      "cells": [
        "demo1@codefios.com",
        "abc14"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1 - User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosNegativeFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@LoginNegativeScenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo1@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.User_should_remain_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1 - User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosNegativeFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@LoginNegativeScenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc124\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.User_should_remain_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1 - User should not be able to login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosNegativeFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@LoginNegativeScenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo1@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc14\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.User_should_remain_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "2 - User should not be able to login without credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginNegativeScenario2"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks OK on Alert",
  "keyword": "And "
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        "abc14"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "2 - User should not be able to login without credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosNegativeFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@LoginNegativeScenario2"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks OK on Alert",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_OK_on_Alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.User_should_remain_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "2 - User should not be able to login without credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosNegativeFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@LoginNegativeScenario2"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"abc14\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks OK on Alert",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_OK_on_Alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.User_should_remain_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "2 - User should not be able to login without credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@codefiosNegativeFeature"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@LoginNegativeScenario2"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.UserEnterTheUserName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_the_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks OK on Alert",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_OK_on_Alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should remain on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.User_should_remain_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});