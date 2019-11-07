describe('hero search box', () => {
  before(() => {
    cy.visit('/dashboard');
  });

  it(`navigates to the hero's URL when search result is clicked`, () => {
    searchAndClickResult('mr', 'Mr. Nice');
    cy.get('@clickedSearchResult').click();
    cy.url().should('contain', '/detail/11');
  });

  const searchAndClickResult = (searchText, resultToClick) => {
    cy.get('#search-box').type(searchText);
    cy.get('.search-result li').contains(resultToClick).as('clickedSearchResult');
  }
});
