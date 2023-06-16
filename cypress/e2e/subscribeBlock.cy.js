const homePage = require("../pages/homePage");

describe('Buslik web-app: Home page', () => {
  let userData;
  beforeEach(()=> {  
    cy.visit('/');
    cy.confirmCity();
    cy.confirmCookie();
    cy.fixture(`fixture.json`).then((data)=> { 
      userData = data;
    });
  });

  it('Subscribe to the newsletter with', () => {
    cy.subscribeWithEmail(userData.fakeCorrectEmail)
  });

  it('', () => {
    cy.subscribeWithEmail(userData.fakeCorrectEmail)
  });

});