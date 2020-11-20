package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class SearchResultsPage {
	
	public SearchResultsPage() {
		
		PageFactory.initElements(Base.driver,this);
	}
	
	@FindBy(linkText="Samsung SyncMaster 941BW")
	public static WebElement samsungSyncMasterSearchResult;

	@FindBy(xpath="//div[@id='content']/p[.='There is no product that matches the search criteria.']")
	public static WebElement noResultsMessage;
	
	@FindBy(xpath="/html//div[@id='content']/div[3]//div[@class='button-group']/button[1]/span[.='Add to Cart']")
	public static WebElement firstAddToCartOption;
	
	public static void addFirstProductInTheSearchResultsToCart() {
		
    	Elements.click(firstAddToCartOption);
		
	}
}
