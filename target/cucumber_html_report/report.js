$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality Scenarios",
  "description": "",
  "id": "registration-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17416409200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the user is able to register into the application by providing all the details",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-providing-all-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Account Registeration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "GnanaPrakash"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Viswanathan"
      ],
      "line": 9
    },
    {
      "cells": [
        "Email",
        "vishwanathaprakash@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Telephone",
        "9159624829"
      ],
      "line": 11
    },
    {
      "cells": [
        "Password",
        "prakash"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see that the User account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 4655045400,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 673100,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 8900,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 8200,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 8300,
  "status": "passed"
});
formatter.after({
  "duration": 1768520900,
  "status": "passed"
});
});