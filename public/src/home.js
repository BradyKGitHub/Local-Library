

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}
function getBooksBorrowedCount(books) {
 let results = 0
 for (let i = 0; i < books.length; i++){
   const borrowed = books[i].borrows
   for (let k = 0; k < borrowed.length; k++){
     if (borrowed[k].returned === false){
       results++
     }
   }
 }
 return results
}

function getMostCommonGenres(books) {
const allGenresCount= books.reduce((acc, book)=>{
   const genre = book.genre
  if( acc[genre]){
    acc[genre]++
       } else {
    acc[genre]=1
       }
       return acc
 }, {})
 let genreArray =  Object.keys(allGenresCount).map((genre)=>{
   return {name: genre, count:allGenresCount[genre]}
 })
   
   genreArray.sort((genreA, genreB)=> genreB.count - genreA.count)
   return genreArray.splice(0,5)
}

//   const allGenresCount = {} 
//   for (let i = 0; i < books.length; i++){
//     const genre = books[i].genre
//    if( allGenresCount[genre]){
// allGenresCount[genre]++
//    } else {
// allGenresCount[genre]=1
//    }
//   }
//   let genreArray =  []
//   for ( let genre in allGenresCount){
//     genreArray.push({name: genre, count:allGenresCount[genre]})
//   }
//   genreArray.sort((a, b)=> b.count - a.count)
//   return genreArray.splice(0,5)
// }

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    let newBookCount = {
      name: book.title,
      count: book.borrows.length
    }
    return newBookCount
  })
  result.sort((bookA, bookB) => bookB.count - bookA.count)

  result.splice(5)

  return result;

  
}
const getBooksByAuthorId = (books, authorId) => {
  return books.filter((book) => book.authorId === authorId)
}
//helper function to find books by their authors id

function getMostPopularAuthors(books, authors) {
  //mapped to get and array of the authors named and reduce it to their full name and total times their book was borrowed
  const popAuthors = authors.map((author) => {
    const fullname = `${author.name.first} ${author.name.last}`,
      booksByAuthor = getBooksByAuthorId(books, author.id),
      totalBorrows = booksByAuthor.reduce((acc, book) => acc + book.borrows.length, 0),
      authorInfo = {
        name: fullname, 
        count: totalBorrows
      }
      
    return authorInfo
  })
  // sort used to sort from most popular to least and splice used to narrow it down to top 5
  popAuthors.sort((authorA, authorB) => authorB.count - authorA.count)

  popAuthors.splice(5)

  return popAuthors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
