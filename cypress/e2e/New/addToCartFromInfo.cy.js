describe("add products to cart", () => {
  beforeEach(() => {
    cy.open();
  });

  it("adding to cart from info page", () => {
    cy.getAmountOfProducts().then((amount) => {
      for (let index = 0; index < amount; index++) {
        cy.openInfoPageBtns(index)
          .click()
          .then(() => {
            cy.getProductCardInfoSelector(index).then((info) => {
              cy.addToCartBtnFromInfo()
                .click()
                .then(() => {
                  cy.goToCart()
                    .click()
                    .then(() => {
                      cy.getProductCardImgInCart(index)
                        .should("have.attr", "src")
                        .and("include", info[0]);
                      cy.log(info);
                      debugger;
                      cy.getProducrCardNameInCart(index).should(
                        "have.text",
                        info[1]
                      );
                      cy.getProductCardPriceInCart(index).should(
                        "contain",
                        info[2]
                      );
                      cy.goToHome().click();
                    });
                });
            });
          });
      }
    });
  });
});
