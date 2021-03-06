describe('dashboard', () => {
  before(() => {
    cy.visit('/dashboard');
  });

  it(`has h1 'Tour of Heroes'`, () => {
    cy.get('h1').should('contain', 'Tour of Heroes');
  });

  it(`has title 'Tour of Heroes'`, () => {
    cy.title().should('eq', 'Tour of Heroes');
  });

  it(`has the 'Hero search' box`, () => {
    cy.get('app-hero-search').within(() => {
      cy.get('h4').should('contain', 'Hero Search');
      cy.get('input').should('exist');
    });
  });

  it(`has links to the expected pages`, () => {
    cy.get('nav').within(() => {
      cy.get('a[href="/dashboard"]').should('exist').and('contain', 'Dashboard');
      cy.get('a[href="/heroes"]').should('exist').and('contain', 'Heroes');
    });
  });
});
