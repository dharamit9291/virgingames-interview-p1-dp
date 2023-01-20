$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OnlineSlotTab.feature");
formatter.feature({
  "line": 2,
  "name": "Online Slot Tab Click",
  "description": "As user I want to click on Online Slots tab",
  "id": "online-slot-tab-click",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should able to click Online Slot tab successfully",
  "description": "",
  "id": "online-slot-tab-click;user-should-able-to-click-online-slot-tab-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Online Slot tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Online Slot tab successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify text \"\u003ctextMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "online-slot-tab-click;user-should-able-to-click-online-slot-tab-successfully;",
  "rows": [
    {
      "cells": [
        "textMessage"
      ],
      "line": 14,
      "id": "online-slot-tab-click;user-should-able-to-click-online-slot-tab-successfully;;1"
    },
    {
      "cells": [
        "Your Favourite Online Slots All in One Place"
      ],
      "line": 15,
      "id": "online-slot-tab-click;user-should-able-to-click-online-slot-tab-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11011335200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should able to click Online Slot tab successfully",
  "description": "",
  "id": "online-slot-tab-click;user-should-able-to-click-online-slot-tab-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Online Slot tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Online Slot tab successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify text \"Your Favourite Online Slots All in One Place\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineSlotTabSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 171670499,
  "status": "passed"
});
formatter.match({
  "location": "OnlineSlotTabSteps.iClickOnOnlineSlotTab()"
});
formatter.result({
  "duration": 723298700,
  "status": "passed"
});
formatter.match({
  "location": "OnlineSlotTabSteps.iShouldNavigateToOnlineSlotTabSuccessfully()"
});
formatter.result({
  "duration": 57701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Favourite Online Slots All in One Place",
      "offset": 13
    }
  ],
  "location": "OnlineSlotTabSteps.verifyText(String)"
});
formatter.result({
  "duration": 67415400,
  "status": "passed"
});
formatter.after({
  "duration": 839122800,
  "status": "passed"
});
});