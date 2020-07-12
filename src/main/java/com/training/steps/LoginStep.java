package com.training.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//this will contain any Business Logic
//it will have selenium code 

public class LoginStep {
	
	@Given("the web application is loaded")
	public void the_web_application_is_loaded() {
		System.out.println("the web application is loaded>>>>>>>");
	}
	
	@When("the user logs in with user name")
	public void the_user_logs_in_with_user_name() {
		System.out.println("the user logs in with user name>>>>>>>");
	}
	
	@And ("the password is entered")
	public void the_password_is_entered() {
		System.out.println("the password is entered>>>>>");
	}

		// the user is valid 
		// the user is invalid 
		// the user is manager 
		// the user is ceo 
		// Due to different values of the user we are going to create \"([a-zA-Z]{1,})\"$ this type of annotations
							/*
							 * + - One or more occrances 
						* - Zero or more occurances 
						? - zero or one occurance 
						[a-z] - look for a-z for 1 char 
						[a-z]+ - look for a-z  for 1 or more occurance 
						[a-z]* - look for a-z for 0 or more occurance 
						. - look for excatly 1 occurance 
						{} - to specify number of words 
							 */
	@When ("^the user is \"([a-zA-Z]{1,})\"$") //^$ these two represent starting and ending of a line. it is a good practise to write like this
	public void the_user_type(String type) {	// {1,}--> This means we are searching for minimum one occurence of a word and we are parsing the whole \"([a-zA-Z]{1,})\ as a type local variable
		System.out.println("the user is " +type+ ">>>>>>>");
	}
	
	@Then ("^take the user to \"([a-zA-Z]{1,})\" page$") // Extra\ is given to make " a statement or char inside double colon
	public void take_the_user_to_user_page(String userPage) {
		System.out.println("take the user to " +userPage+ "page>>>>>>");
	}
	
	
}
