package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OnlineSlotTabPage extends Utility {

    private static final Logger log = LogManager.getLogger(OnlineSlotTabPage.class.getName());

    public OnlineSlotTabPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h2[contains(text(),'Your Favourite Online Slots All in One Place')]")
    WebElement verifyGetText;

    public String verifyGetTextFromOnlineSlotTab(){
        log.info("Getting text from Online Slot Tab "+ verifyGetText.toString());
     return getTextFromElement(verifyGetText);

    }


}
