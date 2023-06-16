const homePage = require("../pages/homePage");
const loginPage = require("../pages/loginPage");

function confirmCity() {
    homePage.confirmationBlock.confirmCity().click();
};

function confirmCookie() {
    homePage.confirmationBlock.confirmCookie().click();
};

function login(email, password) {
    homePage.clickOnSignin();
    loginPage.modalElements.enterEmail().type(email);
    loginPage.modalElements.enterPassword().type(password);
    loginPage.modalElements.loginBtn().click();
};

function subscribeWithEmail(email) {
    homePage.subscribeBlock.inputEmail().type(email);
    homePage.subscribeBlock.checkbox().click();
    homePage.subscribeBlock.sendButton().click();
};

Cypress.Commands.add('confirmCity', confirmCity);
Cypress.Commands.add('confirmCookie', confirmCookie);
Cypress.Commands.add('login', login);
Cypress.Commands.add('subscribeWithEmail', subscribeWithEmail);


