'use client'
import { useEffect, useState } from "react";

import styles from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import Link from 'next/link';

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/statis?populate=*`;


const getData = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке памяток:", error);
        return [];
    }
};

export default function Useful() {
    const [sectionData, setSectionData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setSectionData(data?.data);
        };

        fetchData();

    }, []);

    return (

        <section className={styles.section}>
            <div className="container">
                <h2 className="title title--black">полезное для вас</h2>
                <p className={styles.sub_title}>Наши эксперты-стоматологи делятся своими знаниями и опытом, здесь вы найдете ответы на самые актуальные вопросы о здоровье полости рта</p>

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
                        {sectionData?.map((item, index) => (
                            <SwiperSlide key={index} className="flex">
                                <div key={index} className={styles.article}>
                                    <Link href={`/blog/${item.title_slug}`}
                                        className={styles.article_wrapper}
                                    >
                                        <div className={styles.image_wrapper}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_DOMAIN}${item?.image_poster?.url}`}
                                                alt='Dubrovina logo'
                                                width={466}
                                                height={631}
                                                className="dsv-image"
                                                placeholder="blur"
                                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority

                                            />
                                        </div>
                                        <div className={styles.article_category}>{item.category}</div>
                                        <div className={styles.article_block}>
                                            <div className={styles.article_title}>{item.title}</div>
                                            <div className={styles.article_date}>{item.date}</div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}

                        <SwiperNavButtons
                            addClass={'buttons_bottom'}
                        />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

