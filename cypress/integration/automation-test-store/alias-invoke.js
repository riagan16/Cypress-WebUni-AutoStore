/// <reference types="Cypress" />

describe("Alias and invokes", () => {
    it("Validate a spesific hair care product", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
      
      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
      cy.get('@productThumbnail').its('length').should('be.gt', 5)
      cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });
    
    it("Validate products thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        
        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        cy.get('@productThumbnail').find('.nostock').invoke('text').should('include', 'Out of Stock')
        
      });

      it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });

        
        //price no discount
        cy.get(".thumbnail").find('.oneprice').invoke('text').as('itemPrice')
        cy.get(".thumbnail").find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }

            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items = " + itemsPriceTotal)
        })

        
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPriceTotal = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPriceTotal;
            cy.log("Sale price items = " + saleItemsPriceTotal)
        })
        .then(() => {
            cy.log("The total of non sale and sale products: " + itemsTotal)
            expect(itemsTotal).to.eq(648.5)
        })

      });

    
  });
  