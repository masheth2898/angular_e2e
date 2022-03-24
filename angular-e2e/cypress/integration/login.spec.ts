describe('', () => {
    it('Check title', () => {
        cy.visit('/')
        cy.url().should('include', '/login')
        cy.get('h1').should('have.text', 'Enter your username')
    })

    it('Invalid input', () => {
        cy.visit('/login')
        cy.url().should('include', '/login')
        cy.get('#userName').should('have.value', '')
        cy.get('#submit').click()
        cy.get('.errorMessage').should('have.text', 'Username is required.')
    })

    it('Login API failed', () => {
        cy.visit('/login')
        cy.url().should('include','/login')
        cy.get('#userName').type('user').should('not.have.value', 'admin')
        cy.get('#submit').click()
        cy.intercept(
            {
                method: 'Post',
                url: '/login'
            },
            {
                statusCode: 404,
                body: null
            }
        )
        cy.get('.errorMessage').should('have.text', 'Username is invalid.')
    })

    it('Login API success', () => {
        cy.visit('/login')
        cy.url().should('include','/login')
        cy.pause()
        cy.get('#userName').type('admin').should('have.value', 'admin')
        cy.get('#submit').click()
        cy.intercept(
            {
                method: 'Post',
                url: '/login'
            },
            {
                statusCode: 200,
                body: null
            }
        )
        cy.visit('/pass')
    })
})