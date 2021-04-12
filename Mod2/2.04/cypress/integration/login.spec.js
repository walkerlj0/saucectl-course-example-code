//filename: cypress/integrations/login.spec.js
import LoginPage from '../pageobjects/LoginPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import { LOGIN_USERS } from '../support/constants';

describe('LoginPage', () => {
   beforeEach(() => {
       cy.visit('');
   });

   it('should be able to test loading of login page', () => {
       LoginPage.screen.should('be.visible');
   });

   it('should be able to login with a standard user', () => {
       LoginPage.signIn(LOGIN_USERS.STANDARD);
       SwagOverviewPage.screen.should('be.visible');
   });

   it('should not be able to login with a locked user', () => {
       LoginPage.signIn(LOGIN_USERS.LOCKED);
       LoginPage.errorMessage.should('have.text','Epic sadface: Sorry, this user has been locked out.');
   });
});
