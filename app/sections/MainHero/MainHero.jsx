'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './style.module.css';
import {
    Button, Popup

} from '@/app/components';

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/hero?populate=*`;

const getPageData = async () => {
    try {
        const res = await fetch(url, {
            cache: 'no-store',
        });
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

const MainHero = () => {
    const [bg, setBg] = useState([]);
    const [pageData, setPageData] = useState(null);
    const [popupActive, setPopupActive] = useState(false);

    const handleClick = () => {
        setPopupActive(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPageData();
            setPageData(data);
            const bgImage = window.innerWidth < 560
                ? data?.data?.imageSmall.url
                : data?.data?.imageLarge.url;

            if (bgImage) {
                setBg(bgImage);
            } else {
                setBg("/placeholder.jpg");
            }

            setBg(bgImage);
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className={styles.section}>
                <Image
                    aria-hidden
                    src={`${domain}${bg}`}
                    alt="Изображение"
                    width={1920}
                    height={973}
                    className={`${styles.bg} dsv-image`}
                />
                <div className="container relative">
                    <div className={styles.hero_wrapper}>
                        <div>
                            <h1 className={styles.title}>{pageData?.data?.title ? pageData?.data?.title : 'loading'}</h1>
                            <p
                                className={styles.subtitle}
                                dangerouslySetInnerHTML={{ __html: pageData?.data?.subtitle }}
                            ></p>
                        </div>
                        <div className={styles.line}></div>
                        <Button
                            color='white'
                            handleClick={handleClick}
                            href="#popup"
                            size='large'
                            text='Хочу красивую улыбку'></Button>

                    </div>

                    <div className={styles.button_wrapper}>
                        <div className={`${styles.hero_item} ${styles.hero_item_1}`}>
                            <Image
                                src="/icons/plus.svg"
                                alt="плюс"
                                width={30}
                                height={30}
                                className={styles.icon}
                            />
                            <span>Превосходные результаты</span>
                        </div>
                        <div className={`${styles.hero_item} ${styles.hero_item_2}`}>
                            <Image
                                src="/icons/plus.svg"
                                alt="плюс"
                                width={30}
                                height={30}
                                className={styles.icon}
                            />
                            <span>Цифровое оснащение клиники</span>
                        </div>
                        <div className={`${styles.hero_item} ${styles.hero_item_3}`}>
                            <Image
                                src="/icons/plus.svg"
                                alt="плюс"
                                width={30}
                                height={30}
                                className={styles.icon}
                            />
                            <span>Исключительный сервис</span>
                        </div>
                    </div>
                </div>


                <Popup active={popupActive} setActive={setPopupActive} />

            </div>
        </section>
    )
}

export default MainHero;