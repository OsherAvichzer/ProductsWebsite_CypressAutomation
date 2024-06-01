// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("openProgram", () => {
  cy.visit("http://localhost:5173/");
});

Cypress.Commands.add("getProductNames", () => {
  const names = [];
  cy.get("[data-testid*='product-name_product-card-']")
    .each(($name) => {
      cy.wrap($name)
        .invoke("text")
        .then((name) => {
          names.push(name);
        });
    })
    .then(() => {
      return names;
    });
});

Cypress.Commands.add("getProductImages", () => {
  return new Promise((resolve) => {
    let images = [];
    cy.get("[data-testid*='product-image_product-card-']")
      .each(($img) => {
        cy.wrap($img)
          .invoke("attr", "src")
          .then((img) => {
            images.push(img);
          });
      })
      .then(() => {
        return images;
      });
  });
});

Cypress.Commands.add("getProductPrices", () => {
  const prices = [];
  cy.get("[data-testid*='product-price_product-card-']")
    .each(($price) => {
      cy.wrap($price)
        .invoke("text")
        .then((price) => {
          prices.push(price);
        });
    })
    .then(() => {
      // Return the names once all elements are processed
      return prices;
    });
});

Cypress.Commands.add("getAddToCartBtns", () => {
  const addToCartBtns = [];
  cy.get('[data-testid*="add-cart-button_product-card-"]')
    .each(($addToCartBtn) => {
      cy.wrap($addToCartBtn);
      addToCartBtns.push(addToCartBtn);
    })
    .then(() => {
      return addToCartBtns;
    });
});

Cypress.Commands.add("getOrderedProductsPrice", () => {
  const orderedProductsPrices = [];
  cy.get(".MuiTypography-body2")
    .each(($orderedProductPrice) => {
      cy.wrap($orderedProductPrice)
        .invoke("text")
        .then((priceProductText) => {
          orderedProductsPrices.push(orderedProductPrice);
        });
    })
    .then(() => {
      return orderedProductsPrices;
    });
});
