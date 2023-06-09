import * as selector from "../fixtures/selectors.json"

export const searchbook = (Publisher: string): void => {
    cy.get(selector["search-box"]).type(Publisher);
}

export const selectBook = (index: number): void => {
    cy.get(selector["table-body"]).within(() => {
        cy.get(selector["book-row"]).eq(index).click()
    })
}

export const assertSelectedBook = (publisher: string, author: string, bookName: string): void => {
    cy.get(selector["side-bar"]).eq(5).within(() => {
        cy.get(selector.profile).click()
    })
    cy.get(selector["table-body"]).within(() => {
        cy.get(selector["collection-row"]).eq(0).within(() => {
            cy.contains(author)
            cy.contains(publisher)
            cy.contains(bookName)
        })
    })
}