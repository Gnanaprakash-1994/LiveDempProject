package com.tutorialsninja.automation.stepdef;

import com.tutorialsninja.automation.base.Base;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class Register {
    
	@Given("^I launch the application$")
	public void I_launch_the_application () {
		
		Base.driver.get(Base.reader.getUrl());
		
	}
	
	@And("^I navigate to Account Registeration page$")
	public void I_navigate_to_Account_Registeration_page () {
		
		
		
	}
	
	@When("^I provide all the below valid details$")
	public void I_provide_all_the_below_valid_details (DataTable dataTable) {
		
		
	}
	
	@And("^I select the Privacy Policy$")
	public void I_select_the_Privacy_Policy () {
		
		
		
	}
	
	@And("^I click on Continue Button$")
	public void I_click_on_Continue_Button () {
		
		
	}
	
	@Then("^I should see that the User account has successfully created$")
	public void I_should_see_that_the_User_account_has_successfully_created () {
		
		
	}
	
}
