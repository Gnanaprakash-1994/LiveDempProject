package com.tutorialsninja.automation.stepdef;







import org.junit.Assert;

import com.tutorialsninja.automation.framework.Browser;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.framework.Waits;
import com.tutorialsninja.automation.pages.CheckOutPage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.LoginPage;
import com.tutorialsninja.automation.pages.OrdersSuccessPage;
import com.tutorialsninja.automation.pages.SearchResultsPage;
import com.tutorialsninja.automation.pages.ShoppingCartPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;






public class Orders {
	
	HeadersSection headersSection = new HeadersSection();
	LoginPage loginPage = new LoginPage();
	SearchResultsPage searchResultsPage = new SearchResultsPage();
	ShoppingCartPage shoppingCartPage = new ShoppingCartPage();
	CheckOutPage checkOutPage = new CheckOutPage();
	OrdersSuccessPage ordersSuccessPage = new OrdersSuccessPage();

	@Given("^I login to the application$")
	public void i_login_to_the_application()  {
	   
		Browser.openApplicationURL();
		HeadersSection.navigateToLoginPage();
        LoginPage.doLogin();
	}

	@When("^I add a product to bag and checkout$")
	public void i_add_a_product_to_bag_and_checkout() {
	   
		HeadersSection.searchProduct();
		SearchResultsPage.addFirstProductInTheSearchResultsToCart();
		HeadersSection.navigateToShoppingCartPage();
		ShoppingCartPage.navigateToCheckOutPage();
	}

	@And("^I place an order$")
	public void i_place_an_order() {
	   
		CheckOutPage.PlaceAnOrder();
		
	}

	@Then("^I should see that the order is placed successfully$")
	public void i_should_see_that_the_order_is_placed_successfully()  {
	    
           Waits.waitUntilElementLocated(10, OrdersSuccessPage.successBreadcrumbs );    
		
			Assert.assertTrue(Elements.isDisplayed(OrdersSuccessPage.successBreadcrumbs));
   
	}
}
