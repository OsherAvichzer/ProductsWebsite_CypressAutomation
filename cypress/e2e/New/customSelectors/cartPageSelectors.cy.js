export const getAmountOfProducts = (callback) => {
  cy.get(`[data-testid*="add-cart-button_product-card-"]`).then(callback);
};

export const getAmountOfProducts2 = () => {
  cy.get(`[data-testid*="add-cart-button_product-card-"]`).then((a) => a);
};

export const getProductPriceInInfoPage = () => {
  cy.get(".MuiDialogContent-root > :nth-child(2)")
    .invoke("text")
    .then((text) => {
      const price = text.replace("מחיר ", "").replace("₪", "");
      return price;
    });
};

export const getProductCardInfoSelector = (productIndex) => {
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
};

export const getBuyProductsBtn = () => {
  return cy.get(`[data-testid="order-button_cart-page"]`);
};

export const getOrderErrorMessege = () => {
  return cy.get(".MuiAlert-message");
};
