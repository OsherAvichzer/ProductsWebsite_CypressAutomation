Cypress.Commands.add("closeInfoPageBtn", () => {
  return cy.get(".MuiDialogActions-root > :nth-child(2)");
});

Cypress.Commands.add("getProductImgInInfoPage", () => {
  return cy.get(".MuiDialogContent-root > img");
});

Cypress.Commands.add("getProductNameInInfoPage", () => {
  return cy.get("#\\:r0\\:");
});

Cypress.Commands.add("getProductPriceInInfoPage", () => {
  cy.get(".MuiDialogContent-root > :nth-child(2)")
    .invoke("text")
    .then((text) => {
      const price = text.replace("מחיר ", "").replace("₪", "");
      return price;
    });
});

Cypress.Commands.add("addToCartBtnFromInfo", () => {
  return cy.get(".MuiDialogActions-root > :nth-child(1)");
});
