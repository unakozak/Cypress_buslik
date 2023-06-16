const homePage = require("../pages/homePage");

describe('Buslik web-app: Login page', () => {
  let userData;  
  beforeEach(()=> {  
    cy.visit('/');
    cy.fixture(`fixture.json`).then((data)=> { 
      userData = data ;
    });
  });

  it('Login into the web-app. Logout button should be visible', () => {
    cy.login(userData.email, userData.password);
    homePage.elements.logoutBtn().should('be.visible', 'Logout button should be visible');
  });

  it('Logout from the web-app. Login button should be visible', () => {
    cy.login(userData.email, userData.password);
    homePage.elements.logoutBtn().click();
    homePage.elements.loginBtn().should('be.visible', 'Login button should be visible');
  });
});