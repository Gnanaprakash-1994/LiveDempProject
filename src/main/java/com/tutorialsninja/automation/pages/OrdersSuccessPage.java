package com.tutorialsninja.automation.pages;


//import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class OrdersSuccessPage {

	public OrdersSuccessPage() {
		
		//Base.driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		
		PageFactory.initElements(Base.driver,this);
		
	}
	

	
	@FindBy(css="div#common-success > ul > li:nth-of-type(4) > a")
	public static WebElement successBreadcrumbs;
	
	
}
