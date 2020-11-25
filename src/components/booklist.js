import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookcontext'
import { EmptyList, BookListStyle, Ul } from './styledcomponents/bookliststyle'
import BookDetails from './bookdetail'
const BookList = () => {
    const { books } = useContext(BookContext);

    return(  
      <BookListStyle>
            <Ul>
                {
                    books.map(book => {
                        return (
                            <BookDetails
                                key={book.id}
                                book={book}
                                id={book.id}
                            />
                        )
                    })
                }
            </Ul>
        </BookListStyle>
        )
    
}

export default BookList;