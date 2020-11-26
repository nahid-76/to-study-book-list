import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookcontext'
import { BookListStyle, Ul, RightButton, LeftButton, Btngroup } from './styledcomponents/bookliststyle'
import BookDetails from './bookdetail'
const BookList = () => {
    const { books } = useContext(BookContext);
    const [filter, setFilter] = useState(false);
    let today = new Date().toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
    const studybooks = filter ? books.filter(book => book.date === today) : books;
    return (
        <BookListStyle>
            <Btngroup>
                <RightButton onClick={() => setFilter(false)}>همه</RightButton>
                <LeftButton onClick={() => setFilter(true)}>کتاب های امروز</LeftButton>
            </Btngroup>
            <Ul>
                {
                    studybooks.map(book => {
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