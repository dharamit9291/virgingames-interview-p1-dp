package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
@FindBy(xpath = "//label[contains(text(),'Accept')]")
WebElement cookiesPolicyAccept;


@FindBy(xpath = "//span[contains(text(),'Online Slots')]")
    WebElement onlineSlotTab;

public void clickOnCookiesAcceptPopup(){
    clickOnElement(cookiesPolicyAccept);
    log.info("Accept cookies policy:" + cookiesPolicyAccept.toString());
}

public void clickOnOnlineSlotTab(){
    clickOnElement(onlineSlotTab);
    log.info("Click on online Slot Tab:" + onlineSlotTab.toString());

}

}
