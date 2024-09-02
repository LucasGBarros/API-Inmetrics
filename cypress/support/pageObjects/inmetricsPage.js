import { endpoints } from '../elements/inmetricsElements';

class InmetricsPage {
  login(email, password, username) {
    return cy.request({
      method: 'POST',
      url: endpoints.login,
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: {
        email: email,
        loginUser: username,
        loginPassword: password
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      return response.body.token;
    });
  }

  searchProduct(productName = 'HP ENVY X360 - 15T LAPTOP') {
    return cy.request({
      method: 'GET',
      url: endpoints.searchProduct,
      qs: { name: productName }
    });
  }

  updateProductImage(productId, color, imagePath) {
    cy.fixture(imagePath, 'binary').then(image => {
      const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
      const formData = new FormData();
      formData.append('image', blob, imagePath);

      return cy.request({
        method: 'POST',
        url: `${endpoints.updateProductImage}${productId}/large/${color}`,
        headers: {
          'accept': '*/*',
          'Authorization': 'Bearer ${authToken}',
          'Content-Type': 'multipart/form-data'
        },
        body: formData,
        failOnStatusCode: false
      });
    });
  }
}

export default new InmetricsPage();