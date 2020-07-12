package com.training.testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//this is for junit type reports
@RunWith(Cucumber.class)   // Have doubt in this line. why we are importing this one
@CucumberOptions(
		features = {"src/main/resources/com/training/features"},
		glue = {"com.training.steps"},
		plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report"},
		monochrome = true

		)
// features will conatin the path for the feature file
// glue will contain the path for the step file. Basically this Junit or TestRunner is the gluw b/w steps and Feature file in the console o/p
// plugins will help in generating the reports https://cucumber.io/docs/cucumber/reporting/
// pretty will make the output report look good where html will create the html report and will be savedto the target folder.
// Similarly the json plugin will save the jasonm report under target folder eith the specified name
// Monochrome will remover the unwanted *# spaces 0, ms etc all those

public class TestRunner {
	// this class will not have any code 
}
