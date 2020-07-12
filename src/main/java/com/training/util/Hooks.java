package com.training.util;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	// Hooks doesn't created inside feature files. It usually created outside of feature file. so for now we have created one 
	//extra package and placed Hooks code. It will have @Before and @After annotations to specify the before and after methids
	// Hooks are like global values. they will run globally like pre condition and post condition
	@Before
	public void setup() {
		System.out.println("@@@@@@**This is setup which will run before all the tests@@@@@@@");
	}
	@After
	public void tearDown() {
		System.out.println("@@@@@@@This is the end function if all the steps@@@@@@@");
	}
	
	// Only for tags
	@Before("@product")
	public void setupProduct() {
		System.out.println("@@@@@@**This is setup which will run before all the tests for product@@@@@@@");
	}
	@After("@product")
	public void tearDownProduct() {
		System.out.println("@@@@@@@This is the end function if all the steps for product@@@@@@@");
	}
}


