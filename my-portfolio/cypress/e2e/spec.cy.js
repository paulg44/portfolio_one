// import cy from 'cypress';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://paulgarton.com');
    cy.get('h1').contains('Paul');
  });
});
