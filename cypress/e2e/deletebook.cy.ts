import * as data from "../fixtures/data.json"

describe('Delete books from collection', () => {
  it('Deletes all the books from collection', () => {
    cy.login(data.signIn.username,data.signIn.password)
    cy.get('.menu-list').eq(5).within(() => {
        cy.get('#item-3').click()
    })
    //We can put conditional testing here but here we dont have element in the dom ".rt-noData" on which we will apply condition. 
      cy.contains('Delete All Books').click();
      cy.get('.modal-dialog').find('#closeSmallModal-ok').click();
      cy.get('.rt-noData').should('be.visible');
    });
  });