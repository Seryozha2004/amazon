// // searchPage.js
// class SearchPage {
//   // Elements
//   get searchInput() {
//     return cy.get('input[data-live-placeholder="փնտրիր ըստ պաշտոնի,փնտրիր ըստ մասնագիտության,փնտրիր ըստ կազմակերպության"]');
//   }

//   get searchButton() {
//     return cy.get('button[type="submit"]');
//   }

//   // Methods
//   search(query) {
//     this.searchInput.type(query);
//     this.searchButton.click();
//   }

//   verifySearchInput(query) {
//     this.searchInput.should('have.value', query);
//   }

//   verifySearchQueryVisible(query) {
//     cy.contains(query).should('be.visible');
//   }
// }

// export default new SearchPage();

export class SearchPage {
  visit() {
    cy.visit('https://www.amazon.com');
  }

  searchProduct(productName) {
    cy.get('#twotabsearchtextbox').type(productName); // Search input
    cy.get('#nav-search-submit-button').click(); // Search button
  }

  verifyResults() {
    cy.get('.s-search-results').should('be.visible'); // Search results container
  }
}
