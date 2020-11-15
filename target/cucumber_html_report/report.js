$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality Scenario",
  "description": "",
  "id": "login-functionality-scenario",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6940274900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to login with valid credentials",
  "description": "",
  "id": "login-functionality-scenario;verify-whether-the-user-is-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
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
  "name": "I navigate to Account Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I login to the application using Username \"vishwanathaprakash@gmail.com\" and Password \"prakash\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see that the User is able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 3815032601,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 1446933700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishwanathaprakash@gmail.com",
      "offset": 43
    },
    {
      "val": "prakash",
      "offset": 87
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 2922066000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_login_successfully()"
});
formatter.result({
  "duration": 32751401,
  "status": "passed"
});
formatter.after({
  "duration": 760569400,
  "status": "passed"
});
formatter.before({
  "duration": 6065738699,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify whether the User is not able to login with invalid credentials",
  "description": "",
  "id": "login-functionality-scenario;verify-whether-the-user-is-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    },
    {
      "line": 10,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to Account Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I login to the application using Username \"vishwanathaprakash99@gmail.com\" and Password \"prakash99\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see an error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 3216341500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 1335534600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishwanathaprakash99@gmail.com",
      "offset": 43
    },
    {
      "val": "prakash99",
      "offset": 89
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 1580128500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 31512401,
  "status": "passed"
});
formatter.after({
  "duration": 777815401,
  "status": "passed"
});
formatter.before({
  "duration": 7024122901,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether the user is not able to login without providing credentials",
  "description": "",
  "id": "login-functionality-scenario;verify-whether-the-user-is-not-able-to-login-without-providing-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to Account Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I login to the application using Username \"\" and Password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see an error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 2865787000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 1478720000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 1553928500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 25115900,
  "status": "passed"
});
formatter.after({
  "duration": 738322399,
  "status": "passed"
});
formatter.before({
  "duration": 6150976400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify whether the user is able to reset the forgotten password",
  "description": "",
  "id": "login-functionality-scenario;verify-whether-the-user-is-able-to-reset-the-forgotten-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    },
    {
      "line": 24,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I navigate to Account Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I reset the forgotten password for email \"vishwanathaprakash@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see a message informing the User that information related to resetting password have been sent to email address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 2259571799,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 1628456100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishwanathaprakash@gmail.com",
      "offset": 42
    }
  ],
  "location": "Login.i_reset_the_forgotten_password_for_email(String)"
});
formatter.result({
  "duration": 4083112800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_User_that_information_related_to_resetting_password_have_been_sent_to_email_address()"
});
formatter.result({
  "duration": 28034001,
  "status": "passed"
});
formatter.after({
  "duration": 1566710800,
  "status": "passed"
});
formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality Scenarios",
  "description": "",
  "id": "registration-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6606999700,
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
  "duration": 3004787399,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 3348762500,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 422906900,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 78202801,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 2495122300,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 43305100,
  "status": "passed"
});
formatter.after({
  "duration": 771450200,
  "status": "passed"
});
formatter.before({
  "duration": 6067828000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether the user is not allowed to register on skipping the manadatory fields",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-not-allowed-to-register-on-skipping-the-manadatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Register"
    },
    {
      "line": 17,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to Account Registeration page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Continue Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see that the User Account is not created",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should see the error messages informing the user to fill the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 3234018499,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 1530614400,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 1573202100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 46465800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_user_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 171615800,
  "status": "passed"
});
formatter.after({
  "duration": 947219800,
  "status": "passed"
});
formatter.before({
  "duration": 6564829300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify whether the user is able to register into the application by opting for Newsletter subscription",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-opting-for-newsletter-subscription",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Register"
    },
    {
      "line": 25,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I navigate to Account Registeration page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "GnanaPrakash"
      ],
      "line": 30
    },
    {
      "cells": [
        "LastName",
        "Viswanathan"
      ],
      "line": 31
    },
    {
      "cells": [
        "Email",
        "vishwanathaprakash@gmail.com"
      ],
      "line": 32
    },
    {
      "cells": [
        "Telephone",
        "9159624829"
      ],
      "line": 33
    },
    {
      "cells": [
        "Password",
        "prakash"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I subscribe to Newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see that the User account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 3306950600,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 2765813199,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 421912700,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 82101800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 73666301,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 2210419901,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 37776700,
  "status": "passed"
});
formatter.after({
  "duration": 1242881899,
  "status": "passed"
});
formatter.before({
  "duration": 8338542001,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify whether the user is restricted from registring a duplicate account",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-restricted-from-registring-a-duplicate-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Register"
    },
    {
      "line": 40,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I navigate to Account Registeration page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I provide the below duplicate details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "GnanaPrakash"
      ],
      "line": 45
    },
    {
      "cells": [
        "LastName",
        "Viswanathan"
      ],
      "line": 46
    },
    {
      "cells": [
        "Email",
        "vishwanathaprakash@gmail.com"
      ],
      "line": 47
    },
    {
      "cells": [
        "Telephone",
        "9159624829"
      ],
      "line": 48
    },
    {
      "cells": [
        "Password",
        "prakash"
      ],
      "line": 49
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see the warning message stating that the user is already created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 3657345100,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 1789002999,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details(DataTable)"
});
formatter.result({
  "duration": 418890299,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 75689600,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 1325583500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_warning_message_stating_that_the_user_is_already_created()"
});
formatter.result({
  "duration": 33458200,
  "status": "passed"
});
formatter.after({
  "duration": 743572501,
  "status": "passed"
});
formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search funstionality Scenarios",
  "description": "",
  "id": "search-funstionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6830368800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to search for the products",
  "description": "",
  "id": "search-funstionality-scenarios;verify-whether-the-user-is-able-to-search-for-the-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Search"
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
  "name": "I search for a product \"Samsung SyncMaster 941BW\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the product in the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 3353539800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung SyncMaster 941BW",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 1677008000,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_results()"
});
formatter.result({
  "duration": 47856599,
  "status": "passed"
});
formatter.after({
  "duration": 1872952000,
  "status": "passed"
});
formatter.before({
  "duration": 6712808501,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify whether the User is informed when the product being searched is not available",
  "description": "",
  "id": "search-funstionality-scenarios;verify-whether-the-user-is-informed-when-the-product-being-searched-is-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Search"
    },
    {
      "line": 9,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search for a product \"Apple iPhone\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see a message informing \"There is no product that matches the search criteria.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 2639402400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 1310290800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is no product that matches the search criteria.",
      "offset": 34
    }
  ],
  "location": "Search.i_should_see_a_message_informing(String)"
});
formatter.result({
  "duration": 25548701,
  "status": "passed"
});
formatter.after({
  "duration": 769547200,
  "status": "passed"
});
});