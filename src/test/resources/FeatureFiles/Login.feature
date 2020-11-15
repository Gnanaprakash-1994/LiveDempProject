Feature: Login functionality Scenario
    
    @Login @One
		Scenario: Verify whether the User is able to login with valid credentials
				Given I launch the application
				And I navigate to Account Login Page
				When I login to the application using Username "vishwanathaprakash@gmail.com" and Password "prakash"
				Then I should see that the User is able to login successfully
				
		@Login @Two		
		Scenario:	Verify whether the User is not able to login with invalid credentials
					Given I launch the application
				  And I navigate to Account Login Page
				  When I login to the application using Username "vishwanathaprakash99@gmail.com" and Password "prakash99"
				  Then I should see an error message that the credentials are invalid
				  
		@Login @Three
		Scenario: Verify whether the user is not able to login without providing credentials
		 	   Given I launch the application
		 	   And I navigate to Account Login Page
		 	   When I login to the application using Username "" and Password ""
				 Then I should see an error message that the credentials are invalid
				 
		@Login @Four		 
		Scenario:	Verify whether the user is able to reset the forgotten password
		      Given I launch the application
		 	    And I navigate to Account Login Page
		 	    When I reset the forgotten password for email "vishwanathaprakash@gmail.com"
		 	    Then I should see a message informing the User that information related to resetting password have been sent to email address