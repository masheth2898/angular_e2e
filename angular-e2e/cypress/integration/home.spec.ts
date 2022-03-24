describe('', () => {
    it('Automation check title', () => {
        cy.visit('/home')
        cy.wait(2000);
        cy.url().should('include', '/home')
        cy.get('.hamburger-menu').click()
        cy.wait(2000)
        cy.get('#automation').click()
        cy.wait(2000)
        cy.get('h1').should('have.text', 'Automation')
    })

    it('Datasource check title', () => {
        cy.visit('/home')
        cy.url().should('include', '/home')
        cy.get('.hamburger-menu').click()
        cy.get('#datasource').click()
        cy.visit('/datasource')
        cy.get('h1').should('have.text', 'Data Sources')
    })

    it('Logout', () => {
        cy.visit('/home')
        cy.url().should('include', '/home')
        cy.get('.profile').click()
        cy.get('#logout').click()
        cy.visit('/login')
    })
})