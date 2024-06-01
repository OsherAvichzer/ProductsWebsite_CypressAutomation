describe("validate product info", () => {
  beforeEach(() => {
    cy.open();
  });

  it("validate product info same as info page", () => {
    cy.getAmountOfProducts().then((amount) => {
      for (let index = 0; index < amount; index++) {
        cy.getProductCardInfoSelector(index).then((info) => {
          cy.openInfoPageBtns(index)
            .click()
            .then(() => {
              cy.getProductImgInInfoPage(index)
                .should("have.attr", "src")
                .and("include", info[0]);
              cy.log(info);
              cy.getProductNameInInfoPage(index).should("have.text", info[1]);
              cy.getProductPriceInInfoPage(index).should("contain", info[2]);
              cy.closeInfoPageBtn().click();
            });
        });
      }
    });
  });
});
