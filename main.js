const popUpBtn = document.getElementById("pop-up-btn");
const popup = document.getElementById('pop-up');
const close = document.getElementById('btn-close');
const titleval = document.getElementById('title');
const authorval = document.getElementById('author')
const yearPublishedVal = document.getElementById('yearPublished');
const submit = document.getElementById('sbmt-btn');
let read = document.getElementById('read-check');
const bookCards = document.getElementById("book-cards");

let bookCounter = 0;

const myLibrary = [];

function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished; 

    
}

function displayPopUp() {
    popup.style.display = "block"; 

}

function addBook(title, author, yearPublished, read){
    let newBook = new Book(title, author, yearPublished, read);
    myLibrary.push(newBook);

    console.log(myLibrary);

}

function removeElement() {

}

function changeRead() {
    if (read.checked == true) {
        read.checked = false;
    }
    else {
        read.checked = true;
    }
}

function bookDetails(array) {
    for (let i = bookCounter; i < array.length; i++) {
        let newcard = document.createElement('div');
        bookCards.appendChild(newcard);
        newcard.style.backgroundColor = '#D3D3D3';
        newcard.style.border = '2px solid black';
        let title = document.createElement('h2');
        title.innerText = array[i].title;
        newcard.appendChild(title);
        let author = document.createElement('h2');
        author.innerText = array[i].author;
        newcard.appendChild(author);
        let yearPublished = document.createElement('h2');
        yearPublished.innerText = array[i].yearPublished;
        newcard.appendChild(yearPublished);
        let buttondiv = document.createElement('div');
        buttondiv.style.display = 'flex';
        buttondiv.style.flexDirection = 'column';
        buttondiv.style.justifyContent = 'center';
        buttondiv.style.alignItems = 'center';
        buttondiv.style.gap = '10px';
        newcard.appendChild(buttondiv);
        let hasread = document.createElement('button');
        if (read.checked == false) {
            hasread.style.backgroundColor = 'red';
            hasread.textContent = 'Not read';
            hasread.style.color = 'white';
            hasread.style.borderRadius = '6px';

        } 
        else if (read.checked == true) {
            hasread.style.backgroundColor = 'green';
            hasread.textContent = 'Read';
            hasread.style.color = 'white';
            hasread.style.borderRadius = '6px';
            hasread.style.border = 'none';
        }
        let removeElement = document.createElement('button');
        buttondiv.appendChild(hasread);
        buttondiv.appendChild(removeElement);
        hasread.style.gap = '10px';
        removeElement.style.gap= '10px';
        removeElement.style.borderRadius = '6px';
        removeElement.style.backgroundColor = 'white';
        hasread.style.width = '80px';
        removeElement.style.width = '80px';
        removeElement.textContent = 'Remove';
        newcard.style.minWidth = '160px';
        newcard.style.borderRadius = '12px';
        newcard.style.textAlign = 'center';
        newcard.style.padding = '20px';
        hasread.style.boxShadow = '';
        hasread.style.border = 'none';

        bookCounter += 1;

        removeElement.addEventListener('click', () => {
            newcard.remove();
        })

    }
}

function checkRead() {
    if (read === false) {
        read.style.backgroundColor = red;
    }
    else {
        read.style.backgroundColor = green;
    }
}

function stopSubmit(event) {  
    
    event.preventDefault();
    if (titleval.value && authorval.value && yearPublishedVal.value) {
    addBook(titleval.value, authorval.value, yearPublishedVal.value);
    bookDetails(myLibrary);
    popup.style.display = "none";
    titleval.value = '';
    authorval.value = '';
    yearPublishedVal.value = '';
    read.checked = false;
    }
    //else {
    //titleval.attributes['required'] = true;
   // authorval.attributes['required'] = true;
    //yearPublishedVal.attributes['required'] = true;

   // }

}

popUpBtn.addEventListener('click', displayPopUp);

close.addEventListener('click', ()=> {
    popup.style.display = "none";
    titleval.value = '';
    authorval.value = '';
    yearPublishedVal.value = '';
    read.checked = false;
})

submit.addEventListener('click', stopSubmit, false);

console.log(read.value);



