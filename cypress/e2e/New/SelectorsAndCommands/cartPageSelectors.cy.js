Cypress.Commands.add("goToHome", () => {
  return cy.get(`[id*="T-home"]`);
});

Cypress.Commands.add("getBuyProductsBtn", () => {
  return cy.get(`[data-testid="order-button_cart-page"]`);
});

// Cypress.Commands.add("getTotalMoneyAmount", () => {
//   return cy
//     .getBuyProductsBtn()
//     .invoke("text")
//     .then((price) => {
//       const parsedPrice = parseFloat(
//         price.replace("₪", "").replace("הזמן ", "")
//       );
//       return parsedPrice;
//     })
// });

Cypress.Commands.add("getTotalMoneyAmount", () => {
  return cy.getBuyProductsBtn().then(($btn) => {
    if ($btn.length > 0) {
      cy.wrap($btn)
        .invoke("text")
        .then((price) => {
          const parsedPrice = parseFloat(
            price.replace("₪", "").replace("הזמן ", "")
          );
          return parsedPrice;
        });
    }
  });
});

Cypress.Commands.add("getProductCardImgInCart", (index) => {
  return cy.get(
    `[data-testid="cart-item-image-${index}_listitem-${index}_cart-page"]`
  );
});

Cypress.Commands.add("getProducrCardNameInCart", (index) => {
  return cy.get(
    `[data-testid="cart-item-text-${index}_listitem-${index}_cart-page"] > .MuiTypography-body1`
  );
});

Cypress.Commands.add("getProductCardPriceInCart", (index) => {
  return cy.get(
    `[data-testid="cart-item-text-${index}_listitem-${index}_cart-page"] > .MuiTypography-body2`
  );
});

Cypress.Commands.add("getPrice", (index) => {
  return cy
    .getProductCardPriceInCart(index)
    .invoke("text")
    .then((price) => {
      const parsedPrice = parseFloat(price.replace("₪", ""));
      return parsedPrice;
    });
});

Cypress.Commands.add("getCloseCongratsMessageBtn", () => {
  return cy.get(".MuiDialogActions-root > .MuiButtonBase-root");
});

Cypress.Commands.add("getAlertOrderBarBtn", () => {
  return cy.get('[data-testid="alert_order-bar_cart-page"]');
});

Cypress.Commands.add("getDeleteProductsBtns", (index) => {
  return cy.get(
    `[data-testid="cart-item-${index}_listitem-${index}_cart-page"] > .MuiButtonBase-root`
  );
});

Cypress.Commands.add("getOrderErrorMessege", () => {
  return cy.get(".MuiAlert-message");
});
