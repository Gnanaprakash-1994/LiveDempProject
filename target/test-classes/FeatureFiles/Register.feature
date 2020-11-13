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