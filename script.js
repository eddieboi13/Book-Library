let myLibrary = [];

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function Book(title, author, pageLength, completedPages) {
  this.title = title
  this.author = author
  this.pageLength = pageLength
  this.completedPages = completedPages
}
function addBookToLibrary(book) {
 return  myLibrary.push(book)
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
        divTitle.append('Title: ' + element.title)
        let divAuthor = document.createElement('div')
        divAuthor.append('Author: ' + element.author)
        let divPages = document.createElement('div')
        divPages.append('Page Length: ' + element.pageLength)
        let divRead = document.createElement('div')
        divRead.append("Pages Read: " + element.completedPages)
        card.append(divTitle, divAuthor, divPages, divRead)

    });
}
displayBook()
const button = document.querySelector('button')
button.classList.add('button')
const body = document.querySelector('body')
button.addEventListener('click', (e) => {
        let description = document.createElement('div')
        description.classList.add('description')
        body.append(description)
        let forms = document.createElement('form')

        let nameInput = document.createElement('input')
        let nameLabel = document.createElement('label')
        nameLabel.append('Title: ')
        let authorInput = document.createElement('input')
        let authorLabel = document.createElement('label')
        authorLabel.append('Author: ')
        let lengthInput = document.createElement('input')
        let lengthLabel = document.createElement('label')
        lengthLabel.append('Page Length: ')
        let readInput = document.createElement('input')
        let readLabel = document.createElement('label')
        readLabel.append('Pages Read:')

        let formButton = document.createElement('button')
        formButton.classList.add('formButton')
        formButton.type = 'button'
        formButton.append('Add Book')      
        formButton.addEventListener('click', (e) => {
            removeAllChildNodes(container)
            newbook = new Book(nameInput.value, authorInput.value, lengthInput.value, readInput.value)
            addBookToLibrary(newbook)
            description.remove()
        })
        formButton.addEventListener('click', (e) => {
           return displayBook()
        })
        forms.appendChild(nameLabel)
        forms.appendChild(nameInput)
        forms.appendChild(authorLabel)
        forms.appendChild(authorInput)
        forms.appendChild(lengthLabel)
        forms.appendChild(lengthInput)
        forms.appendChild(readLabel)
        forms.appendChild(readInput)
        forms.appendChild(formButton)
        description.append(forms)
})

