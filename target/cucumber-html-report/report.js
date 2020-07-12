$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("creditscore.feature");
formatter.feature({
  "line": 2,
  "name": "This is a smple check for credit score",
  "description": "",
  "id": "this-is-a-smple-check-for-credit-score",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@creditscore"
    }
  ]
});
formatter.before({
  "duration": 217900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Just check if you can get load",
  "description": "",
  "id": "this-is-a-smple-check-for-credit-score;just-check-if-you-can-get-load",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "## Heading If we want to change the work_type one by one . we will use Data Table"
    }
  ],
  "line": 6,
  "name": "You have enough credit score",
  "rows": [
    {
      "cells": [
        "work_type",
        "years_of_exp"
      ],
      "line": 7
    },
    {
      "cells": [
        "govt",
        "10"
      ],
      "line": 8
    },
    {
      "cells": [
        "private",
        "12"
      ],
      "line": 9
    },
    {
      "cells": [
        "consultant",
        "9"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "you apply for a loan",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Loan is sanctioned",
  "keyword": "Then "
});
formatter.match({
  "location": "CreditScoreStep.you_have_enough_credit_score(DataTable)"
});
formatter.result({
  "duration": 125137700,
  "status": "passed"
});
formatter.match({
  "location": "CreditScoreStep.you_apply_for_a_loan()"
});
formatter.result({
  "duration": 656900,
  "status": "passed"
});
formatter.match({
  "location": "CreditScoreStep.loan_is_sanctioned()"
});
formatter.result({
  "duration": 96300,
  "status": "passed"
});
formatter.after({
  "duration": 227300,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# this is my comment"
    }
  ],
  "line": 3,
  "name": "to validate login",
  "description": "",
  "id": "to-validate-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 140500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "to check if the user is valid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user logs in with user name",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user is \"valid\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "take the user to \"home\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 150100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name()"
});
formatter.result({
  "duration": 84800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 87900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 13
    }
  ],
  "location": "LoginStep.the_user_type(String)"
});
formatter.result({
  "duration": 983500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    }
  ],
  "location": "LoginStep.take_the_user_to_user_page(String)"
});
formatter.result({
  "duration": 148200,
  "status": "passed"
});
formatter.after({
  "duration": 67800,
  "status": "passed"
});
formatter.before({
  "duration": 82500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "to check if the user is invalid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user logs in with user name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user is \"invalid\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "take the user to \"error\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 343200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name()"
});
formatter.result({
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 90600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 13
    }
  ],
  "location": "LoginStep.the_user_type(String)"
});
formatter.result({
  "duration": 155100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 18
    }
  ],
  "location": "LoginStep.take_the_user_to_user_page(String)"
});
formatter.result({
  "duration": 198200,
  "status": "passed"
});
formatter.after({
  "duration": 92300,
  "status": "passed"
});
formatter.before({
  "duration": 101900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "to check if the user is invalid",
  "description": "",
  "id": "to-validate-login;to-check-if-the-user-is-invalid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "the web application is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the user logs in with user name",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the password is entered",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user is \"manager\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "take the user to \"successmanager\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.the_web_application_is_loaded()"
});
formatter.result({
  "duration": 116100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_user_logs_in_with_user_name()"
});
formatter.result({
  "duration": 138100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.the_password_is_entered()"
});
formatter.result({
  "duration": 114800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manager",
      "offset": 13
    }
  ],
  "location": "LoginStep.the_user_type(String)"
});
formatter.result({
  "duration": 160300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successmanager",
      "offset": 18
    }
  ],
  "location": "LoginStep.take_the_user_to_user_page(String)"
});
formatter.result({
  "duration": 177700,
  "status": "passed"
});
formatter.after({
  "duration": 105100,
  "status": "passed"
});
formatter.uri("product.feature");
formatter.feature({
  "line": 2,
  "name": "to shop for the product",
  "description": "",
  "id": "to-shop-for-the-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@product"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the login details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 12
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 13
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the product is \"\u003cproduct_selected\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the VPN product catalog is \"\u003cloaded\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select product from the list",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;",
  "rows": [
    {
      "cells": [
        "product_selected",
        "loaded"
      ],
      "line": 20,
      "id": "to-shop-for-the-product;;;1"
    },
    {
      "cells": [
        "product selected",
        "loaded"
      ],
      "line": 21,
      "id": "to-shop-for-the-product;;;2"
    },
    {
      "cells": [
        "product selected",
        "not loaded"
      ],
      "line": 22,
      "id": "to-shop-for-the-product;;;3"
    },
    {
      "cells": [
        "product not selected",
        "loaded"
      ],
      "line": 23,
      "id": "to-shop-for-the-product;;;4"
    },
    {
      "cells": [
        "product not selected",
        "not loaded"
      ],
      "line": 24,
      "id": "to-shop-for-the-product;;;5"
    },
    {
      "cells": [
        "product selected not available",
        "loaded"
      ],
      "line": 25,
      "id": "to-shop-for-the-product;;;6"
    },
    {
      "cells": [
        "product selected not available",
        "not loaded"
      ],
      "line": 26,
      "id": "to-shop-for-the-product;;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 105700,
  "status": "passed"
});
formatter.before({
  "duration": 91300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios."
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the internet connection is up",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStep.the_internet_connection_is_up()"
});
formatter.result({
  "duration": 210300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the login details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 12
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 13
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the product is \"product selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the VPN product catalog is \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select product from the list",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 140200,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_details_are_given(DataTable)"
});
formatter.result({
  "duration": 577800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 194300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loaded",
      "offset": 28
    }
  ],
  "location": "ProductStep.the_VPN_product_catalog_is(String)"
});
formatter.result({
  "duration": 359500,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_product_from_the_list()"
});
formatter.result({
  "duration": 299100,
  "status": "passed"
});
formatter.after({
  "duration": 79600,
  "status": "passed"
});
formatter.after({
  "duration": 104600,
  "status": "passed"
});
formatter.before({
  "duration": 96500,
  "status": "passed"
});
formatter.before({
  "duration": 87800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios."
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the internet connection is up",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStep.the_internet_connection_is_up()"
});
formatter.result({
  "duration": 135600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the login details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 12
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 13
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the product is \"product selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the VPN product catalog is \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select product from the list",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 337100,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_details_are_given(DataTable)"
});
formatter.result({
  "duration": 525400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 395400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not loaded",
      "offset": 28
    }
  ],
  "location": "ProductStep.the_VPN_product_catalog_is(String)"
});
formatter.result({
  "duration": 280500,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_product_from_the_list()"
});
formatter.result({
  "duration": 225700,
  "status": "passed"
});
formatter.after({
  "duration": 188000,
  "status": "passed"
});
formatter.after({
  "duration": 179100,
  "status": "passed"
});
formatter.before({
  "duration": 366800,
  "status": "passed"
});
formatter.before({
  "duration": 196100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios."
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the internet connection is up",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStep.the_internet_connection_is_up()"
});
formatter.result({
  "duration": 269600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the login details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 12
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 13
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the product is \"product not selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the VPN product catalog is \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select product from the list",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 84400,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_details_are_given(DataTable)"
});
formatter.result({
  "duration": 257800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product not selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 347100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loaded",
      "offset": 28
    }
  ],
  "location": "ProductStep.the_VPN_product_catalog_is(String)"
});
formatter.result({
  "duration": 120100,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_product_from_the_list()"
});
formatter.result({
  "duration": 75200,
  "status": "passed"
});
formatter.after({
  "duration": 88700,
  "status": "passed"
});
formatter.after({
  "duration": 89500,
  "status": "passed"
});
formatter.before({
  "duration": 114600,
  "status": "passed"
});
formatter.before({
  "duration": 77800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios."
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the internet connection is up",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStep.the_internet_connection_is_up()"
});
formatter.result({
  "duration": 438400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the login details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 12
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 13
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the product is \"product not selected\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the VPN product catalog is \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select product from the list",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 344300,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_details_are_given(DataTable)"
});
formatter.result({
  "duration": 1633000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product not selected",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 118800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not loaded",
      "offset": 28
    }
  ],
  "location": "ProductStep.the_VPN_product_catalog_is(String)"
});
formatter.result({
  "duration": 277100,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_product_from_the_list()"
});
formatter.result({
  "duration": 10333900,
  "status": "passed"
});
formatter.after({
  "duration": 72500,
  "status": "passed"
});
formatter.after({
  "duration": 209000,
  "status": "passed"
});
formatter.before({
  "duration": 165500,
  "status": "passed"
});
formatter.before({
  "duration": 73500,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios."
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the internet connection is up",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStep.the_internet_connection_is_up()"
});
formatter.result({
  "duration": 143500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the login details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 12
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 13
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the product is \"product selected not available\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the VPN product catalog is \"loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select product from the list",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_details_are_given(DataTable)"
});
formatter.result({
  "duration": 258600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected not available",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 136400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loaded",
      "offset": 28
    }
  ],
  "location": "ProductStep.the_VPN_product_catalog_is(String)"
});
formatter.result({
  "duration": 107800,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_product_from_the_list()"
});
formatter.result({
  "duration": 138200,
  "status": "passed"
});
formatter.after({
  "duration": 74700,
  "status": "passed"
});
formatter.after({
  "duration": 58600,
  "status": "passed"
});
formatter.before({
  "duration": 73200,
  "status": "passed"
});
formatter.before({
  "duration": 54100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios."
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the internet connection is up",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStep.the_internet_connection_is_up()"
});
formatter.result({
  "duration": 77900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@product"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the login details are given",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "mintu",
        "secret123"
      ],
      "line": 12
    },
    {
      "cells": [
        "richa",
        "goswami333"
      ],
      "line": 13
    },
    {
      "cells": [
        "shrikant",
        "kanth1234"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the product is \"product selected not available\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the VPN product catalog is \"not loaded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select product from the list",
  "keyword": "And "
});
formatter.match({
  "location": "ProductStep.the_browser_is_launched()"
});
formatter.result({
  "duration": 78700,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.enter_the_login_details_are_given(DataTable)"
});
formatter.result({
  "duration": 979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product selected not available",
      "offset": 16
    }
  ],
  "location": "ProductStep.the_product_is(String)"
});
formatter.result({
  "duration": 97500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not loaded",
      "offset": 28
    }
  ],
  "location": "ProductStep.the_VPN_product_catalog_is(String)"
});
formatter.result({
  "duration": 154900,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.select_product_from_the_list()"
});
formatter.result({
  "duration": 71200,
  "status": "passed"
});
formatter.after({
  "duration": 41300,
  "status": "passed"
});
formatter.after({
  "duration": 43600,
  "status": "passed"
});
formatter.before({
  "duration": 65900,
  "status": "passed"
});
formatter.before({
  "duration": 48600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#Which you want to run for all scenarios. so The When condition which is under background will run for all the scenarios."
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the internet connection is up",
  "keyword": "When "
});
formatter.match({
  "location": "ProductStep.the_internet_connection_is_up()"
});
formatter.result({
  "duration": 131100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "",
  "description": "",
  "id": "to-shop-for-the-product;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user is valid",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "say Hi",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStep.user_is_valid()"
});
formatter.result({
  "duration": 154800,
  "status": "passed"
});
formatter.match({
  "location": "ProductStep.say_Hi()"
});
formatter.result({
  "duration": 292600,
  "status": "passed"
});
formatter.after({
  "duration": 230400,
  "status": "passed"
});
formatter.after({
  "duration": 89400,
  "status": "passed"
});
formatter.uri("telecom.feature");
formatter.feature({
  "line": 2,
  "name": "validating the user call details",
  "description": "",
  "id": "validating-the-user-call-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@telecom"
    }
  ]
});
formatter.before({
  "duration": 199000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# ClickonRun as and then click on run as 1 cucmber feature. You will get the step code methods. You don\u0027t have to write also"
    }
  ],
  "line": 5,
  "name": "to check if the user has dialed valid number",
  "description": "",
  "id": "validating-the-user-call-details;to-check-if-the-user-has-dialed-valid-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the telephone is working",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the number is dialed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "ring tone is heard",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the call is picked by recipient",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "there should not be a distrubance",
  "keyword": "But "
});
formatter.match({
  "location": "TelecomStep.the_telephone_is_working()"
});
formatter.result({
  "duration": 371200,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.the_number_is_dialed()"
});
formatter.result({
  "duration": 206400,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.ring_tone_is_heard()"
});
formatter.result({
  "duration": 261100,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.the_call_is_picked_by_recipient()"
});
formatter.result({
  "duration": 86900,
  "status": "passed"
});
formatter.match({
  "location": "TelecomStep.there_should_not_be_a_distrubance()"
});
formatter.result({
  "duration": 229500,
  "status": "passed"
});
formatter.after({
  "duration": 182900,
  "status": "passed"
});
});