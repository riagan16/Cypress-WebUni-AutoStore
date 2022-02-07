/// <reference types="Cypress" />

describe("Inspect Automation Test Store using chain of commands", () => {
    it("Click on the first item using the item header", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });
    //the upper one is too long 
    it.only("Click on the first item using the item text", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log("Selected the following item " + itemHeaderText.text())
        })
    });
    
    it("Click on the first item using the index", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });

    //not chaining command but trying to use selectorhub
    it.only("Click on the first item using the index", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[title='Skinsheen Bronzer Stick']").click()
    });

})