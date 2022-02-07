/// <reference types="Cypress" />

describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
    
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        
        //1. JS Alert
        cy.get('#button1').click()
        //assertion text on the alert box
        cy.on('window:alert', (String) => {
            expect(String).to.eq('I am an alert box!')
        })

    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
    
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#button4').click()
        cy.on('window:confirm', (String) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    });

    it("Validate js confirm alert box works correctly when clicking Cancel", () => {
    
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        
        cy.get('#button4').click()
        
        cy.on('window:confirm', (String) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    });

    it.only("Validate js confirm alert box works using a Stub", () => {
    
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

    });

    // it.only("Validate Modal Pop up box works correctly", () => {
    
    //     cy.visit('https://webdriveruniversity.com')
    //     cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        
    //     cy.get('#button2').click()
        
    //     // cy.on('window:confirm', (String) => {
    //     //     return false;
    //     // })
    //     // cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    // });
   
})