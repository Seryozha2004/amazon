export class DealsPage {
  visit() {
    cy.visit('https://www.amazon.com');  // Visit the Amazon homepage
  }

  clickTodaysDeals() {
    cy.get('a[href="/gp/goldbox?ref_=nav_cs_gb"]').click({ force: true }); // Force click if overlay is blocking
  }

  verifyDealsPage() {
    cy.url().should('include', '/gp/goldbox');  // Verify we are on the 'Today's Deals' page
    cy.get('.a-declarative').should('be.visible');  // Ensure deals section is visible
  }
}
