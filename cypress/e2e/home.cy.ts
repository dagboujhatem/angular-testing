describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
    cy.screenshot(); // take the name of describe - it
    cy.screenshot('home'); // just a name
    cy.screenshot('home/screenshot') // full path 
    
  })
})
