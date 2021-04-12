//filename: cypress/pageobjects/SwagOverviewPage.js
class SwagOverviewPage {
    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get screen() {
        return cy.get('.inventory_list');
    }
}
export default new SwagOverviewPage();
