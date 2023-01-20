package com.virgingames.cucumber.steps;

import com.virgingames.pages.HomePage;
import com.virgingames.pages.OnlineSlotTabPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class OnlineSlotTabSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Online Slot tab$")
    public void iClickOnOnlineSlotTab() {
        new HomePage().clickOnCookiesAcceptPopup();
        new HomePage().clickOnOnlineSlotTab();
    }

    @And("^I should navigate to Online Slot tab successfully$")
    public void iShouldNavigateToOnlineSlotTabSuccessfully() {

    }


    @Then("^Verify text \"([^\"]*)\"$")
    public void verifyText(String textMessage)  {
        Assert.assertEquals("Text not matching",textMessage,new OnlineSlotTabPage().verifyGetTextFromOnlineSlotTab());
    }
}
