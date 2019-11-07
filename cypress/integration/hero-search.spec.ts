describe('hero search box', () => {
  before(() => {
    cy.visit('/dashboard');
  });

  it('can search', () => {
    cy.get('#search-box').type('mr');
    cy.get('.search-result li').contains('Mr. Nice');
  });

  it(`navigates to the hero's URL when search result is clicked`, () => {
    cy.get('#search-box').type('mr');
    cy.get('.search-result li').contains('Mr. Nice').click();
    cy.url().should('contain', '/detail/11');
  });
});
