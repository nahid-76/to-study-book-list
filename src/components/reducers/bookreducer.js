import uuid from "react-uuid"
export const BookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return (
                [
                    ...state,
                    {
                        title: action.book.title,
                        auther: action.book.auther,
                        date: action.book.date, 
                        id: uuid()
                    }
                ]
            );
        case "REMOVE_BOOK":
            return (
                state.filter(book => book.id !== action.id)
            );
        default: return state;
    }
}