package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage;

	@Before
	public void setUp() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("User is on the Codefios login page")
	public void UserIsOnTheCodefiosLoginPage() {
		driver.get("https://codefios.com/ebilling/login");
		try {
			Thread.sleep(3000);
		} catch (Exception e) {
		
			e.printStackTrace();
		}
	}

	@When ("User enters username as {string}")
	public void UserEnterTheUserName(String username) {
		loginPage.enterUserName(username);
	}

	@When("User enters the password {string}")
	public void user_enter_the_password(String password) {
		loginPage.enterPassword(password);
	}

	@When("User clicks on sign in button")
	public void user_click_on_sign_in_button() {
		loginPage.clickSignInButton();
		try {
			Thread.sleep(3000);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
	@Then ("User should remain on Login page")
	public void User_should_remain_on_Login_page() {
		String actualTitle = "Welcome To Codefios";
		String expectedTitle = loginPage.getPageTitle();
		Assert.assertEquals("Titles are not matching", expectedTitle, actualTitle);
	}
	
	
	@When("User clicks OK on Alert")
	public void user_clicks_OK_on_Alert() {
		driver.switchTo().alert().accept();
		
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}