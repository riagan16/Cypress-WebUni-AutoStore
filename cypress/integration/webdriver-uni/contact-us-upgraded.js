import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    const homePage_PO = new HomePage_PO;
    const contact_Us_PO = new Contact_Us_PO;
    
    before(function() {
        cy.fixture('example').then(function(data) {
        
            globalThis.data = data;
        })
    })
    beforeEach(function() {
        
        homePage_PO.visitHomepage();
        homePage_PO.clickOn_ContactUs_Button();

    })

    it("Should be able to submit a successful submission via contact us form", () => {        
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')

        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, data.email, "First comment", 'h1', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields all required", () => {
        
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "First comment", 'body', 'Error: Invalid email address' )
        
    });
})