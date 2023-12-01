import googleSearch from "../pages/google";

describe('Test Suite for interview', () => {

    before('It runs befor the suite', () => {
        //sedding database for instance
    })

    beforeEach('Runs before each test', () => {
        cy.visit('')
    })

    it('Goes to google, type a valid search and check if there are results', ()=> {
        googleSearch.elements.searchBar().type('beon tech')
        googleSearch.elements.searchButton().first().click()
        cy.url().should('contain', 'search')
        cy.contains('https://beon.tech')
    })

    it('Makes a valid search, click on the beon tech link and check if it lands on the correct URL', () => {
        googleSearch.elements.searchBar().type('beon tech{enter}')
        cy.contains('https://beon.tech').click()
        cy.url().should('equal', 'https://beon.tech/engineers')
    })
})