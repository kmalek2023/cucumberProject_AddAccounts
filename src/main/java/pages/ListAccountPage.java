package pages;

import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ListAccountPage {
	WebDriver driver;

	public ListAccountPage(WebDriver driver) {
		driver = this.driver;
	}

	@FindBy(how = How.XPATH, using = "//strong[contains(text(), 'Account List')]")
	public WebElement ACCOUNT_LIST_HEADER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[contains(text(), 'Add Account')]")
	public WebElement ADD_ACCOUNT_BUTTON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id= 'account_name']")
	public WebElement ACCOUNT_NAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//textarea[@id= 'description']")
	public WebElement DESCRIPTION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@class= 'form-control balance']")
	public WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@name= 'account_number']")
	public WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id= 'contact_person']")
	public WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@id= 'accountSave']")
	public WebElement SAVE_BUTTON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Account Added Successfully.')]")
	public WebElement ACCOUNT_ADDED_SUCCESS_ALERT_ELEMENT;

	public String getListAccountTitle() {
		return ACCOUNT_LIST_HEADER_ELEMENT.getText();
	}

	public void clickAddAccount() {
		ADD_ACCOUNT_BUTTON_ELEMENT.click();
	}

	public void insertAcccountName(String accountName) {
		ACCOUNT_NAME_ELEMENT.sendKeys(accountName + generateRandomNumber(999));

	}

	public void insertDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}

	public void insertInitialBalance(String initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
	}

	public void insertAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber);
	}

	public void insertContactPerson(String contactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
	}

	public void clickSaveButton() {
		SAVE_BUTTON_ELEMENT.click();
	}

	public String getAccountAddedSuccessAlertText() {
		return ACCOUNT_ADDED_SUCCESS_ALERT_ELEMENT.getText();

	}

	private int generateRandomNumber(int boundNum) {
		Random num = new Random();
		return num.nextInt(boundNum);
	}

}
