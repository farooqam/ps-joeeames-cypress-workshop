describe('hero search box', () => {
  before(() => {
    cy.visit('/dashboard');
  });

  it('shows the expected number of results', () => {
    cy.get('#search-box').type('n');
    cy.get('.search-result li').should('have.length', 6);

    cy.get('#search-box').type('a');
    cy.get('.search-result li').should('have.length', 3);

  });

  it(`navigates to the hero's URL when search result is clicked`, () => {
    cy.get('#search-box').type('{backspace}{backspace}mr');
    cy.get('.search-result li').should('contain', 'Mr. Nice').click();
    cy.url().should('contain', '/detail/11');
  });
});
