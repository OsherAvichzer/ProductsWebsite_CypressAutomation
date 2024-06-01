import "./customSelectors/cartPageSelectors.cy";
import {
  getAmountOfProducts,
  getProductPriceInInfoPage,
  getProductCardInfoSelector,
} from "./customSelectors/cartPageSelectors.cy";

describe("add products to cart", () => {
  beforeEach(() => {
    cy.open();
  });

  it("get", () => {
    getAmountOfProducts((element) => {
      const elementWrap = cy.wrap(element);
      const a = elementWrap.its("length");
    });
    const b = getProductCardInfoSelector(1);
    cy.log(b);
  });

  it("checks the icon button", () => {
    for (let index = 0; index < 5; index++) {
      cy.getAddToCartBtnsSelector(index).click();
      cy.getIconIndex().should("have.text", index + 1);
    }
  });

  it("add to cart", () => {
    cy.getAmountOfProducts().then((amount) => {
      for (let index = 0; index < amount; index++) {
        cy.getProductCardInfoSelector(index).then((info) => {
          cy.getAddToCartBtnsSelector(index)
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
      }
    });
  });
});
