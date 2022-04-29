Feature: "The Batman" Movie Ranking

  Scenario Outline: As a user, I should be able the see the ranking of the movie "8.1"
    Given I am on the home page
    When on the navbar I search "The Batman"
    Then on the page I select "Batman" movie
    Then I should see that the ranking is "8,1"