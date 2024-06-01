
 export const getProductPriceElements = async () => {
        return await cy.get("[data-testid*='product-price_product-card-']");
      };

 export const getProductNameElements = async () => {
    return await cy.get("[data-testid*='product-name_product-card-']");
 };

 export const getProductImgElements = async () => {
    return await cy.get("[data-testid*='product-image_product-card-']");
 };

 export const addToCartButtons = async () => {
    return await cy.get("[data-testid*='add-cart-button_product-card-']");
 };

