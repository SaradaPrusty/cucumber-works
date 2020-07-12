package com.training.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TelecomStep {

		@Given("^the telephone is working$")
		public void the_telephone_is_working() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("the telephone is working<<<<<<<<<");
		    
		}
		
		@When("^the number is dialed$")
		public void the_number_is_dialed() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("the number is dialed<<<<<<<<<<");
		    
		}
		
		@When("^ring tone is heard$")
		public void ring_tone_is_heard() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("ring tone is heard<<<<<<<<<<");
		    
		}
		
		@Then("^the call is picked by recipient$")
		public void the_call_is_picked_by_recipient() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("the call is picked by recipient<<<<<<<<<");
		    
		}
		
		@Then("^there should not be a distrubance$")
		public void there_should_not_be_a_distrubance() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("there should not be a distrubance<<<<<<<<<<");
		    
		}

}
