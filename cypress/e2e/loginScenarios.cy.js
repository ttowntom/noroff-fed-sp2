describe("QuickBid login tests", () => {
  beforeEach(() => {
    cy.visit("https://thr-sp2.netlify.app/user/login/");
    cy.wait(500);
  });

  it("cannot log in with invalid email", () => {
    cy.fixture("loginDataInvalid.json").then((loginData) => {
      cy.get('input[type="email"]').type(loginData.email);
    });
    cy.get('button[type="submit"]').click();
    cy.get("form#loginForm").then(($form) => {
      if ($form[0].checkValidity()) {
        // Form is valid, no validation error
      } else {
        cy.get("#error-email").then(($input) => {
          expect($input[0].validationMessage).not.to.be.null;
        });
      }
    });
  });

  it("cannot log in with invalid password", () => {
    cy.fixture("loginData401.json").then((loginData) => {
      cy.get('input[type="email"]').type(loginData.email);
      cy.get('input[type="password"]').type(loginData.password);
    });
    cy.get('button[type="submit"]').click();
    cy.get("form#loginForm").then(($form) => {
      if ($form[0].checkValidity()) {
        // Form is valid, no validation error
      } else {
        cy.get("#error-container").then(($input) => {
          expect($input[0].validationMessage).not.to.be.null;
        });
      }
    });
  });

  it("can log in with valid credentials", () => {
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
      cy.window().then((win) => {
        const token = win.localStorage.getItem("token");
        expect(token).not.to.be.null;
      });
    });
  });
});
