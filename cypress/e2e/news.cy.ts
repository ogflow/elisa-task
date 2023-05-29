describe("News page", () => {
  it("page is loading", () => {
    cy.visit("/news");
  });

  it("displays some news items", () => {
    cy.visit("/news");

    cy.get("ul#news-list").children().should("have.length.greaterThan", 0);
  });

  it("opens news details page when clicking on news heading", () => {
    cy.visit("/news");

    cy.get("ul#news-list").children().first().click();

    cy.url().should("match", /\/news\/\d+$/);
  });
});
