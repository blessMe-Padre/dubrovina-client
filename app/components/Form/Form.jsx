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
                    <button className={styles.send_button_send} type="submit">Получить расчет</button>
                    <a className={styles.send_button_whatsapp} href="">
                        <span>Или напишите на WhatsApp</span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0025 0.875H10.9975C5.4148 0.875 0.875 5.41606 0.875 11C0.875 13.2148 1.58881 15.2677 2.80255 16.9345L1.54072 20.696L5.43252 19.4518C7.03353 20.5124 8.94336 21.125 11.0025 21.125C16.5852 21.125 21.125 16.5827 21.125 11C21.125 5.41733 16.5852 0.875 11.0025 0.875ZM16.894 15.1728C16.6497 15.8625 15.6803 16.4346 14.907 16.6017C14.378 16.7143 13.6869 16.8042 11.3607 15.8398C8.38522 14.607 6.46906 11.5835 6.31972 11.3873C6.1767 11.1911 5.11737 9.78627 5.11737 8.33333C5.11737 6.88039 5.85523 6.17291 6.15266 5.86916C6.39692 5.61983 6.80066 5.50592 7.18794 5.50592C7.31323 5.50592 7.42588 5.51225 7.52712 5.51731C7.82455 5.52997 7.97389 5.54769 8.17006 6.01723C8.41433 6.60575 9.00917 8.05869 9.08005 8.20803C9.15219 8.35738 9.22433 8.55988 9.12308 8.75605C9.02816 8.95855 8.94462 9.04841 8.79528 9.22053C8.64594 9.39266 8.50419 9.52428 8.35484 9.70906C8.21816 9.8698 8.06375 10.0419 8.23588 10.3393C8.408 10.6304 9.00284 11.6012 9.87866 12.3808C11.0089 13.387 11.9252 13.7084 12.253 13.8451C12.4972 13.9464 12.7883 13.9223 12.9668 13.7325C13.1933 13.4882 13.473 13.0832 13.7578 12.6845C13.9603 12.3985 14.216 12.3631 14.4843 12.4643C14.7576 12.5592 16.2043 13.2743 16.5017 13.4224C16.7991 13.5717 16.9953 13.6426 17.0674 13.7679C17.1383 13.8932 17.1383 14.4817 16.894 15.1728Z" fill="#2A3A57" />
                        </svg>
                    </a>
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
