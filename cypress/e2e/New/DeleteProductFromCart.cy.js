describe("add products to cart", () => {
  let amount;
  let initialMoney = 0;
  beforeEach(() => {
    cy.open();
    cy.getAmountOfProducts().then((totalProducts) => {
      amount = totalProducts;
      for (let index = 0; index < amount; index++) {
        cy.getAddToCartBtnsSelector(index).click();
        cy.getIconIndex().should("have.text", index + 1);
      }
      cy.goToCart()
        .click()
        .then(() => {
          cy.getTotalMoneyAmount().then((money) => {
            initialMoney = money;
            cy.log(initialMoney);
          });
        });
    });
  });

  let deletedProductPrice = 0;
  let btnMoney = 0;
  it("delete products from cart", () => {
    for (let index = 1; index < amount; index++) {
      cy.getPrice(0)
        .then((price) => {
          deletedProductPrice = deletedProductPrice + price;
          cy.getDeleteProductsBtns(0).click();
        })
        .then(() => {
          cy.getTotalMoneyAmount()
            .then((money) => {
              btnMoney = parseFloat(money);
            })
            .then(() => {
              const totalPrice = Number(
                initialMoney - deletedProductPrice
              ).toFixed(2);
              cy.wrap(btnMoney).should("equal", parseFloat(totalPrice));
            });
        });
    }
  });
});
