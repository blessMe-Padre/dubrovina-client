'use client'
import { useEffect, useState } from "react";

import styles from './style.module.css';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';
import { SpecialistCard } from "@/app/components";

// /api/speczialisties?fields[0]=id&fields[1]=name&fields[2]=specialty

const domain = 'http://89.108.115.136:1338';
const url = `${domain}/api/speczialisties?populate=*`;

const getData = async () => {
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

export default function Specialists() {

    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setSectionData(data);
        };

        fetchData();
    }, []);

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
                        {sectionData?.data?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <SpecialistCard
                                    href={`/specialists/${item.id}`}
                                    img={`${domain}${item?.img[0]?.url}`}
                                    name={item.name}
                                    specialty={item.specialty}
                                />
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

