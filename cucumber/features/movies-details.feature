Feature: "The Batman" Movie Details Page

  Scenario Outline: As a user, I should be able the see if director is Matt Reeves & and than Robert Pattison is 1 of the "Stars"
    Given I am on the home page
    And on the navbar I search "The Batman"
    When on the page I select "The Batman"
    Then I should see the director "Matt Reeves" 
    Then  I should see the star "Robert Pattison"
        
