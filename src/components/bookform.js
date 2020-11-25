import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookcontext'
import { Form, TextInput, SubmitInput } from './styledcomponents/bookformstyle'
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import './styles.css'

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [auther, setAuther] = useState('');
    const [date, setDate] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_BOOK",
            book: {
                title,
                auther,


            }
        })
        setTitle('');
        setAuther('');
        setDate('');

    }
    return (
        <Form onSubmit={handleSubmit}>
            <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="عنوان" />
            <TextInput onChange={(e) => setAuther(e.target.value)} placeholder="نویسنده" />
            <DatePicker
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