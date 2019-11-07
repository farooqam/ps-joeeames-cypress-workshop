describe('hero detail', () => {
  before(() => {
    cy.visit('/detail/11');
  });

  it(`shows the hero's name in the text box`, () => {
    cy.get('input').should('have.value', 'Mr. Nice');
  });

  it(`shows the hero's name in all caps`, () => {
    cy.get('h2').should('contain', 'MR. NICE');
  });

  it(`updates the name as it's being typed`, () => {
    cy.get('input').clear().type('foobar');
    cy.get('h2').should('contain', 'FOOBAR');
  });

  it('updates the name when save is clicked', () => {
    cy.server();
    cy.route({
      method: 'PUT',
      url: '/api/heroes/11',
      response: {id: 11, name: 'Magnus Carta'}
    }).as('put-hero');

    cy.get('input').clear().type('Magnus Carta');
    cy.contains('save').click();
    cy.wait('@put-hero');
  });
});
