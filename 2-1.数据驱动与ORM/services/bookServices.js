const book = require('../models/Book');
exports.addBook = async function(bookObj){
   const ins =await  book.create(bookObj);
   return ins.toJSON();
}
exports.deleteBook = async function(bookId){
    if(bookId){
        book.destroy({
            id:bookId
        });
    }
    
}
exports.updateBook = async function(id,bookObj){
    book.update(bookObj,{
        where:{
            id,
        }
    });
}
