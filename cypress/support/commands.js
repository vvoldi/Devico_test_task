Cypress.Commands.add("countOfAnimalsLegs", () => {
    let numberOflegsObj = {};
    cy.fixture("animals")
        .then((animal) => {
            if (cy.get(animal.chickens)) {
                numberOflegsObj.chickens = animal.chickens * 2;
            }
            if (cy.get(animal.pigs)) {
                numberOflegsObj.pigs = animal.pigs * 4;
            }
            if (cy.get(animal.cows)) {
                numberOflegsObj.cows = animal.cows * 4;
            }
        })
        .then(() => cy.log(Object.values(numberOflegsObj).reduce((a, b) => a + b, 0))); // 132
});
