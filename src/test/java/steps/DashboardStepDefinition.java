package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.Then;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.TestBase;

public class DashboardStepDefinition extends TestBase {

	DashboardPage dashboardPage;

	@Then("User should be able to land dashBoard page")
	public void user_should_be_able_to_land_dashBoard_page() {

		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		String actualTitle = "Dashboard";
		String expectedTitle = dashboardPage.getDashboardText();
		;
		Assert.assertEquals("Dashboard page are not found", expectedTitle, actualTitle);
		try {
			Thread.sleep(3000);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("User clicks on List Account")
	public void user_clicks_on_List_Customer() {
		dashboardPage.clickOnListAccount();

	}

}
