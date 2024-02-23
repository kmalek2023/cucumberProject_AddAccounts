package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.ListAccountPage;
import pages.LoginPage;
import pages.TestBase;

public class ListAccountsDefinition extends TestBase {

	ListAccountPage listAccount;

	@Then("User should be able to land New Account page")
	public void user_should_be_able_to_land_New_Account_page() {
		listAccount = PageFactory.initElements(driver, ListAccountPage.class);
		String expectedTitle = "Account List";
		String actualTitle = listAccount.getListAccountTitle();
		Assert.assertEquals("List Account page not found!", expectedTitle, actualTitle);
	}

	@Then("User clicks on Add Account")
	public void user_clicks_on_Add_Account() {

		listAccount.clickAddAccount();

	}

	@Then("User enters {string} in the Account Name field")
	public void user_enters_in_the_Account_Name_field(String accountName) {
		listAccount.insertAcccountName(accountName);
	}

	@Then("User enters {string} in the Description field")
	public void user_enters_in_the_Description_field(String description) {
		listAccount.insertDescription(description);
	}

	@Then("User enters {string} in the Initial Balance field")
	public void user_enters_in_the_Initial_Balance_field(String InitialBalance) {
		listAccount.insertInitialBalance(InitialBalance);
	}

	@Then("User enters {string} in the A\\/C Numbers field")
	public void user_enters_in_the_A_C_Numbers_field(String accountNumber) {
		listAccount.insertAccountNumber(accountNumber);
	}

	@Then("User enters {string} in the Contact Person field")
	public void user_enters_in_the_field(String contactPerson) {
		listAccount.insertContactPerson(contactPerson);
	}

	@Then("User clicks on Save")
	public void user_clicks_on() {
		listAccount.clickSaveButton();
	}

	@Then("User validates account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
		String actualText = listAccount.getAccountAddedSuccessAlertText();
		String expectedText = "Account Added Successfully.";
		Assert.assertEquals("Success Alert is not matching", expectedText, actualText);

	}

}
