describe('Subscribe', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    /*permet aux utilisateurs de s'inscrire à la liste de diffusion*/
    it('allows users to subscribe to the email list', () => {
        cy.getByData('email-input').type("tom@aol.com")
        cy.getByData('submit-button').click()
        cy.getByData('success-message')
            .should('exist')
            .contains('tom@aol.com')
    })

    it('Soes NOT allow an invalid email address', () => {
        cy.getByData('email-input').type('carol')
        cy.getByData('submit-button').click()
        cy.getByData('success-message')
            .should('not.exist')

    } )

    it('does NOT allow already subscribed email addresses', () => {
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message')
            .should('exist')
            .contains('john@example.com already exists. Please use a different email address')
    })

    it('Email is required', () => {
        cy.getByData('submit-button').click()
        cy.getByData('error-message')
            .should('exist')
            .contains('Email is required')

    })


})
