/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it("Check and validate checkbox", () => {
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get("input[value='option-1']").check().should('be.checked')

        cy.get("input[value='option-1']").check().should('be.checked').as('option-1')
        //cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')  
    });

    it("Uncheck and validate checkbox", () => {
        cy.get("input[value='option-3']").as('option-3')
        //cy.get('@option-1').check()
        cy.get('@option-3').uncheck().should('not.be.checked')
        
    });

    it("Check and validate checkbox", () => {
        cy.get("input[type='checkbox']").check('option-1', 'option-2').should('be.checked')
        
    });

})
