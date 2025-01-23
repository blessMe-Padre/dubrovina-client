'use client'
import { useForm } from 'react-hook-form';
import styles from './style.module.css';
import { useState } from 'react';

export const Form = ({ setActive }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState();
    const [sending, isSending] = useState(false);

    const onSubmit = async (formData) => {
        isSending(true);
        try {
            const response = await fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                setIsSuccess(true);
                isSending(false);
                setError(undefined)
                // setActive(false)
                reset();
            } else {
                isSending(false);
                setError('Что-то пошло не так');
                console.error('Статус ошибки:', response.status);
            }
        } catch (err) {
            setError('Ошибка запроса, попробуйте позже');
            isSending(false);
            console.error('Fetch error:', err);
        }
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className={styles.form__title}>ЗАПИШИТЕСЬ НА консультацию сейчас и получите постоянную семейную скидку 10%</p>

            <div className={styles.input_wrapper}>
                <input
                    placeholder='Введите имя'
                    {...register('name', { required: { value: true, message: 'Введите имя' } })}
                    error={errors.name}
                    className={`${styles.form__input} ${errors.name ? styles.error : ''}`}
                    type='text'
                />
                <div className={styles.input_text_error}>{errors['name'] && errors['name'].message}</div>
            </div>
            <div className={styles.input_wrapper}>
                <input
                    placeholder='Введите телефон'
                    {...register('contact-data', { required: { value: true, message: 'Введите телефон' } })}
                    error={errors.name}
                    className={`${styles.form__input} ${errors['contact-data'] ? styles.error : ''}`}
                    type='text'
                />
                <div className={styles.input_text_error}>{errors['contact-data'] && errors['contact-data'].message}</div>
            </div>
            {isSuccess &&
                <div className={styles.success}>
                    Ваша форма успешно отправлена
                </div>
            }
            {error &&
                <div className={styles.send_error}>
                    {error}
                </div>
            }


            <button className={styles.form__btn__submit}>
                <p>Записаться</p>


                {!sending &&
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }

                {sending &&
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a9" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#000000"></stop><stop offset=".3" stopColor="#000000" stopOpacity=".9"></stop><stop offset=".6" stopColor="#000000" stopOpacity=".6"></stop><stop offset=".8" stopColor="#000000" stopOpacity=".3"></stop><stop offset="1" stopColor="#000000" stopOpacity="0"></stop></radialGradient><circle transformOrigin="center" fill="none" stroke="url(#a9)" strokeWidth="15" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transformOrigin="center" fill="none" opacity=".2" stroke="#000000" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
                }

            </button>

            <div className={styles.form__policy}>
                <p className={styles.policy_text}>
                    *Нажимая, кнопку, вы даете <a style={{ textDecoration: 'none', color: '#BDC1C8'}} href='/'>согласие на обработку персональных данных</a></p>
            </div >
        </form>
    )
}