import React, { useContext } from 'react';
import { Title, Auther, Li, P } from './styledcomponents/bookdetailsstyle'
import { BookContext } from '../contexts/bookcontext'
const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return (
        <Li>
            <div onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })} style={{ cursor: "pointer" }}>
                <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
            </div>
            <div>
                <Title>{book.title}</Title>
                <Auther>{book.auther}</Auther>
                <P>{book.date}</P>

            </div>
        </Li>
    );
}

export default BookDetails;