import {
  getBuyProductsBtn,
  getOrderErrorMessege,
} from "./customSelectors/cartPageSelectors.cy";

describe("add products to cart", () => {
  beforeEach(() => {
    cy.open();
    cy.getAddToCartBtnsSelector(6).click();
    cy.goToCart().click();
  });

  it("order a plane", () => {
    cy.getBuyProductsBtn()
      .click()
      .then(() => {
        cy.getOrderErrorMessege().should("be.visible");
      });
  });

  it("order a plane - export", () => {
    getBuyProductsBtn()
      .click()
      .then(() => {
        getOrderErrorMessege().should("be.visible");
      });
  });
});
