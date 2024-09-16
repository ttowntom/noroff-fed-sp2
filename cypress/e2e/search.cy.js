describe("QuickBid search tests", () => {
  beforeEach(() => {
    cy.visit("https://thr-sp2.netlify.app/");
    cy.wait(500);
  });

  it("handles error messaging when no listings are found", () => {
    cy.get('input[type="search"]').type("sekjfnxsa");
    cy.get('button[type="submit"]').click();
    cy.get("main p").should("have.text", "Could not find any listings");
  });

  it("renders search results", () => {
    cy.get('input[type="search"]').type("the");
    cy.get('button[type="submit"]').click();
    cy.get("main p").should("exist");
    cy.get("main").find("article");
  });
});
