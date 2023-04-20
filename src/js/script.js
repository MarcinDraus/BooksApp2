//'use strict';

const booksListEl = document.querySelector('.books-list');

const bookWrapper = document.querySelector('#template-book');


//console.log(bookWrapper, 'bookWrapper');
const data = dataSource.books;

function  render(){
  //sprawdź kazdy element jeden po drugim z tablicy- dataSource.books 
    
  for(const book of data){
    //console.log(data,'data', book, 'book');
    //wświetl id="template-book" ,  <li class="book">
    const wrapper = Handlebars.compile(bookWrapper.innerHTML);
    //załaduj do <li> część z tablicty dataSource.books - skąd wie którą{}?
    const generateHTML = wrapper(book);
    
    //wyświetl w postaci nowego <div> zawartość "<li> część z tablicty dataSource"
    const container = utils.createDOMFromHTML(generateHTML);
    //console.log(container, 'container');
    //stworzyć nowy pod element ( dziecko) do elementu <ul> i tam włozć  zawartość "<li> część z tablicty dataSource"
    booksListEl.appendChild(container);    
    //console.log(booksListEl,'booksListEl');
  }
}
render();
const favoriteBooks = [];
function initActions(){
  const booksImages = document.querySelectorAll('.book__image');
  for(const bookEl of booksImages ){
    
    bookEl.addEventListener('dblclick', (event)=> {
      event.preventDefault();
      //dodatkowa funkcja target(html)-
      const book = event.target.offsetParent;
      if(book.classList.contains('book__image')){
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
      }
      //console.log(event.target.offsetParent,'offsetParent');
      // console.log(favoriteBooks);
    });
    
  }
}

const filters = [];
const filtersEl = document.querySelector('.filters');
filtersEl.addEventListener('click', (check) => {
  if(check.target.tagName === 'INPUT' && check.target.type === 'checkbox' && check.target.name === 'filter'){
  
    if(check.target.checked){
      filters.push(check.target.value);
      console.log(check.target.value);
    }else{
      const unCheckFilters = filters.indexOf(check.target.value);
      filters.splice(unCheckFilters, 1);
    }

    console.log(filters, 'filters');
    filterBox();
  }
});

initActions();

function filterBox(){
  for(let bk of data){
    let shouldBeHidden = false;
    for(const filter of filters){
      if(!bk.details[filter]){
        shouldBeHidden = true;
        break;
        // eslint-disable-next-line indent
        }
      console.log(filters, 'bk');
    }
    const greyShow =  document.querySelector(`.book__image[data-id="${bk.id}"]`);
    if(shouldBeHidden ){
      greyShow.classList.add('hidden');
    }else{
      greyShow.classList.remove('hidden');
    }
    //console.log(shouldBeHidden, 'shouldBeHidden');
    //console.log(greyShow, 'greyShow');
  }
}
//filterBox();
//initActions();