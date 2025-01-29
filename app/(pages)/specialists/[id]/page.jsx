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

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import getData from '../../../utils/getData';

import ContentRenderer from '../../../components/ContentRenderer/ContentRenderer ';

// /api/speczialisties?filters[id][$eq]=4

const domain = 'http://89.108.115.136:1338';

export default function page({ params }) {
    const [pageData, setPageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [popupActive, setPopupActive] = useState(false);
    const { id } = params;

    if (!page) {
        notFound();
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Начинаем загрузку
            try {
                const data = await getData(`${domain}/api/speczialisties?populate=*&filters[id][$eq]=${id}`);
                setPageData(data.data[0]);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            } finally {
                setIsLoading(false); // Загрузка завершена
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#main-gallery',
            children: '.swiper .swiper-slide a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    const handleClick = () => {
        setPopupActive(true);
    }

    const imageUrl = pageData?.big_img?.url ? `${domain}${pageData.big_img.url}` : '/placeholders/specialist_id.jpg';

    return (
        <div className="container">
            <div className='section'>
                <div className={styles.image_wrapper}>

                    {/* {isLoading ? (
                    // доработать компонент!
                        <div>Загрузка...</div>
                    ) : (
                        <Image
                            src={imageUrl}
                            alt='Dubrovina logo'
                            width={1439}
                            height={850}
                            className="dsv-image"
                        />
                    )} */}

                    <Image
                        src={imageUrl}
                        alt='Dubrovina logo'
                        width={1439}
                        height={850}
                        className="dsv-image"
                    />

                </div>

                <header className={styles.header}>
                    <div>
                        <h1 className={styles.title}>{pageData?.name}</h1>
                        <p className={styles.subtitle}>{pageData?.specialty}</p>
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
                            {/* {pageData?.specialization} */}
                            {pageData?.specialization.map((item, index) => (
                                <ContentRenderer key={index} content={[item]} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.about_row}>
                        <div className={styles.about_title}>
                            <h2>Образование</h2>
                        </div>
                        <div className={styles.about_descriptions}>

                            {pageData?.education.map((item, index) => (
                                <ContentRenderer key={index} content={[item]} />
                            ))}

                        </div>
                    </div>
                    <div className={styles.about_row}>
                        <div className={styles.about_title}>
                            <h2>Повышение квалификации</h2>
                        </div>
                        <div className={styles.about_descriptions}>
                            {pageData?.advanced_training.map((item, index) => (
                                <ContentRenderer key={index} content={[item]} />
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.about_row} ${styles.about_row_slider}`}>
                        <div className={styles.about_title}>
                            <h2>сертификаты</h2>
                        </div>
                        <div id='main-gallery' className={`${styles.about_wrapper} about_wrapper pswp-gallery`}>
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
                                        <a
                                            href='/remove_from_server/sert-1.png'
                                            data-pswp-width={292}
                                            data-pswp-height={449}
                                            key={'#main-gallery' + '-' + 1}
                                            target='_blank'
                                            rel="noreferrer"
                                            className={`${styles.img_wrapper} dsv-image`}
                                        >
                                            <Image
                                                src='/remove_from_server/sert-1.png'
                                                alt='Dubrovina logo'
                                                width={292}
                                                height={449}
                                                className="dsv-image"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.image_slide}>
                                        <a
                                            href='/remove_from_server/sert-1.png'
                                            data-pswp-width={292}
                                            data-pswp-height={449}
                                            key={'#main-gallery' + '-' + 1}
                                            target='_blank'
                                            rel="noreferrer"
                                            className={`${styles.img_wrapper} dsv-image`}
                                        >
                                            <Image
                                                src='/remove_from_server/sert-1.png'
                                                alt='Dubrovina logo'
                                                width={292}
                                                height={449}
                                                className="dsv-image"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.image_slide}>
                                        <a
                                            href='/remove_from_server/sert-1.png'
                                            data-pswp-width={292}
                                            data-pswp-height={449}
                                            key={'#main-gallery' + '-' + 1}
                                            target='_blank'
                                            rel="noreferrer"
                                            className={`${styles.img_wrapper} dsv-image`}
                                        >
                                            <Image
                                                src='/remove_from_server/sert-1.png'
                                                alt='Dubrovina logo'
                                                width={292}
                                                height={449}
                                                className="dsv-image"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.image_slide}>
                                        <a
                                            href='/remove_from_server/sert-1.png'
                                            data-pswp-width={292}
                                            data-pswp-height={449}
                                            key={'#main-gallery' + '-' + 1}
                                            target='_blank'
                                            rel="noreferrer"
                                            className={`${styles.img_wrapper} dsv-image`}
                                        >
                                            <Image
                                                src='/remove_from_server/sert-1.png'
                                                alt='Dubrovina logo'
                                                width={292}
                                                height={449}
                                                className="dsv-image"
                                            />
                                        </a>
                                    </div>
                                </SwiperSlide>


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
