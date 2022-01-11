const selectors = require('../../fixtures/selectors/selectors.json');

afterEach(() => {
    cy.get(selectors.deleteButton).click();
    cy.get(selectors.delete).click();
});

it('Should add new hall', () => {
    cy.visit('/');
    cy.login('qamid@qamid.ru', 'qamid');
	cy.get('.page-header__title').should('be.visible');

    cy.addHall();
    cy.contains('Зал4').should('be.visible');
});