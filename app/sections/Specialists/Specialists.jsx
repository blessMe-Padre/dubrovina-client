'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';
import { SpecialistCard } from "@/app/components";

// /api/speczialisties?fields[0]=id&fields[1]=name&fields[2]=specialty

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/speczialisties?populate=*`;

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
        console.error("Ошибка при загрузке меню:", error);
        return [];
    }
};

// Анимация для появления секции
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
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

        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className={styles.section}>
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
        </motion.section>
    )
}

