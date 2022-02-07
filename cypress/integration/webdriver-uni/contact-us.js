/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data
            //or below if you has trouble
            globalThis.data = data;
        })
    })
    beforeEach(function() {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us > .thumbnail').click()
        //or this one below because even it has unique ID but cypress couldn't find it because dimension 0x0
        //cy.get('#contact-us').click({force:true})

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("First comment")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        //upgrade with custom commands
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "First comment", 'h1', 'Thank You for your Message!' )

    });

    //we can use .only to only run the test that we want
    it("Should not be able to submit a successful submission via contact us form as all fields all required", () => {
        //cypress code
        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('textarea.feedback-input').type("First comment")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')

        //upgrade with custom commands
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "First comment", 'body', 'Error: Invalid email address' )
    });
})