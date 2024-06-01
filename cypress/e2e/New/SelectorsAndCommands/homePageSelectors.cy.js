Cypress.Commands.add("open", () => {
  cy.visit("http://localhost:5173/");
});

Cypress.Commands.add("getAmountOfProducts", () => {
  return cy.get(`[data-testid*="add-cart-button_product-card-"]`).its("length");
});

Cypress.Commands.add("openInfoPageBtns", (index) => {
  return cy.get(
    `[data-testid="description-button_product-card-${index}_home-page"]`
  );
});

Cypress.Commands.add("getProductDetailsSelector", (index, filed) => {
  return cy.get(
    `[data-testid="product-${filed}_product-card-${index}_home-page"]`
  );
});

Cypress.Commands.add("getAddToCartBtnsSelector", (index) => {
  return cy.get(
    `[data-testid="add-cart-button_product-card-${index}_home-page"]`
  );
});

Cypress.Commands.add("getProductCardInfoSelector", (productIndex) => {
  let productInfo = [];
  return cy
    .getProductDetailsSelector(productIndex, "image")
    .invoke("attr", "src")
    .then((image) => {
      productInfo.push(image.split("/").pop());
    })
    .then(() => {
      return cy
        .getProductDetailsSelector(productIndex, "name")
        .invoke("text")
        .then((name) => {
          productInfo.push(name);
        });
    })
    .then(() => {
      return cy
        .getProductDetailsSelector(productIndex, "price")
        .invoke("text")
        .then((price) => {
          productInfo.push(price.replace("₪", ""));
        });
    })
    .then(() => {
      return productInfo;
    });
});

Cypress.Commands.add("goToCart", () => {
  return cy.get(`[id*="T-cart"]`);
});

Cypress.Commands.add("getIconIndex", () => {
  return cy.get(`.MuiBadge-root .MuiBadge-badge`);
});
