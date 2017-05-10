Feature: Home page

  I want to display the Home page

  @Test
  Scenario: The home page displays a welcome message
    Given that the home page is opened
    Then it displays the welcome message 'app works!'
