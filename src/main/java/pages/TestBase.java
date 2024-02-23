package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	//declaring reference variable
	public static WebDriver driver;
	 
	public static void initDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
//	public static void takeScreenshot(WebDriver driver) {
//		TakesScreenshot ts = (TakesScreenshot)driver;
//		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
//		
//		// to save the screenshot ----System.getProperty("user.dir") +  "/Screenshots/" + fileName + ".png"
//	
//	try {
//		FileUtils.copyFile(sourceFile, new File( System.getProperty("user.dir")+ "/Screenshots/" + System.currentTimeMillis() + ".png"));
//	} catch (IOException e) {
//		e.printStackTrace();
//	} 
			
				
		
//	}
	


}
