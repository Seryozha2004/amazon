import { SearchPage } from './SearchPage-copy-1.cy';

describe('Amazon Search Tests', () => {
  const searchPage = new SearchPage();

  beforeEach(() => {
    searchPage.visit();
  });

  it('should search for a product and display results', () => {
    searchPage.searchProduct('Laptop');
    searchPage.verifyResults();
  });
});

import { RegisterPage } from './SignupPage.cy';

describe('Amazon Signup Tests', () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    registerPage.visit();
  });

  it('should allow user to sign up with valid credentials', () => {
    registerPage.clickRegisterButton();
    registerPage.fillName('John Doe');
    registerPage.fillEmail('johndoe@example.com');
    registerPage.fillPassword('SecurePassword123!');
    registerPage.clickContinue();
    cy.url().should('include', 'ap/register');
  });
});

import { DealsPage } from './DealsPage.cy';

describe('Amazon Today\'s Deals Tests', () => {
  const dealsPage = new DealsPage();

  beforeEach(() => {
    dealsPage.visit();  // Visit the homepage before each test
  });

  it('should navigate to Today\'s Deals and verify the deals page', () => {
    // Test Description: Navigate to Today's Deals and verify the page loads correctly.
    cy.get('.glow-toaster').should('not.exist');  // Wait for any toaster or flyout to disappear
    dealsPage.clickTodaysDeals();  // Click the "Today's Deals" link with force if necessary
  });

  it('should display deals on the "Today\'s Deals" page', () => {
    // Test Description: Verify that deal items are visible on the "Today's Deals" page.
    cy.get('.glow-toaster').should('not.exist');  // Wait for toaster to disappear
    dealsPage.clickTodaysDeals();
  });
});
