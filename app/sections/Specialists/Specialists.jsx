'use client'
import { useEffect, useState } from "react";

import styles from './style.module.css';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Specialists() {

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} title`}>опытные специалисты</h2>
                <p className={`${styles.subtitle}`}>решат даже самые сложные стоматологические задачи</p>

                <div className={`${styles.wrapper} specialists_wrapper`}>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        modules={[Navigation]}
                    >
                        <SwiperSlide>
                            <Image
                                src="/remove_from_server/image-3.jpg"
                                alt="specialist_1"
                                width={466}
                                height={342}
                                className={`dsv-image`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/remove_from_server/image-4.jpg"
                                alt="specialist_1"
                                width={466}
                                height={342}
                                className={`dsv-image`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/remove_from_server/image-5.jpg"
                                alt="specialist_1"
                                width={466}
                                height={342}
                                className={`dsv-image`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/remove_from_server/image-3.jpg"
                                alt="specialist_1"
                                width={466}
                                height={342}
                                className={`dsv-image`}
                            />
                        </SwiperSlide>

                        <SwiperNavButtons
                            addClass={'buttons_bottom'}
                        />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

