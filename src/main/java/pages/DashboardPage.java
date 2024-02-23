package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage extends TestBase{

	WebDriver driver;
	public DashboardPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how=How.XPATH, using= "//strong[contains(text(), 'Dashboard')]") public WebElement DASHBOARD_VALIDATION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'List Accounts')]") public WebElement LIST_ACCOUNT_ELEMENT;
//	@FindBy(how = How.XPATH, using = "//a[@title = 'List Accounts']") public WebElement LIST_ACCOUNT_ELEMENT;


	public void clickOnListAccount() {
		LIST_ACCOUNT_ELEMENT.click();
	}
	
	public String getDashboardText(){
		return DASHBOARD_VALIDATION_ELEMENT.getText();
	}
}
