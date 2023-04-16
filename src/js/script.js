//'use strict';

const booksListEl = document.querySelector('.books-list');

const bookWrapper = document.querySelector('#template-book');


console.log(bookWrapper, 'bookWrapper');
const data = dataSource.books;

function  render(){
  //sprawdź kazdy element jeden po drugim z tablicy- dataSource.books 
    
  for(const book of data){
    console.log(data,'data', book, 'book');
    //wświetl id="template-book" ,  <li class="book">
    const wrapper = Handlebars.compile(bookWrapper.innerHTML);
    //załaduj do <li> część z tablicty dataSource.books - skąd wie którą{}?
    const generateHTML = wrapper(book);
    //wyświetl w postaci nowego <div> zawartość "<li> część z tablicty dataSource"
    const container = utils.createDOMFromHTML(generateHTML);
    console.log(container, 'container');
    //stworzyć nowy pod element ( dziecko) do elementu <ul> i tam włozć  zawartość "<li> część z tablicty dataSource"
    booksListEl.appendChild(container);    
    console.log(booksListEl,'booksListEl');
  }
}
render();
const favoriteBooks = [];
function initActions(){
  const booksImages = document.querySelectorAll('.book__image');
  for(const bookEl of booksImages ){
    
    bookEl.addEventListener('dblclick', (event)=> {
      event.preventDefault();
      const addfavoriteBooks = bookEl.getAttribute('data-id');
      if(bookEl.classList.contains('favorite'),
      favoriteBooks.includes(addfavoriteBooks)
      //favoriteBooks.indexOf(addfavoriteBooks)
      ){
        bookEl.classList.remove('favorite');
        const arrIndex = favoriteBooks.indexOf(addfavoriteBooks);
        favoriteBooks.splice(arrIndex, 1);
      }else{
        bookEl.classList.add('favorite');
        favoriteBooks.push(addfavoriteBooks);
      }
      
      
      console.log(favoriteBooks);
    });
    
  }
}
initActions();