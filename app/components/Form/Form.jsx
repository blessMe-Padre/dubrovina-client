'use client'

import axios from 'axios';
import { useState } from 'react';
// import successImg from '/success.webp';

import styles from './style.module.css';

const initialFields = [
    {
        label: 'Имя',
        type: 'text',
        name: 'text-412',
        id: 'text-412',
        validation_error: false,
        validation_message: '',
        placeholder: 'Введите имя/организацию',
    },
    {
        label: 'Телефон',
        type: 'tel',
        name: 'tel-533',
        id: 'tel-533',
        validation_error: false,
        validation_message: '',
        placeholder: 'Введите телефон',
    },
]

export default function Form({ title, subtitle, color = "#2a3a57", background = "#ffffff" }) {
    const [fields, setFields] = useState(initialFields);
    const [formMessage, setFormMessage] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFields(fields.map(field => ({
            ...field,
            validation_error: false,
            validation_message: '',
        })));

        const formData = new FormData(event.target);
        formData.append("_wpcf7_unit_tag", "form_id");
        const response = await axios.post(
            'https://api.freelancer-vl.ru/wp-json/contact-form-7/v1/contact-forms/38/feedback',
            formData,
        );
        // console.log('Ответ от WordPress:', response);
        if (response.status !== 200) {
            return alert('Что-то пошло не так. Попробуйте еще раз.');
        }

        if (response.data.invalid_fields && response.data.invalid_fields.length > 0) {
            setFields(fields.map(field => {
                const error = response.data.invalid_fields.find(x => x.field === field.name);

                setIsActive(false);
                return {
                    ...field,
                    validation_error: !!error,
                    validation_message: error ? error.message : '',
                };
            }));
        }
        else {
            setIsActive(true);
        }
        setFormMessage(response.data.message);
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="main-form">
                <h2 className={styles.title} style={{ color: color }}>{title}</h2>
                <p
                    className={styles.text}
                    style={{ color: color }}
                >
                    {subtitle}
                </p>

                {fields.map(field => (
                    <div key={field.id} className='main-form__input'>
                        {/* <label>{field.label}</label> */}
                        <input
                            type={field.type}
                            name={field.name}
                            id={field.id}
                            placeholder={field.placeholder}
                            className={styles.input}
                            style={{ background: background, color: color }}
                        />
                        <p className='main-form__error-text'>{field.validation_message}</p>
                    </div>
                ))}
                <div className={styles.button_wrapper}>
                    <button className={styles.send_button_send} type="submit">Записаться</button>
                </div>
                <p>Нажимая кнопку, вы даете согласие на обработку персональных данных</p>
            </form>
            <p className='main-form__error-text mt-25'>{formMessage}</p>

            <div className={`form-send-ok-popup ${isActive ? 'is-active' : ''}`}>
                {/* <p>Сообщение успешно отправлено</p> */}
                {/* <img src={successImg} width={100} height={100} alt="fireSpot" /> */}
            </div>
        </>
    )
}
