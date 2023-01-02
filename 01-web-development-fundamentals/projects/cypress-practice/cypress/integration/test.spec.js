describe("Form elements on index.html", function () {
    before(function () {
      cy.visit("index.html");
    });

    it("has a head element with the title 'Debugging HTML Forms'", function () {
        cy.get("head title")
          .should("contain", "Debugging HTML Forms");
    });

    it("Fixes the last name field", function () {
        cy.get('label[for="lastName"]')
          .should("contain", "Last name");
    });

    it("Fixes the dropdown menu to show the three options", function () {
        cy.get('option[value="admin')
          .should("be.visible")
          .should("contain", "Admin")
        cy.get('option[value="user')
          .should("be.visible")
          .should("contain", "User")
        cy.get('option[value="guest')
          .should("be.visible")
          .should("contain", "Guest");
    });

    it("Has a text box for the bio that allows multiple lines of text", function () {
        cy.get("div#bio-div").children()
            .should('have.length', 2)
        cy.get("textarea")
            .should("have.attr", "id", "bio")
            .should("have.attr", "name", "bio")
    });
})
