import {app_open,} from '../support/utils';

describe('Check search functional', function () {

    beforeEach(function () {
        app_open();
        cy.get(".App-column>div").as("column");
        cy.get("@column").eq(0).as("first_column");
    });


    it('check search functional for first city', function () {
        cy.get('@first_column').find(".CrewMemeber-name").find("div").eq(1)
            .invoke('text').then((yourDivText) => {
            cy.get("#city").type(yourDivText);
            cy.get('[type="submit"]').click();

            cy.get('@first_column').find(".CrewMemeber-name")
                .find("div").eq(1).invoke('text').should('eq', 'hereford');
        });
    });

    it('check clear button', function () {
        cy.get("#city").type("test");
        cy.get('[type="submit"]').click();
        cy.get("@first_column").find(".CrewMember-container")
            .should("have.length", 0);
        cy.get('[type="button"]').click();
        cy.get("@first_column").find(".CrewMember-container")
            .should("have.length", 4);
    });

});
