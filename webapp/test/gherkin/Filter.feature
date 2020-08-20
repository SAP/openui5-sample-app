Feature: Filtering
  Lorem ipsum

  Background:
    Given I have started the app
    And   I can see 2 items in the list

  Scenario: Filtering for 'Active' items
    When I filter for active items
    Then I can see 1 item in the list

  Scenario: Filtering for 'Completed' items
    When I filter for completed items
    Then I can see 1 item in the list
