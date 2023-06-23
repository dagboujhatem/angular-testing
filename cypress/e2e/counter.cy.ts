describe('Test of counter page', () => {
    it('Visits the initial counter page', () => {
      cy.visit('/')
      cy.get('#count-result').contains('0')
    })
  })