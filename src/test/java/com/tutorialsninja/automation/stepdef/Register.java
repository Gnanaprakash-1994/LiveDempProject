package com.tutorialsninja.automation.stepdef;



import org.junit.Assert;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.AccountSuccessPage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.RegisterPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class Register {
	
	HeadersSection headersSection = new HeadersSection();
	RegisterPage registerPage = new RegisterPage();
	AccountSuccessPage accountSuccessPage = new AccountSuccessPage();
    
	@Given("^I launch the application$")
	public void I_launch_the_application () {
		
		Base.driver.get(Base.reader.getUrl());
		
	}
	
	@And("^I navigate to Account Registeration page$")
	public void I_navigate_to_Account_Registeration_page () {
		
		Elements.click(HeadersSection.MyAccountLink);
		Elements.click(HeadersSection.register);
		
	}
	
	@When("^I provide all the below valid details$")
	public void I_provide_all_the_below_valid_details (DataTable dataTable) {
		
	       RegisterPage.enterAllDetails(dataTable,"unique");
	
	}
	
	@And("^I select the Privacy Policy$")
	public void I_select_the_Privacy_Policy () {
		
		Elements.click(RegisterPage.privacyPolicy);
		
	}
	
	@And("^I click on Continue Button$")
	public void I_click_on_Continue_Button () {
		
		Elements.click(RegisterPage.continueButton);
	}
	
	@Then("^I should see that the User account has successfully created$")
	public void I_should_see_that_the_User_account_has_successfully_created () {
		
		Assert.assertTrue(Elements.isDisplayed(AccountSuccessPage.successBreadcrumb));
		
	}
	
	@Then("^I should see that the User Account is not created$")
	public void i_should_see_that_the_User_Account_is_not_created()  {
	   
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.registerBreadCrumb));
		
	}
    
	@And("^I should see the error messages informing the user to fill the mandatory fields$")
	public void i_should_see_the_error_messages_informing_the_user_to_fill_the_mandatory_fields()  {
	  
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.firstNameWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.lastNameWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.emailWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.telephoneWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.passwordWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.mainWarning));
	}
	
	@And("^I subscribe to Newsletter$")
	public void i_subscribe_to_Newsletter() {
	    
		Elements.click(RegisterPage.yesToNewsletter);
		
	}

	@When("^I provide the below duplicate details$")
	public void i_provide_the_below_duplicate_details(DataTable dataTable) {
	    
		RegisterPage.enterAllDetails(dataTable,"duplicate");
		
	}

	@Then("^I should see the warning message stating that the user is already created$")
	public void i_should_see_the_warning_message_stating_that_the_user_is_already_created() {
	    
		Assert.assertTrue(Elements.VerifyTextEquals(RegisterPage.mainWarning,"Warning: E-Mail Address is already registered!" ));
	}

	
}
