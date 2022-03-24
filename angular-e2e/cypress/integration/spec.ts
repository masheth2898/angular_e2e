describe('My First Test', () => {
  it.skip('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('sandbox app is running!')
  })
})
