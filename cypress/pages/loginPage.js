class loginPage{
    
    modalElements = {
        enterEmail : () => cy.get('#pop-auth-email'),
        enterPassword : () => cy.get('#pop-auth-password'),
        loginBtn : () => cy.get('input[value="Войти"]'),
    };
};

module.exports = new loginPage();
