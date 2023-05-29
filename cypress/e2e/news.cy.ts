describe("News page", () => {
  it("loads", () => {
    cy.visit("/news");
  });

  it("displays news items", () => {
    cy.visit("/news");

    cy.get("ul#news-list").children().should("have.length.greaterThan", 0);
  });

  it("opens news item when clicking on it", () => {
    cy.visit("/news");

    cy.get("ul#news-list").children().first().click();

    cy.url().should("match", /\/news\/\d+$/);
  });
});
