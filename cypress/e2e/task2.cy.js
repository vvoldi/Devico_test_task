/// <reference types="cypress" />

describe("Find selectors", () => {
    beforeEach(() => {
        cy.visit("https://devico.io/");
    });
    it("xpath and css selectors", function () {
        cy.get("a.home-top-section__button-container .button").should("be.visible");
        cy.xpath("//a[@class='home-top-section__button-container']/div[@class='button']").should("be.visible");
    });
});
