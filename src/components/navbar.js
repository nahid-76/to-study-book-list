import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookcontext'
import { StyledNavBar, H1 } from './styledcomponents/navbarstyle'
const NavBar = () => {
    const { books } = useContext(BookContext);
    return (
        <StyledNavBar>
            <H1>لیست کتاب ها</H1>
            {books.length === 0 ?
                <p>کتابی برای مطالعه وجود ندارد</p> :
                <p>
                {books.length}
                </p>
            }
        </StyledNavBar>
    );
}

export default NavBar;
