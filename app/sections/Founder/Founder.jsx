'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './style.module.css';

const url = 'http://89.108.115.136:1338/api/hero?populate=*';
const domain = 'http://89.108.115.136:1338';

const getPageData = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке меню:", error);
        return [];
    }
};

const Founder = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // const data = await getPageData();
        };

        fetchData();
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className='title'>Стоматологическая клиника доктора дубровиной</h2>

                <div className={styles.wrapper}>
                    <Image
                        src="/delete/image-1.jpg"
                        alt="Изображение"
                        width={195}
                        height={189}
                        className={`${styles.small_bg} dsv-image`}
                    />

                    <div className={styles.description_wrapper}>
                        <div className={styles.description}>
                            <div className={styles.description_text}>
                                <p>Мы верим в силу улыбки, способной изменить жизнь человека - стать уверенным, добиваться желаемого. Ежедневно в «Клинике доктора дубровиной» мы работаем над тем, чтобы наши пациенты улыбались свободно и красиво.
                                </p>
                                <p>
                                    Проводим комплексное лечение по всем направлениям современной стоматологии: от профессиональной гигиены и отбеливания зубов до протезирования и имплантации, сложнейших зубосохраняющих и реконструктивных хирургических операций.
                                </p>
                                <p>
                                    Нашему опыту можно доверять!
                                </p>
                            </div>
                        </div>
                        <Image
                            src="/bg/quote.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className={`${styles.quote} dsv-image`}
                        />

                    </div>

                    <div className={styles.description_item}>
                        <Image
                            src="/delete/image-2.jpg"
                            alt="Изображение"
                            width={676}
                            height={640}
                            className={`${styles.large_bg} dsv-image`}
                        />
                        <div className={styles.info}>
                            <p className={styles.name}>Анастасия дубровина</p>
                            <div className={styles.border_left}></div>
                            <p className={styles.info_text}>Основатель клиники, главный врач, стаж более 20 лет</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Founder;