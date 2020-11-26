import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookcontext'
import { Form, TextInput, SubmitInput, H4 } from './styledcomponents/bookformstyle'
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import './styles.css'

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [auther, setAuther] = useState('');
    const [date, setDate] = useState();
    const [isEmpty, setIsEmpty] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '' || auther === '' || date === '') {
            setIsEmpty(true);
            return;
        }
        dispatch({
            type: "ADD_BOOK",
            book: {
                title,
                auther,
                date: date.format('jYYYY/jM/jD')

            }
        })
        setTitle('');
        setAuther('');
        setDate(null);

    }
    return (
        <Form onSubmit={handleSubmit}>
            {isEmpty && <H4>پر کردن تمام فیلد ها اجباری است</H4>}
            <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="عنوان" />
            <TextInput value={auther} onChange={(e) => setAuther(e.target.value)} placeholder="نویسنده" />
            <DatePicker
                persianDigits={false}
                onChange={date => setDate(date)}
                value={date}
                isGregorian={false}
                timePicker={false}
                placeholder="تاریخ شروع را انتخاب کنید"
            />
            <SubmitInput value="کتاب را به لیست اضافه کن" />
        </Form>
    );
}

export default BookForm;