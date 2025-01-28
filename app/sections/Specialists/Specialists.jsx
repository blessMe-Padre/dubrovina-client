'use client'
import { useEffect, useState } from "react";

import styles from './style.module.css';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";

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
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            560: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                        }}
                    >
                        <SwiperSlide className={styles.item}>
                            <Link href="/">
                                <div className={styles.item_image}>
                                    <Image
                                        src="/remove_from_server/image-3.jpg"
                                        alt="specialist_1"
                                        width={466}
                                        height={342}
                                        className={`dsv-image`}
                                    />
                                </div>
                                <div className={styles.item_content}>
                                    <div className={styles.item_inner}>
                                        <h3 className={styles.item_title}>дубровина Анастасия александровна</h3>
                                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.9007 26.289L26.5784 8.61133" stroke="#27272A" strokeWidth="2" />
                                            <path d="M10.6826 8.55835H27.7992" stroke="#27272A" strokeWidth="2" />
                                            <path d="M26.7861 24.6619V7.54529" stroke="#27272A" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="border_left_div"></div>
                                    <p className={styles.prof}>Генеральный директор</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <Link href="/">
                                <div className={styles.item_image}>
                                    <Image
                                        src="/remove_from_server/image-4.jpg"
                                        alt="specialist_1"
                                        width={466}
                                        height={342}
                                        className={`dsv-image`}
                                    />
                                </div>
                                <div className={styles.item_content}>
                                    <div className={styles.item_inner}>
                                        <h3 className={styles.item_title}>науменко мария
                                            андреевна</h3>
                                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.9007 26.289L26.5784 8.61133" stroke="#27272A" strokeWidth="2" />
                                            <path d="M10.6826 8.55835H27.7992" stroke="#27272A" strokeWidth="2" />
                                            <path d="M26.7861 24.6619V7.54529" stroke="#27272A" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="border_left_div"></div>
                                    <p className={styles.prof}>Врач стоматолог терапевт, эндодонтист,
                                        реставратор</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <Link href="/">
                                <div className={styles.item_image}>
                                    <Image
                                        src="/remove_from_server/image-5.jpg"
                                        alt="specialist_1"
                                        width={466}
                                        height={342}
                                        className={`dsv-image`}
                                    />
                                </div>
                                <div className={styles.item_content}>
                                    <div className={styles.item_inner}>
                                        <h3 className={styles.item_title}>капустина юлия
                                            сергеевна</h3>
                                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.9007 26.289L26.5784 8.61133" stroke="#27272A" strokeWidth="2" />
                                            <path d="M10.6826 8.55835H27.7992" stroke="#27272A" strokeWidth="2" />
                                            <path d="M26.7861 24.6619V7.54529" stroke="#27272A" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="border_left_div"></div>
                                    <p className={styles.prof}>Врач реставратор, пародонтолог</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className={styles.item}>
                            <Link href="/">
                                <div className={styles.item_image}>
                                    <Image
                                        src="/remove_from_server/image-3.jpg"
                                        alt="specialist_1"
                                        width={466}
                                        height={342}
                                        className={`dsv-image`}
                                    />
                                </div>
                                <div className={styles.item_content}>
                                    <div className={styles.item_inner}>
                                        <h3 className={styles.item_title}>дубровина Анастасия александровна</h3>
                                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.9007 26.289L26.5784 8.61133" stroke="#27272A" strokeWidth="2" />
                                            <path d="M10.6826 8.55835H27.7992" stroke="#27272A" strokeWidth="2" />
                                            <path d="M26.7861 24.6619V7.54529" stroke="#27272A" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="border_left_div"></div>
                                    <p className={styles.prof}>Генеральный директор</p>
                                </div>
                            </Link>
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

