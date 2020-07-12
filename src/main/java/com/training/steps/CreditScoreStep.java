package com.training.steps;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreditScoreStep {

	@Given("^You have enough credit score$")
	public void you_have_enough_credit_score(DataTable data) throws Throwable {
		System.out.println("You have enough credit score>>>>>>>");
		//ctrl + 2 + l (To define the list variable as a string type OR you can hove the mouse over asMaps you will see the List type
		List<Map<String, String>> list1 = data.asMaps(String.class, String.class); // data is a method and asMaps are diff functions to that. if you hover around
												// they key and value it will show that there are class types. so we know we are sending string
												// For that we will keep here string.class in both the key and values.
	  //  System.out.println(list1.get(0).get("work_type"));	
	  //  System.out.println(list1.get(1).get("work_type"));	
	  //  System.out.println(list1.get(2).get("work_type"));	
		for (Map<String, String> temp : list1) {
			System.out.println("work type is " +temp.get("work_type"));
		}
		for(Map<String, String> temp1 : list1) {
			System.out.println("Experience in Years "+ Integer.parseInt(temp1.get("years_of_exp")));
		}
		
	}

	@When("^you apply for a loan$")
	public void you_apply_for_a_loan() throws Throwable {
		System.out.println("you apply for a loan>>>>>>>>");
	   
	}

	@Then("^Loan is sanctioned$")
	public void loan_is_sanctioned() throws Throwable {
	   System.out.println("Loan is sanctioned>>>>>>>>>>>..");
	}
}
