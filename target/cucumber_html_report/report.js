$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality Scenario",
  "description": "",
  "id": "login-functionality-scenario",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9525851600,
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
  "duration": 5092932000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 1746989300,
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
  "duration": 574929900,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_login_successfully()"
});
formatter.result({
  "duration": 33347700,
  "status": "passed"
});
formatter.after({
  "duration": 2310544300,
  "status": "passed"
});
formatter.before({
  "duration": 6754101600,
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
  "duration": 7201943000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 418865400,
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
  "duration": 514763600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 37528300,
  "status": "passed"
});
formatter.after({
  "duration": 709638600,
  "status": "passed"
});
formatter.before({
  "duration": 5674395000,
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
  "duration": 4720130200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 403270200,
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
  "duration": 410493300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 29593700,
  "status": "passed"
});
formatter.after({
  "duration": 1232857500,
  "status": "passed"
});
formatter.before({
  "duration": 5772848100,
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
  "duration": 4837520000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_Page()"
});
formatter.result({
  "duration": 560809200,
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
  "duration": 1070404300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_User_that_information_related_to_resetting_password_have_been_sent_to_email_address()"
});
formatter.result({
  "duration": 30281100,
  "status": "passed"
});
formatter.after({
  "duration": 705446400,
  "status": "passed"
});
formatter.uri("FeatureFiles/Orders.feature");
formatter.feature({
  "line": 1,
  "name": "End to end scenarios for placing orders",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6278740800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether user is able to place an order",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders;verify-whether-user-is-able-to-place-an-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Orders"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add a product to bag and checkout",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I place an order",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see that the order is placed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Orders.i_login_to_the_application()"
});
formatter.result({
  "duration": 6093911100,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_add_a_product_to_bag_and_checkout()"
});
formatter.result({
  "duration": 2147446700,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_place_an_order()"
});
formatter.result({
  "duration": 4783898400,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_should_see_that_the_order_is_placed_successfully()"
});
formatter.result({
  "duration": 1219340600,
  "status": "passed"
});
formatter.after({
  "duration": 1050288800,
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
  "duration": 9877921300,
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
  "duration": 2801201100,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 882440200,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 444242900,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 64046100,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 410793600,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 43421000,
  "status": "passed"
});
formatter.after({
  "duration": 1177738200,
  "status": "passed"
});
formatter.before({
  "duration": 7195241200,
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
  "duration": 4759136300,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 957289800,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 323438900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 43447500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_user_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 166320800,
  "status": "passed"
});
formatter.after({
  "duration": 749816400,
  "status": "passed"
});
formatter.before({
  "duration": 6853954400,
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
  "duration": 3712091200,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 979558400,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 525911500,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 74858300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 78182600,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 411138100,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 74646800,
  "status": "passed"
});
formatter.after({
  "duration": 895396600,
  "status": "passed"
});
formatter.before({
  "duration": 5204715800,
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
  "duration": 4746934600,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_navigate_to_Account_Registeration_page()"
});
formatter.result({
  "duration": 941661200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details(DataTable)"
});
formatter.result({
  "duration": 478468300,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 67539600,
  "status": "passed"
});
formatter.match({
  "location": "Register.I_click_on_Continue_Button()"
});
formatter.result({
  "duration": 309208500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_warning_message_stating_that_the_user_is_already_created()"
});
formatter.result({
  "duration": 28290000,
  "status": "passed"
});
formatter.after({
  "duration": 771708600,
  "status": "passed"
});
formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality Scenarios",
  "description": "",
  "id": "search-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6013117000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify whether the User is able to search for the products",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-able-to-search-for-the-products",
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
  "line": 6,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I search for a product \"Samsung SyncMaster 941BW\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the product in the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 4723890900,
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
  "duration": 505706800,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_results()"
});
formatter.result({
  "duration": 42391200,
  "status": "passed"
});
formatter.after({
  "duration": 1647872800,
  "status": "passed"
});
formatter.before({
  "duration": 5287178700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify whether the User is informed when the product being searched is not available",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-informed-when-the-product-being-searched-is-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Search"
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
  "name": "I search for a product \"Apple iPhone\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see a message informing \"There is no product that matches the search criteria.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_launch_the_application()"
});
formatter.result({
  "duration": 4067301300,
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
  "duration": 405200000,
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
  "duration": 37193600,
  "status": "passed"
});
formatter.after({
  "duration": 691111300,
  "status": "passed"
});
});