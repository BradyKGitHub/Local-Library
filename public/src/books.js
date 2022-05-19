function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id ===id)
}

function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter(book => book.borrows[0].returned);
  let notReturned = books.filter(book => book.borrows[0].returned === false);
  return [notReturned, returned];
}

function getBorrowersForBook(book, accounts) {
  let accountsArray = []
  for ( let borrow of book.borrows){
    let borrowerAccount = accounts.find(account => borrow.id === account.id)
    borrowerAccount.returned = borrow.returned
    accountsArray.push(borrowerAccount)
  }
  return accountsArray.splice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
