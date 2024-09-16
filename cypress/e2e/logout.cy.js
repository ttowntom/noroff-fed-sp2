describe("QuickBid logout", () => {
  it("can log out", () => {
    cy.visit("https://thr-sp2.netlify.app/user/login/");
    cy.wait(500);
    cy.fixture("loginDataValid.json").then((loginData) => {
      cy.get('input[type="email"]').type(loginData.email);
      cy.get('input[type="password"]').type(loginData.password);
    });
    cy.intercept("POST", "https://v2.api.noroff.dev/auth/login").as(
      "loginRequest"
    );
    cy.get('button[type="submit"]').click();
    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);

      // Check the token in local storage after successful login
      cy.window().then((win) => {
        const token = win.localStorage.getItem("token");
        expect(token).not.to.be.null;
      });

      // Find the logout button and click it
      cy.get("#btn-cytestuser").click();
      cy.wait(500);
      cy.get("#btn-log-out").click();
      cy.wait(500);

      // Check the token in local storage after successful logout
      cy.window().then((win) => {
        const token = win.localStorage.getItem("token");
        expect(token).to.be.null;
      });
    });
  });
});
