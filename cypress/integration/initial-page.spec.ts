describe('dashboard', () => {
  it(`has h1 'Tour of Heroes'`, () => {
    cy.visit("localhost:4200/dashboard");
    cy.get('h1').should('contain', 'Tour of Heroes');
  });

  it(`has title 'Tour of Heroes'`, () => {
    cy.visit("localhost:4200/dashboard");
    cy.title().should('eq', 'Tour of Heroes');
  });

  it(`has the 'Hero search' box`, () => {
    cy.get('#search-component').within(() => {
      cy.get('h4').should('contain', 'Hero Search');
      cy.get('input').should('exist');
    });
  });

  it(`has links to the expected pages`, () => {
    cy.get('nav').within(() => {
      cy.get('a[href="/dashboard"]').should('exist');
      cy.get('a[href="/heroes"]').should('exist');
    });
  });
});
