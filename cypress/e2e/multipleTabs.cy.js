/// <reference types="Cypress" />

describe('Working with multiple tabs in cypress', () => {

    beforeEach(()=>{
        cy.visit('/');
        cy.confirmCookie();
        cy.confirmCity();
    });
    
    it.skip('Varify if there are href attribute ', () => {
        cy.get('.MSI_ext_nofollow.rds_hl_nofollow')
        .should('have.attr', 'href')
        .and('include', 'google.com/maps');
    });

    it.skip('Should visit the new tab removing target attribute', () => {
        cy.get('.MSI_ext_nofollow.rds_hl_nofollow')
        .invoke('removeAttr', 'target')
        .click();
    });

    it('visit new tab without removing target', () => {
        cy.get('.MSI_ext_nofollow.rds_hl_nofollow').then(newTab => {
            const hrefOfTab = newTab.prop('href')
            cy.visit(hrefOfTab)
           
        })
        cy.url().then((url) => {
            cy.log('Current URL is: ' + url)
          })

    });

});
