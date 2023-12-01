class googleSearch{

    elements = {
        searchBar: ()=> cy.get('#APjFqb'),
        searchButton: () => cy.get('[name="btnK"]'),
        resultsColumn: () => cy.get('#kp-wp-tab-overview')
    }
}

export default new googleSearch()