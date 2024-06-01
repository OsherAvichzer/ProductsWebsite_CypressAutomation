describe("order products", () => {
  beforeEach(() => {
      cy.visit("http://localhost:5173/")
    });

    let addToCartBtns;

      it("get products info", () => {
         cy.getAddToCartBtns().then((returnVal) =>{
            addToCartBtns = returnVal;
            cy.wrap(addToCartBtns).should('have.length', 12);
         });

         debugger
        cy.getAddToCartBtns().then((addToCartBtns) => {
            const specificProduct = addToCartBtns[2]; 
          
            cy.get('.my-element')
              .contains(specificProduct)
              .click();
        });

            cy.scrollTo('top');

            cy.get('[id*="T-cart"]')
            .click()
            .then(() => {
            cy.get('[data-testid="order-button_cart-page"]')
            .should('be.visible')
            .and('be.enabled')
        });
    });
    
    it("order products", () => {
        cy.get('[data-testid="order-button_cart-page"]')
        .should('be.visible')
        .and('be.enabled')
        .invoke('text')
        .then((text) => {
            const price = priceProductText.match(/(\d+\.\d+)/)[0]; 
            expect(cy.getOrderedProductsPrice().includes(price)).to.be.true; 
        })
    });
});
