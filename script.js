let myLibrary = [];

function Book(title, author, pageLength, completedPages) {
  this.title = title
  this.author = author
  this.pageLength = pageLength
  this.completedPages = completedPages
}
function addBookToLibrary(book) {
 return myLibarary = myLibrary.push(book)
}
harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K Rowling", 320, 0)
percyJackson = new Book("Percy", "Dude", 500, 250 )
addBookToLibrary(harryPotter)
addBookToLibrary(percyJackson)
const container = document.querySelector('.container')
function displayBook() {

    myLibrary.forEach(element => {
        let card = document.createElement('div')
        card.classList.add('card')
        container.append(card)
        let divTitle = document.createElement('div')
        divTitle.append('Name: ' + element.title)
        let divAuthor = document.createElement('div')
        divAuthor.append('Author: ' + element.author)
        let divPages = document.createElement('div')
        divPages.append('Page Length: ' + element.pageLength)
        let divRead = document.createElement('div')
        divRead.append("Pages Read: " + element.completedPages)
        card.append(divTitle, divAuthor, divPages, divRead)

    });
}
const button = document.querySelector('button')
const body = document.querySelector('body')
button.addEventListener('click', (e) => {
        let description = document.createElement('div')
        description.classList.add('description')
        body.append(description)
        let forms = document.createElement('form')
        let input = document.createElement('input')
        forms.append("Name:" + input, "Author:" + input, "Page Length:" +)
        description.append()
})

displayBook()