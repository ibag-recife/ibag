before;

describe("Site IBAG", () => {
  beforeEach(() => {
    cy.visit("https://mathevsbatista.github.io/ibag/index.html");
  });

  it("Verify if the page title is visible", () => {
    cy.get("h1").should("be.visible");
  });

  it("Verify if the image on the main card is visible", () => {
    cy.get('.imagem-igreja').should("be.visible");

    });

    it('Verify if the cards in the "Nossa Doutrina" section are visible', () => {
        cy.get('div[class=card]').should('have.length',15)
        cy.get('div[class=title] h3').should('have.length',15)
    });

    it('Verify if social media icons are visible', () => {
        cy.get('div[class=social-media] img').should('be.visible',4)
    });
});
