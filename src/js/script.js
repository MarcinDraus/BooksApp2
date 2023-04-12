//'use strict';

const booksListEl = document.querySelector('.books-list');
console.log(booksListEl);
const bookWrapper = document.querySelector('#template-book');


console.log(bookWrapper);
const data = dataSource.books;

//   displayBooks();
//     data.forEach(function(element){
//      console.log(element);
//     });

/*displayBooks()*/
function  render(){
  for(const book of data){
    console.log(data, book);
    const wrapper = Handlebars.compile(bookWrapper.innerHTML);
    const generateHTML = wrapper(book);
    const container = utils.createDOMFromHTML(generateHTML);
    booksListEl.appendChild(container);    
  }
}
render();
