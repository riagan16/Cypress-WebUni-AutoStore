/// <reference types="Cypress" />

//note the example is on the checkboxes
before(() => {
  // root-level hook
  cy.log("runs once before all tests");
});

beforeEach(() => {
  // root-level hook
  cy.log("runs before every test block");
});

afterEach(() => {
  // 
  cy.log("runs after each test block");
});

after(() => {
  // 
  cy.log("runs once all tests are done");
});
it("Example test1", () => {
    cy.log(('Example test1'));
})

it("Example test2", () => {
  cy.log(('Example test2'));
})


