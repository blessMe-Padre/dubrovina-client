'use client';
import { useEffect, useState } from 'react';

import styles from './style.module.scss';
import Image from 'next/image';
import { Button, Popup } from '@/app/components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';

export default function page({ params }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [popupActive, setPopupActive] = useState(false);
    const { id } = params;

    const handleClick = () => {
        setPopupActive(true);
    }

    if (!page) {
        notFound();
    }

    return (
        <div className="container">
            Специалист с id = {id}
            <div className='section'>
                <div className={styles.image_wrapper}>
                    <Image
                        src='/placeholders/specialist_id.jpg'
                        alt='Dubrovina logo'
                        width={1439}
                        height={850}
                        className="dsv-image"
                    />
                </div>

                <header className={styles.header}>
                    <div>
                        <h1 className={styles.title}>дубровина екатерина сергеевна</h1>
                        <p className={styles.subtitle}>Ведущий ортопед, хирург имплантолог клиники</p>
                    </div>
                    <Button
                        color='black'
                        handleClick={handleClick}
                        href="#popup"
                        size='medium'
                        text='Записаться'></Button>
                </header>

                <section className={styles.about}>
                    <div className={styles.about_row}>
                        <div className={styles.about_title}>
                            <h2>специализация</h2>
                        </div>
                        <div className={styles.about_descriptions}>
                            <p>Стаж: 16 лет</p>
                            <p>Особые профессиональные навыки: различные виды терапевтического и хирургического лечения, в том числе лечение кариеса и его осложнений, эстетическая реставрация, имплантация и удаление зубов; установка коронок и протезов на зубы и импланты.</p>
                            <p>Регалии: кандидат медицинских наук, автор статей по хирургической стоматологии.</p>
                        </div>
                    </div>
                    <div className={styles.about_row}>
                        <div className={styles.about_title}>
                            <h2>Образование</h2>
                        </div>
                        <div className={styles.about_descriptions}>
                            <p>Московский государственный медико-стоматологический университет Евдокимова (стоматология) – 2007 г.</p>
                            <p>Московский государственный медико-стоматологический университет Евдокимова (стоматология ортопедическая) – 2015 г.
                            </p>
                        </div>
                    </div>
                    <div className={styles.about_row}>
                        <div className={styles.about_title}>
                            <h2>Повышение квалификации</h2>
                        </div>
                        <div className={styles.about_descriptions}>
                            <p>Московский государственный медико-стоматологический университет Евдокимова (стоматология общей практики) – 2009 г.</p>
                            <p>Российский университет дружбы народов (РУДН) (физиотерапия) – 2013 г.</p>
                        </div>
                    </div>

                    <div className={`${styles.about_row} ${styles.about_row_slider}`}>
                        <div className={styles.about_title}>
                            <h2>сертификаты</h2>
                        </div>
                        <div className={`${styles.about_wrapper} about_wrapper`}>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                modules={[Navigation]}
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    560: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                }}
                            >

                                <SwiperSlide>
                                    <div className={styles.image_slide}>
                                        <Image
                                            src='/remove_from_server/sert-1.png'
                                            alt='Dubrovina logo'
                                            width={292}
                                            height={449}
                                            className="dsv-image"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide><div className={styles.image_slide}>
                                    <Image
                                        src='/remove_from_server/sert-1.png'
                                        alt='Dubrovina logo'
                                        width={292}
                                        height={449}
                                        className="dsv-image"
                                    />
                                </div></SwiperSlide>
                                <SwiperSlide><div className={styles.image_slide}>
                                    <Image
                                        src='/remove_from_server/sert-1.png'
                                        alt='Dubrovina logo'
                                        width={292}
                                        height={449}
                                        className="dsv-image"
                                    />
                                </div></SwiperSlide>
                                <SwiperSlide><div className={styles.image_slide}>
                                    <Image
                                        src='/remove_from_server/sert-1.png'
                                        alt='Dubrovina logo'
                                        width={292}
                                        height={449}
                                        className="dsv-image"
                                    />
                                </div></SwiperSlide>

                                <SwiperNavButtons
                                    addClass={'buttons_bottom'}
                                />
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>

            <Popup active={popupActive} setActive={setPopupActive} />
        </div>
    )
}
