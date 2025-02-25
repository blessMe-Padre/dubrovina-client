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
import { Portfolio } from '@/app/sections';

// /api/speczialisties?filters[id][$eq]=4

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export default function ContentPage({ data }) {
    const [pageData, setPageData] = useState(data);
    const [isLoading, setIsLoading] = useState(true);
    const [popupActive, setPopupActive] = useState(false);

    // const imageUrl = pageData?.big_img?.url ? `${domain}${pageData.big_img.url}` : '/placeholders/specialist_id.jpg';
    const imageUrl = pageData?.big_img?.url ? `${domain}${pageData.big_img.url}` : `${domain}${pageData?.img[0]?.url}`;

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

    return (
        <>
            <div className="container">
                <div className='section first_section'>
                    <div className={styles.image_wrapper}>
                        <Image
                            src={imageUrl}
                            alt='Dubrovina logo'
                            width={1439}
                            height={850}
                            className="dsv-image"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
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
                                {pageData?.specialization?.length > 0 ? (
                                    pageData.specialization.map((item, index) => (
                                        <ContentRenderer key={index} content={[item]} />
                                    ))
                                ) : (
                                    <p>данные не заполнены</p>
                                )}
                            </div>
                        </div>
                        <div className={styles.about_row}>
                            <div className={styles.about_title}>
                                <h2>Образование</h2>
                            </div>
                            <div className={styles.about_descriptions}>

                                {pageData?.education?.length > 0 ? (
                                    pageData.education.map((item, index) => (
                                        <ContentRenderer key={index} content={[item]} />
                                    ))
                                ) : (
                                    <p>данные не заполнены</p>
                                )}

                            </div>
                        </div>
                        <div className={styles.about_row}>
                            <div className={styles.about_title}>
                                <h2>Повышение квалификации</h2>
                            </div>
                            <div className={styles.about_descriptions}>
                                {pageData?.advanced_training?.length > 0 ? (
                                    pageData.advanced_training.map((item, index) => (
                                        <ContentRenderer key={index} content={[item]} />
                                    ))
                                ) : (
                                    <p>данные не заполнены</p>
                                )}
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

                                    {pageData?.sertificates?.length > 0 ? (
                                        pageData.sertificates.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className={styles.image_slide}>
                                                    <a
                                                        href={`${domain}${item?.url}`}
                                                        data-pswp-width={292}
                                                        data-pswp-height={449}
                                                        key={'#main-gallery' + '-' + 1}
                                                        target='_blank'
                                                        rel="noreferrer"
                                                        className={`${styles.img_wrapper} dsv-image`}
                                                    >
                                                        <Image
                                                            src={`${domain}${item?.url}`}
                                                            alt='Dubrovina logo'
                                                            width={292}
                                                            height={449}
                                                            className="dsv-image"
                                                        />
                                                    </a>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    ) : (
                                        <p>данные не заполнены</p>
                                    )}

                                    <SwiperNavButtons
                                        addClass={'buttons_bottom'}
                                    />
                                </Swiper>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <Portfolio title={true} />
            <Popup active={popupActive} setActive={setPopupActive} />
        </>
    )
}
