let myLibrary = [];

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function Book(title, author, pageLength, completedPages, readStatus) {
  this.title = title
  this.author = author
  this.pageLength = pageLength
  this.completedPages = completedPages
  this.readStatus = readStatus
}
function addBookToLibrary(book) {
   myLibrary.push(book)
}
harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K Rowling", 320, 0, "Not Read")
percyJackson = new Book("Percy", "Dude", 500, 250, "Read" )
addBookToLibrary(harryPotter)
addBookToLibrary(percyJackson)
const container = document.querySelector('.container')
function displayBook() {

    myLibrary.forEach(element => {
        let card = document.createElement('div')
        let readOrNot = document.createElement('div')
        let readText = document.createTextNode('Read')
        let notReadText = document.createTextNode('Not Read')
        readOrNot.classList.add('readButton')
        if(element.readStatus == 'Read'&& !readOrNot.hasChildNodes()) {
            readOrNot.append(readText)
        } else if (element.readStatus == 'Not Read'&& !readOrNot.hasChildNodes()) {
            readOrNot.append(notReadText)
        } else if (element.readStatus == 'Read'&& readOrNot.hasChildNodes()) {
            removeAllChildNodes(readOrNot)
            readOrNot.appendChild(readText)
        } else if (element.readStatus == 'Not Read'&& readOrNot.hasChildNodes()) {
            removeAllChildNodes(readOrNot)
            readOrNot.appendChild(notReadText)
        }
        
        readOrNot.addEventListener('click', (e) => {

            if(readOrNot.contains(readText)) {
                readOrNot.removeChild(readText)
                readOrNot.append(notReadText)
            } else if (!readOrNot.hasChildNodes()) {
                readOrNot.append(readText)
            }
            else {
                readOrNot.removeChild(notReadText)
                readOrNot.append(readText)
            }
            if(readOrNot.contains(readText)) {
                element.readStatus = 'Read'
            }
            else if (readOrNot.contains(notReadText)) {
                element.readStatus = 'Not Read'
            }
            
        })
        card.classList.add('card')
        card.dataset.thing = myLibrary.indexOf(element)
        container.append(card)
        let divTitle = document.createElement('div')
        divTitle.append('Title: ' + element.title)
        let divAuthor = document.createElement('div')
        divAuthor.append('Author: ' + element.author)
        let divPages = document.createElement('div')
        divPages.append('Page Length: ' + element.pageLength)
        let divRead = document.createElement('div')
        divRead.append("Pages Read: " + element.completedPages)
        let deleteButton = document.createElement('img')


        deleteButton.classList.add('deleteButton')
        deleteButton.src = "delete.png"
        deleteButton.addEventListener('click',(e) => {
            card.remove()

            myLibrary.splice(card.dataset.thing, 1)
            console.log(myLibrary)
            console.log(card.dataset.thing)

            myLibrary.forEach(element => {
                card.dataset.thing = myLibrary.indexOf(element)
            })
        })
        card.append(divTitle, divAuthor, divPages, divRead)
        card.append(readOrNot)
        card.append(deleteButton)

        console.log(card.dataset.thing)

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

