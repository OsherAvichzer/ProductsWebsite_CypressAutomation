
describe("add to cart", () => {

      let names = [];
      let prices = [];
      let images = [];
       
    beforeEach(() => {
        cy.visit("http://localhost:5173/")

        it("get products info", () => {
            cy.get("[data-testid*='product-name_product-card-']")
            .each(($name) => {
                cy.wrap($name)
                .invoke("text")
                 .then((name) => {
                  names.push(name);
                });
              });
              cy.get("[data-testid*='product-price_product-card-']")
              .each(($price) => {
                cy.wrap($price)
                .invoke("text")
                .then((price) => {
                    prices.push(price);
                });
              });
              cy.get("[data-testid*='product-image_product-card-']")
              .each(($img) => {
                cy.wrap($img)
                .invoke("attr", "src")
                .then((img) => {
                    images.push(img);
                });
              });
            });
        });

        it("adds to cart all products", () => {
            cy.get('[data-testid*="add-cart-button_product-card-"]').each(
                ($addToCartBtn) => {
                    cy.wrap($addToCartBtn)
                    .click()
                });

                cy.scrollTo('top');

                cy.get('[id*="T-cart"]')
                .click()
                .then(() => {
                cy.get('[data-testid="order-button_cart-page"]')
                .should('be.visible')
                .and('be.enabled')
            });
        });

    it("validate info button text", () => {
        cy.get('[data-testid*="description-button_product-card"]').each(
          ($infoBtn) => {
            cy.wrap($infoBtn)
              .should("have.text", "פרטים")
              .find('[data-testid="InfoIcon"]')
              .should("exist");
          });
      });
});