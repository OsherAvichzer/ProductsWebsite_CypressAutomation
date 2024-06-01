describe("add products to cart", () => {
  beforeEach(() => {
    cy.open();
    for (let index = 0; index < 5; index++) {
      cy.getAddToCartBtnsSelector(index).click();
      cy.getIconIndex().should("have.text", index + 1);
    }
    cy.goToCart().click();
  });

  let totalPrice = 0;
  let btnMoney = 0;
  it("validate total price is equal to all products price", () => {
    cy.getBuyProductsBtn()
      .should("be.visible")
      .and("be.enabled")
      .then(() => {
        for (let index = 0; index < 5; index++) {
          cy.getPrice(index).then((price) => {
            totalPrice += price;
          });
        }
      })
      .then(() => {
        cy.getTotalMoneyAmount()
          .then((money) => {
            btnMoney = money;
            totalPrice = Number(totalPrice.toFixed(2));
          })
          .then(() => {
            cy.wrap(btnMoney).should("equal", totalPrice);
          });
      });
  });

  it("order products", () => {
    cy.getBuyProductsBtn()
      .click()
      .then(() => {
        cy.getAlertOrderBarBtn()
          .should("be.visible")
          .then(() => {
            cy.getCloseCongratsMessageBtn().click();
          });
      });
  });
});
