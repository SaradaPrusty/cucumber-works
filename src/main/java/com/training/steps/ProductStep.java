package com.training.steps;


import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProductStep {

	@When("^the internet connection is up$")
	public void the_internet_connection_is_up() throws Throwable {
	    System.out.println("#######Internet connection is UP#######");
	}
	

	@Given("^the browser is launched$")
	public void the_browser_is_launched() throws Throwable {
	   System.out.println("****the browser is launched*****");
	}

	@Given("^enter the login details are given$")
	public void enter_the_login_details_are_given(DataTable UserDetails) throws Throwable {
		System.out.println("****enter the login details are given****");
		// import java.List.util not any other package. 
		// In the below statement we are assigning UserDetails variable to a loacl list variable and mapping the string class
		List<Map<String, String>> list = UserDetails.asMaps(String.class, String.class);
		
		// Here we are re assigning list to temp variabel and printint all the username and password
		for (Map<String, String> temp: list) {
			System.out.println("Ther user name is " + temp.get("username"));
			System.out.println("The Pass is " +temp.get("password"));
			
		}
	}

	@When("^the product is \"([^\"]*)\"$")
	public void the_product_is(String arg1) throws Throwable {
	    System.out.println("*****the product is selected*****");
	}

	@Then("^the VPN product catalog is \"([^\"]*)\"$")
	public void the_VPN_product_catalog_is(String arg1) throws Throwable {
	   System.out.println("****the VPN product catalog is selected****");
	}

	@Then("^select product from the list$")
	public void select_product_from_the_list() throws Throwable {
	   System.out.println("****select product from the list****");
	}
	
	@When("^user is valid$")
	public void user_is_valid() throws Throwable {
	    System.out.println("User is valid");
	}
	
	@Then("^say Hi$")
	public void say_Hi() throws Throwable {
	    System.out.println("say Hi");
	}
	
}
