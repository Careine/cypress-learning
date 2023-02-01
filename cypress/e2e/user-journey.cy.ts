import { Context } from "mocha"

describe('User journey', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    context('Parcours normal', () => {
        it("a user can find a course on the home page and complete the courses lessons", () => {
            cy.getByData('course-0').find('a').eq(3).click()
            cy.location('pathname').should('eq', '/testing-your-first-application')
            cy.getByData('next-lesson-button').click()
            cy.location("pathname").should(
                'eq',
                '/testing-your-first-application/app-install-and-overview'
            )
            cy.getByData('challenge-answer-0').click()
            cy.getByData("next-lesson-button").should('exist').click()
            cy.location('pathname').should(
                'eq', 
                '/testing-your-first-application/installing-cypress-and-writing-our-first-test'
            )
            cy.getByData('challenge-answer-0').click()
            cy.getByData('next-lesson-button').should('exist').click()
            cy.location('pathname').should(
                'eq',
                '/testing-your-first-application/setting-up-data-before-each-test'
            )
            cy.getByData('challenge-answer-0').click()
            cy.getByData('next-lesson-button').should('exist').contains('Complete Course').click()
            cy.location('pathname').should(
                'eq',
                '/'
            )
        })
    })
        
        context.only('Disable question of the course', () => {
            it('Disable question of the course', () => {
                cy.getByData('course-1').find('a').eq(3).click()
                cy.location('pathname').should('eq', '/testing-foundations')
                cy.getByData('next-lesson-button').click()
                cy.location("pathname").should(
                    'eq',
                    '/testing-foundations/testing-is-a-mindset'
                )
                cy.getByData('skip-challenge-input').click()
                cy.getByData('complete-lesson-button').click()
                cy.location('pathname').should(
                    'eq',
                    '/testing-foundations/knowing-what-to-test'
                )
                cy.getByData('complete-lesson-button').should('exist').contains('Next Lesson')
            })
        })
    
})