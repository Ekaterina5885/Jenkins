const selector = require('../../fixtures/selectors/selectorsBooking.json');

it('Should book a ticket', () => {
	cy.visit('http://qamid.tmweb.ru/client/index.php');
	cy.get(selector.day3).click();
	cy.get(selector.time).click();
	cy.get(selector.place).click();
	cy.booking();
	cy.contains('Покажите QR-код нашему контроллеру для подтверждения бронирования').should('be.visible');
});
