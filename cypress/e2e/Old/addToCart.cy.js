import { getProductPriceElements } from "../homePageSelectors";
import { getProductNameElements } from "../homePageSelectors";
import { getProductImgElements } from "../homePageSelectors";
import { addToCartButtons } from "../homePageSelectors";

describe("add to cart", () => {
  let productsAmount;

  let homePageOrderedProducts = [];
  let cartPageOrderedProducts = [];

  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  // it("get productNameList", ()=> {
  //     cy.get("[data-testid*='product-name_product-card-']")
  //     .then((elements) => {
  //         productNameList = elements;
  //     });
  // });

  it("get amount of products", () => {
    cy.get("[data-testid*='add-cart-button_product-card-']")
      .its("length")
      .then((count) => {
        productsAmount = count;
      });
  });

  it("adds all products to cart", async () => {
    // const names = await getProductNameElements();
    // const prices = await getProductPriceElements();
    // const images = await getProductImgElements();
    // const addProductToCart = await addToCartButtons()
    const names = [];

    for (let i = 0; i < productsAmount; i++) {
      const productNameElement = cy.get(
        "[data-testid='product-name_product-card-" + i + "_home-page']"
      );
      const productPriceElement = cy.get(
        "[data-testid*='product-price_product-card-" + i + "_home-page']"
      );
      const productImgElement = cy.get(
        "[data-testid*='product-image_product-card-" + i + "_home-page']"
      );
      debugger;
      // let addedProductDetails = {
      //     name: names[i],
      //     price: prices[i],
      //     image: images[i]
      // };

      // homePageOrderedProducts.push(addedProductDetails);

      cy.get("[id*='cart']").click;

      //(await cy.get(".MuiBadge-root .MuiBadge-badge")).should("have.text", i+1);
    }

    cy.window().scrollTo(0, 0);

    cy.get('button[id*="cart"]').click();
  });

  it("validate all products were added", () => {});
});
