import {app_open,} from '../support/utils';

describe('Open project and check that all work properly', function () {

    beforeEach(function () {
        app_open();
        cy.get(".App-column>div").as("column");
        cy.get("@column").eq(0).as("first_column");
        cy.get("@column").eq(1).as("second_column");
        cy.get("@column").eq(2).as("third_column");
    });


    it('loads the app', function () {
        cy.title().should('include', 'Crew applications')
    });

    it('move first item to the interviewing state', function () {
        cy.get("@first_column").find(".CrewMember-container")
            .should("have.length", 4);
        //todo add separate selectors for buttons
        cy.get("@first_column").find(".CrewMember-up").first().click();

        cy.get("@second_column").find(".CrewMember-container")
            .should("have.length", 1);
        cy.get("@first_column").find(".CrewMember-container")
            .should("have.length", 3);
    });


    it('move first item from applied to hired', function () {
        cy.get("@first_column").find(".CrewMember-up").first().click();
        cy.get("@second_column").find(".CrewMember-up").first().click();

        cy.get("@third_column")
            .find(".CrewMember-container")
            .should("have.length", 2);

        //validate second block
        cy.get("@second_column").find(".CrewMember-container")
            .should("have.length", 0);
        cy.get("@first_column").find(".CrewMember-container")
            .should("have.length", 3);
    });

    it('move all items from Applied column', function () {
        //todo implement function that check how much elements in column and call click required amount of times
        cy.get("@first_column").find(".CrewMember-up").first().click();
        cy.get("@first_column").find(".CrewMember-up").first().click();
        cy.get("@first_column").find(".CrewMember-up").first().click();
        cy.get("@first_column").find(".CrewMember-up").first().click();

        cy.get("@second_column").find(".CrewMember-container")
            .should("have.length", 4);
        cy.get("@third_column").find(".CrewMember-container")
            .should("have.length", 1);
    });

    it('move all items from Hired column', function () {
        cy.get("@third_column").find("button").first().click();
        cy.get("@third_column").find(".CrewMember-container")
            .should("have.length", 0);
    });

});
