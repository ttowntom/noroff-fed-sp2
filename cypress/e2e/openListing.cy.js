describe("QuickBid listings", () => {
  beforeEach(() => {
    cy.visit("https://thr-sp2.netlify.app/");
    cy.wait(500);
  });

  it("can render listings on scroll", () => {
    // Count articles
    cy.get("article").should("have.length", 9);
    // Scroll to bottom of page
    cy.scrollTo("bottom", { duration: 2000 });
    // Count articles, should be more than 9
    cy.get("article").should("have.length.gt", 9);
  });

  it("can render a listing to page", () => {
    cy.get("article a").first().click();
    cy.get("h1").should("exist");
  });
});
