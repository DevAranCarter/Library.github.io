const popUpBtn = document.getElementById("pop-up-btn");
const popup = document.getElementById('pop-up');
const close = document.getElementById('btn-close');
const titleval = document.getElementById('title');
const authorval = document.getElementById('author')
const yearPublishedVal = document.getElementById('yearPublished');
const submit = document.getElementById('sbmt-btn');
const myLibrary = [];

function Book(title, author, yearPublished, about) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.about = about;
    
}

function displayPopUp() {
    popup.style.display = "block"; 

}

function addBook(title, author, yearPublished){
    let newBook = new Book(title, author, yearPublished);
    myLibrary.push(newBook);

    console.log(myLibrary);

}

function bookDetails(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title);
        console.log(array[i].author);
        console.log(array[i].yearPublished);
        console.log(array[i].about);

    }
}

function stopSubmit(event) {  
    addBook(titleval.value, authorval.value, yearPublishedVal.value);
    bookDetails(myLibrary);
    popup.style.display = "none";
    event.preventDefault();
    titleval.value = '';
    authorval.value='';
    yearPublishedVal.value = undefined;

}

popUpBtn.addEventListener('click', displayPopUp);

close.addEventListener('click', ()=> {
    popup.style.display = "none";
})

submit.addEventListener('click', stopSubmit, false)

