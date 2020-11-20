package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class CheckOutPage {
	
	public CheckOutPage() {
		
		PageFactory.initElements(Base.driver, this);
		
	}
	

	
	@FindBy(css="input[type='button'][value='Continue']")
    public static WebElement continueButtonOfBillingDetailsSection; 
	
	@FindBy(id="button-shipping-address")
    public static WebElement continueButtonOfDeliveryDetailsSection; 
	
	@FindBy(id="button-shipping-method")
    public static WebElement continueButtonOfDeliverySection;
	
	@FindBy(css="input[name='agree']")
    public static WebElement termsButtonOfPaymentMethod;
	
	@FindBy(id="button-payment-method")
    public static WebElement continueButtonOfPaymentMethod;
	
	@FindBy(id="button-confirm")
    public static WebElement confirmButtonOfConfirmOrder;
	
	public static void PlaceAnOrder( ) {
		
        Elements.click(continueButtonOfBillingDetailsSection);
	    Elements.click(continueButtonOfDeliveryDetailsSection);
	    Elements.click(continueButtonOfDeliverySection);
	    Elements.click(termsButtonOfPaymentMethod);
	    Elements.click(continueButtonOfPaymentMethod);
	    Elements.click(confirmButtonOfConfirmOrder);
	    
	}
}
