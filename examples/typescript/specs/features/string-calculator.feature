Feature: String Calculator

    Scenario: Pass as argument "" and outputs zero
        Given ""
        When add ""
        Then the output is 0

    Scenario: Pass as argument 1,2 and outputs 3
        Given 1,2
        When sum them
        Then the output is 3