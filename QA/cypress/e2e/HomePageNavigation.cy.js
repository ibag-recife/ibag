describe("Site IBAG", () => {
    beforeEach(() => {
      cy.visit("https://mathevsbatista.github.io/ibag/index.html");
    });

    it('Verify if you can navigate to the "Retiros" page', () => {
        cy.get('[href="pages/sermons.html"]').click();
        cy.url().should('eq', 'https://mathevsbatista.github.io/ibag/pages/sermons.html')
     });

     it('Verify if you can navigate to the "Downloads" page', () => {
        cy.get('[href="pages/downloads.html"]').click();
        cy.url().should('eq', 'https://mathevsbatista.github.io/ibag/pages/downloads.html')
     });

     it('Verify if the user is redirected when clicking on the social media icons in the footer', () => {
        cy.get('div[class=social-media] a').eq(0).click();
        cy.get('div[class=social-media] a').eq(1).click();
        cy.get('div[class=social-media] a').eq(2).click();
        cy.get('div[class=social-media] a').eq(3).click();
    });

    it('Verify if the user is redirected when clicking View larger map in the footer', () => {
        cy.get('small > a').click();
        
    });
    

});