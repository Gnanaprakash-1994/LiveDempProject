package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class HeadersSection {
    
	public HeadersSection() {
		
		PageFactory.initElements(Base.driver,this);
	  
	}
	
	@FindBy(xpath="//span[text()=\"My Account\"]")
	public static WebElement MyAccountLink;
	
	@FindBy(linkText="Register")
	public static WebElement register;
	
	@FindBy(linkText="Login")
	public static WebElement login;
	
	@FindBy(name="search")
	public static WebElement searchBoxField;
	
	@FindBy(css=".fa.fa-search")
	public static WebElement searchButton ;
	
	@FindBy(css=".row > .col-sm-5")
	public static WebElement viewShoppingCartOption ;
	
	public static void navigateToLoginPage() {
		
		Elements.click(MyAccountLink);
		Elements.click(login);
		
	}
	
	public static void searchProduct() {
		
		Elements.TypeText(searchBoxField, Base.reader.getProduct());
		Elements.click(searchButton);
	}
	
	public static void navigateToShoppingCartPage() {
		
	Elements.click(viewShoppingCartOption);
	
	}
}
