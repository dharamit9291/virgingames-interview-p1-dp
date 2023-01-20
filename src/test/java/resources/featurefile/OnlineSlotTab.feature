
Feature: Online Slot Tab Click
  As user I want to click on Online Slots tab


  Scenario Outline: User should able to click Online Slot tab successfully
    Given I am on homepage
    When I click on Online Slot tab
    And I should navigate to Online Slot tab successfully
    Then Verify text "<textMessage>"
    Examples:


      | textMessage                                  |
      | Your Favourite Online Slots All in One Place |

