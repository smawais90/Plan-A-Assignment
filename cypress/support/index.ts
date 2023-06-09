/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(email:String, password: String): Chainable<any>;
      getproduct(): Chainable<any>;
    }
  }