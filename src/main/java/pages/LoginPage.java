package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class LoginPage{
	WebDriver driver;
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	

	// WebElements/Attributes
	@FindBy(how = How.XPATH, using = "//input[@name='user_name']") WebElement USER_NAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@type='password']")  WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@type='submit']")   WebElement SIGN_IN_BUTTON_ELEMENT;

	// Methods to interact with the elements
	public void enterUserName(String userName) {
		USER_NAME_ELEMENT.sendKeys(userName);
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterPassword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickSignInButton() {
		SIGN_IN_BUTTON_ELEMENT.click();

		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickOnPopUpAlert() {
		driver.switchTo().alert().accept();
		USER_NAME_ELEMENT.clear();
		PASSWORD_ELEMENT.clear();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

}
