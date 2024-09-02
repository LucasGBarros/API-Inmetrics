import { Given, When, Then } from "cypress-cucumber-preprocessor";
import InmetricsPage from '../pageObjects/inmetricsPage';

let productName = 'HP ENVY X360 - 15T LAPTOP';
let productId = '243437863';
let color = 'c3c3c3';
let imagePath = 'inmetrics.png';
let token;

Given('eu faço uma busca por um produto', () => {
  InmetricsPage.searchProduct(productName).as('searchResponse');
});

When('o sistema deve retornar os produtos correspondentes', () => {
  cy.get('@searchResponse').then((response) => {
    expect(response.body).to.be.an('array');
  });
});

Then('o status da resposta deve ser 200', (statusCode) => {
  cy.get('@searchResponse').then((response) => {
    expect(response.status).to.eq(statusCode);
  });
});


Given('eu faço o upload de uma nova imagem para o produto', () => {
    InmetricsPage.updateProductImage(productId, color, imagePath, token).as('updateImageResponse');
  });
  
  Then('o status da resposta do upload deve ser 200', (statusCode) => {
    cy.get('@updateImageResponse').then((response) => {
      expect(response.status).to.eq(statusCode);
    });
  });