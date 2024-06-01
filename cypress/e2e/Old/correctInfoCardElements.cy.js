describe("correct info card elements", () => {

      let names = [];
      let prices = [];
      let images = [];

beforeEach(() => {
    cy.visit("http://localhost:5173/");

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

          let index = 0;
          it("info card shows correct element info", () => {
            cy.get('[data-testid*="description-button_product-card"]').each(
              ($infoBtn) => {
                cy.wrap($infoBtn)
                  .click()
                  .then(() => {
                    cy.get(".MuiDialogContent-root > img")
                      .should("have.attr", "src")
                      .and("include", images[index]);
                    cy.get(".MuiDialogContent-root > :nth-child(2)").should(
                      "contain",
                      prices[index]
                    );
                    cy.get("#\\:r0\\:").should("have.text", names[index]);
                    cy.get(".MuiDialogActions-root > :nth-child(2)").click();
                    index++;
                  });
              }
            );
          });
        });
        