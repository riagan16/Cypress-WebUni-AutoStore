/// <reference types="Cypress" />

describe("Cypress web security", () => {

    it("Validate visiting two different domains", () => {
        cy.visit('https://webdriveruniversity.com')
        cy.visit("https://automationteststore.com/")
        //still will give an error on the first test case even though we've already add the "chromeWebSecurity": false
    });

    
    it("Validate visiting two different domains via user actions", () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
})