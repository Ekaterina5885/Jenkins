const selectors = require('../fixtures/selectors/selectors.json');
const priceData = require('../fixtures/testData/priceData.json');
const hallData = require('../fixtures/testData/hallData.json');

Cypress.Commands.add("login", (login, password) => {
    cy.get('[for="email"] > .login__input').type(login);
    cy.get('[for="pwd"] > .login__input').type(password);
    cy.contains('Авторизоваться').click();
});

Cypress.Commands.add("priceHall", () => {
    cy.get(selectors.priceRegular).clear().type(priceData.priceRegular);
    cy.get(selectors.priceVIP).clear().type(priceData.priceVIP);
});

Cypress.Commands.add("newHall", () => {
    cy.get(selectors.rows).clear().type(hallData.rows);
    cy.get(selectors.places).clear().type(hallData.seats);
    cy.get(selectors.buttonSaveHall).click();
});

import 'cypress-file-upload';
import "@4tw/cypress-drag-drop";
