const homePage = require("../pages/homePage");

describe('Buslik web-app: Home page', () => {
  let userData;
  beforeEach(()=> {  
    cy.visit('/');
    cy.confirmCity();
    cy.fixture(`fixture.json`).then((data)=> { 
      userData = data;
    });
  });

  it('Search products using search field. Searched products should have inputed text', () => {
    homePage.searchField.searchInput().type(userData.productName);
    homePage.searchField.searchedItemsNames()
    .each(($el) => {
        expect($el).to.contain(userData.productName)
    });
  });
});