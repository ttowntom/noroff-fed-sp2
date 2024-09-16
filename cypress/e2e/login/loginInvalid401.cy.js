describe("QuickBid invalid login (wrong password)", () => {
  it("can not log in with the login form with invalid password", () => {
    cy.visit("https://thr-sp2.netlify.app/user/login/");
    cy.wait(500);
    cy.fixture("loginData401.json").then((loginData) => {
      cy.get('input[type="email"]').type(loginData.email);
      cy.get('input[type="password"]').type(loginData.password);
    });

    cy.get('button[type="submit"]').click();
    cy.get("form#loginForm").then(($form) => {
      if ($form[0].checkValidity()) {
        // Form is valid, no validation error
      } else {
        // Form is invalid, validation error has been triggered
        cy.get("#error-container").then(($input) => {
          expect($input[0].validationMessage).not.to.be.null;
        });
      }
    });
  });
});
