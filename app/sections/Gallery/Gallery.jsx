'use client';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import styles from './style.module.scss';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import SwiperNavButtons from "./../../components/SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/sekcziya-galereya?populate=*`;

// Анимация для появления секции
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
};

const getSectionData = async () => {
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

export default function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSectionData();
            setData(data);
        };

        fetchData();
    }, []);

    // const imageUrl = pageData?.big_img?.url ? `${domain}${pageData.big_img.url}` : '/placeholders/specialist_id.jpg';

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

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className={`${styles.section}`}>
            <div className='container'>
                <h2 className='title title--black'>Галерея клиники</h2>
            </div>
            <div id='main-gallery' className={`${styles.about_wrapper} about_wrapper pswp-gallery`}>
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        560: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1023: { slidesPerView: 4 },
                    }}
                >

                    {data?.data?.images?.length > 0 ? (
                        data.data.images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.image_slide}>
                                    <a
                                        href={`${domain}${item?.url}`}
                                        data-pswp-width={466 * 2}
                                        data-pswp-height={631 * 2}
                                        key={'#main-gallery' + '-' + 1}
                                        target='_blank'
                                        rel="noreferrer"
                                        className={`${styles.img_wrapper} dsv-image`}
                                    >
                                        <div className={styles.image_wrapper}>
                                            <Image
                                                src={`${domain}${item?.url}`}
                                                alt='Dubrovina logo'
                                                width={466}
                                                height={631}
                                                className="dsv-image"
                                                placeholder="blur"
                                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                                            />
                                        </div>
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
        </motion.section>
    )
}
