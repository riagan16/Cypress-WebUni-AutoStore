/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Challenge: " + linkText.text())
        })
        ////a[contains(@href,'contact')]
        //cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide discount?")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test is done")
    });

})