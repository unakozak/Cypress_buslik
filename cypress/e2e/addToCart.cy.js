/// <reference types="Cypress" />

const homePage = require("../pages/homePage");

describe('Add product to cart', ()=> {
    beforeEach(()=> {
        cy.visit('/');
    });

    it('Add product to cart from home page. Cart should have product with same name', ()=>{
        homePage.bestProposes.btnAddToCart()
        .nth(2)
        .scrollIntoView()
        .click();
    });
});