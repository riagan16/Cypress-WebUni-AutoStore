/// <reference types="Cypress" />

describe("Verifying variables, cypress commands, and jquery commands", () => {
    it("Navigating to spesific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //the following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click()
        // skincareLink.click()

        //the following will pass but not recommended 
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click()
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click()

        //the right one because cypress order the order of execution
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare")
        
    });

    it("Navigating to spesific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        
        //following code will fail
        //const header = cy.get("h1 .maintext")
        //cy.log(header)

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })
    });

    it.only("Validate properties of the context", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        
        //uses cypress commands and chaining
        cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should('contain', "First name:")
        
        //jQuery Approach

        //EMbedded commands(closure)
    });

})