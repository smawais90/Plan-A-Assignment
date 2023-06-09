import * as data from "../fixtures/data.json"
import { searchbook, selectBook, assertSelectedBook } from "../helpers/addBook.helper"

describe('Book Store test cases', () => {
  it('adds book successfully in cart', () => {
    cy.login(data.signIn.username, data.signIn.password)
    searchbook(data.bookData.publisher);
    selectBook(3); 
    cy.get('button').eq(3).click()
    assertSelectedBook(data.bookData.publisher,data.bookData.author,data.bookData.bookName)
  })
})