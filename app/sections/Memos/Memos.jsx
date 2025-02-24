'use client'
import { useEffect, useState } from "react";

import styles from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';
import { LinkButton } from "@/app/components";
import Image from "next/image";

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/statis?populate=*&filters[category_slug][$eq]=sovety`;


const getData = async () => {
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
        console.error("Ошибка при загрузке памяток:", error);
        return [];
    }
};

export default function Memos() {
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
                <h2 className="title title--black">памятки для вас</h2>

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
                                <div className={styles.memos_item}>
                                    <div className={styles.memos_image}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_DOMAIN}${item?.image_poster?.url}`}
                                            alt='image'
                                            width={466}
                                            height={342}
                                            className="dsv-image"
                                            placeholder="blur"
                                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                                        />
                                    </div>
                                    <div className={styles.memos_item_block}>
                                        <h3>{item.title}</h3>
                                        <LinkButton
                                            link={`/blog/${item.title_slug}`}
                                            text="Изучить"
                                            color='black'
                                        />

                                    </div>
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

