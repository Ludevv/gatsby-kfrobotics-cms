import * as React from 'react';
import { Formik } from 'formik';
import "./Form.css";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export const Email = () => {
    const [showMessage, setShowMessage] = useState(false);

    return(
        <Formik
            initialValues={{ name: '', phone: '', email: '', description: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setShowMessage(true);
                setSubmitting(false);
                values.name ='';
                values.phone ='';
                values.email ='';
                values.description ='';
            }}>
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
        <form action="https://formspree.io/f/moqyljjg" onSubmit={handleSubmit} method="POST" className="form__form">
            <div className="form__item">
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder=" "
                />
                <label htmlFor="name">Imię i nazwisko</label>
                <div className="forms__item__bar" />
            </div>
            <div className="form__item">
                <input 
                    id="phone"
                    type="number" 
                    name="phone"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder=" " 
                />
                <label htmlFor="phone">Numer telefonu</label>
                <div className="forms__item__bar" />
            </div>
            <div className="form__item">
                <input 
                    id="email"
                    type="text" 
                    name="email"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder=" " 
                />
                <label htmlFor="email">Adres e-mail</label>
                <div className="forms__item__bar" />
            </div>
            <div className="form__item">
                <textarea
                    id="description"
                    name="description"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder=" " />
                <label htmlFor="description">Wiadomość</label>
                <div className="forms__item__bar" />
            </div>
            <button className="form__button" type="submit" disabled={isSubmitting}>Wyślij</button>
            {showMessage && <p>Wysłano</p>}
        </form>
    )}
    </Formik>
)};
