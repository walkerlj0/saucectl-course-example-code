class SwagOverviewPage {
  get screen() {
    return cy.get('.inventory_list')
  }
}
export default new SwagOverviewPage();
