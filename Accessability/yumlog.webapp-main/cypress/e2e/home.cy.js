describe("The Home Page", () => {
  it("successfully loads Landing Page", () => {
    cy.visit("/");
  });

  it("displays at least 3 recipes on recipes page", () => {
    cy.visit("/recipes");
    cy.get("[data-test='recipe-item']").should("have.length.at.least", 3);
  });

  it("navigates to recipe details and shows correct content", () => {
    let savedTitle = 'Spaghetti Bolognese';

    cy.visit("/recipes");

    // Wait for recipes to load and get first recipe title
    cy.get("[data-test='recipe-item']")
      .should("exist")
      .first()
      .within(() => {
        cy.get("[data-test='recipe-title']")
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            savedTitle = text;
          });
        cy.get("[data-test='details-button']").should("be.visible").click();
      });

    // Verify URL pattern
    cy.url().should("match", /\/recipes\/\d+$/);

    // Verify title matches
    cy.get("[data-test='detail-title']")
      .should("be.visible")
      .and("have.text", savedTitle);

    // Verify ingredients list exists and is not empty
    cy.get("[data-test='ingredients-list']")
      .should("be.visible")
      .find("li")
      .should("have.length.at.least", 1);
  });
});
