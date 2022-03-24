describe('', ()=>{
    it('Check title', ()=>{
        cy.visit('/pass')
        cy.url().should('include','/pass')
        cy.get('.back_link').should('have.text','arrow_back Username')
        cy.get('h1').should('have.text','Enter your password')
    })

    it('Show hide password',()=>{
        cy.visit('/pass')
        cy.url().should('include','/pass')
        cy.get('#pass').type('password')
        cy.get('mat-icon').click().as('mi')
        cy.get('@mi').click()
    })

    it('Invalid input', () => {
        cy.visit('/pass')
        cy.url().should('include', '/pass')
        // cy.get('#pass').type('pass').should('have.value', 'pass')
        cy.get('#submit').click()
        cy.get('.errorMessage').should('have.text', 'Password is required.')
    })

    
    it('User not found', () => {
        cy.visit('/pass')
        cy.url().should('include','/pass')
        cy.get('#pass').type('user').should('not.have.value', 'Admin@12')
        cy.get('#submit').click()
        cy.intercept(
            {
                method: 'Post',
                url: '/password'
            },
            {
                statusCode: 404,
                body: null
            }
        )
        cy.get('.errorMessage').should('have.text', 'Password is invalid.')
    })

    it('Password API success', () => {
        cy.visit('/pass')
        cy.url().should('include','/pass')
        cy.get('#pass').type('Admin@12').should('have.value', 'Admin@12')
        cy.get('#submit').click()
        cy.intercept(
            {
                method: 'Post',
                url: '/password'
            },
            {
                statusCode: 200,
                body: null
            }
        )
        cy.visit('/home')
    })

})