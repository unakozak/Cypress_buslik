class homePage {

    elements = {
        loginBtn : () => cy.get('.entrance-btn'),
        logoutBtn : () => cy.get('[href="/?logout=yes"]'),
        addProductToCart : () => cy.contains("В корзину"),
        chooseSize : () => cy.get(':nth-child(1) > .size-block'),
    };

    searchField = {
        searchInput : () => cy.get('#title-search-input'),
        searchedItemsNames : () => cy.get("[class='product']")
    };

    confirmationBlock = {
        confirmCity : () => cy.get('.del-toggle-question__yes'),
        confirmCookie : () => cy.get('#cookie-accept'),
        chooseAnotherCity : () => cy.get('.del-toggle-question__other'),
    };

    subscribeBlock = {
        inputEmail : () => cy.get('.input-group > .form-control'),
        checkbox : () => cy.get(':nth-child(2) > label'),
        sendButton : () => cy.get('.input-group > .btn'), 
        successfulMsg : () => cy.get('[class*=subscribe-block__center--success]'),
    };

    bestProposes = {
        btnAddToCart: () => cy.get('[class*="btn-buy catalog-item__btn"]'),
        
    }

    clickOnSignin() {
        this.elements.loginBtn().click();
    };
};

module.exports = new homePage();