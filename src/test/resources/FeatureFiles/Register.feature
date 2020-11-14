 Feature: Registration functionality Scenarios
  
  @Register @One
  Scenario: Verify whether the user is able to register into the application by providing all the details
  	Given I launch the application
  	And I navigate to Account Registeration page
  	When I provide all the below valid details
  	  | FirstName | GnanaPrakash                 |
     	| LastName  | Viswanathan                  |
  	  | Email     | vishwanathaprakash@gmail.com |
    	| Telephone | 9159624829                   |
    	| Password  | prakash                      |
  	And I select the Privacy Policy
  	And I click on Continue Button
  	Then I should see that the User account has successfully created
  	
  @Register @Two
  Scenario: Verify whether the user is not allowed to register on skipping the manadatory fields
  	 	Given I launch the application
  	  And I navigate to Account Registeration page
  	  When I click on Continue Button
  	  Then  I should see that the User Account is not created
  	  And I should see the error messages informing the user to fill the mandatory fields
  	  
  @Register @Three  
  Scenario: Verify whether the user is able to register into the application by opting for Newsletter subscription
  	Given I launch the application
  	And I navigate to Account Registeration page
  	When I provide all the below valid details
       	| FirstName | GnanaPrakash                 |
       	| LastName  | Viswanathan                  |
      	| Email     | vishwanathaprakash@gmail.com |
      	| Telephone | 9159624829                   |
       	| Password  | prakash                      |
  	And I select the Privacy Policy
  	And I subscribe to Newsletter
  	And I click on Continue Button
  	Then I should see that the User account has successfully created
  	
  @Register @Four
  Scenario: Verify whether the user is restricted from registring a duplicate account
  	 Given I launch the application
  	  And I navigate to Account Registeration page
  	  When I provide the below duplicate details
       	| FirstName | GnanaPrakash                 |
       	| LastName  | Viswanathan                  |
      	| Email     | vishwanathaprakash@gmail.com |
      	| Telephone | 9159624829                   |
       	| Password  | prakash                      |
  	  And I select the Privacy Policy
  	  And I click on Continue Button
  		Then I should see the warning message stating that the user is already created