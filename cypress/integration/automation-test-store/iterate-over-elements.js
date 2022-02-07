/// <reference types="Cypress" />


describe("Iterate over elements", () => {
  beforeEach(function(){
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  })

  it("Log informations of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text())
    });
  });

  it("Add spesific product to the basket", () => {

    //text() is jquery method
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //    if($el.text().includes('Curls to straight Shampoo')) {
    //        cy.wrap($el).click()
    //    } 
    //   });

    cy.selectProduct('Curls to straight Shampoo');
  });

  it("Add spesific product to the basket 2", () => {
    cy.selectProduct('Seaweed Conditioner');
  });

  it("Add spesific product to the basket 3", () => {
    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });
});
