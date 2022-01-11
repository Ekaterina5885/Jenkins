const selectors = require('../../fixtures/selectors/selectors.json');
const hallData = require('../../fixtures/testData/hallData.json');
const moviesData = require('../../fixtures/testData/moviesData.json');
const filepath = "../../cypress/fixtures/Poster.png";

it('Should add new hall, film, ticket prices and added to the schedule', () => {
    cy.visit('/');
    cy.login('qamid@qamid.ru', 'qamid');
	cy.get('.page-header__title').should('be.visible');

    cy.addHall();

    cy.get(selectors.newHall).click();
    cy.newHall();

    cy.get(selectors.nameHallPrice).type(hallData.hallName);
    cy.priceHall();

    cy.get(selectors.buttonAddMovie).click();
    cy.get(selectors.movieTitle).type(moviesData.movieTitle);
    cy.get(selectors.movieTime).type(moviesData.movieTime);
    cy.get(selectors.movieDescription).type(moviesData.movieDescription);
    cy.get(selectors.movieCountry).type(moviesData.movieCountry);
    cy.get(selectors.downloadMoviePoster).click().attachFile(filepath);
    cy.get(selectors.buttonSaveMovie).click();

//  Removing test data, "afterAll", "afterEach" doesn't work.
    cy.contains('Отменить').click();
    cy.get(selectors.deleteButton).click();
    cy.get(selectors.delete).click();

    cy.get(selectors.movie).drag(selectors.placeMovie).then((success) => {
        assert.isFalse(success)
      });
    cy.get(selectors.nameHallSale).click();
    cy.get(selectors.buttonOpenTicketSales).click();
    cy.contains('Продажа билетов открыта!!!').should('be.visible');
});