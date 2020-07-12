package com.training.testRunner;
// naveen.srinivas@manipalglobal.com

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//TestNG 
@RunWith(Cucumber.class)   // This is for running with JUNIT. if we will not give this line then only testNG with run 
@CucumberOptions(
		features = {"src/main/resources/com/training/features"},
		glue = {"com.training.steps","com.training.util"},	
		// com.training.util is added for glueing the Hooks package
		plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report"},
		//tags = {"@sanity","~@telecom","~@invalidLogin"},
		// tags will run at the seature level, if we give ~@tag that tag or feature will not run
		//tags = {"@creditscore"},
		tags= {"@sanity"},
		monochrome = true

		)



public class TestRunnerTestNG extends AbstractTestNGCucumberTests {
	// this class will not have any code 
}
