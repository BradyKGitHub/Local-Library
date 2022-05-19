function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((name1,name2)=>(name1.name.last>name2.name.last)? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let results = 0 
  const accId = account.id
  books.forEach(books => books.borrows.forEach((borrowed)=>(accId === borrowed.id)&& results++))
  return results
}
//helper for author id
const _getAuthorById = (author, id) => {
  return author.find((author) => author.id === id)
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id

  let result = []
  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned)
  })
  result = result.map((book) => {
    const author = _getAuthorById(authors, book.authorId)
const newBook = {
  ...book,
  author,
}
return newBook
  })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
