class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
    }
}
export default AutoStore_HairCare_PO;