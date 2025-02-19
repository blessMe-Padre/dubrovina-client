'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './style.module.css';

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/sekcziya-osnovatel?populate=*`;

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

// Анимация для появления секции
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
};

const Founder = () => {
    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSectionData();
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
                <h2 className='title'>{sectionData?.data?.title}</h2>

                <div className={styles.wrapper}>
                    <Image
                        src="/delete/image-1.jpg"
                        alt="Изображение"
                        width={195}
                        height={189}
                        className={`${styles.small_bg} dsv-image`}
                    />

                    <div className={styles.description_wrapper}>

                        <div className={styles.description}>
                            <div className={styles.description_text}>
                                {sectionData?.data?.description.map((item, index) => (
                                    <p key={index}>
                                        {item.children.map((child, childIndex) => (
                                            child.bold ? (
                                                <strong key={childIndex}>{child.text}</strong>
                                            ) : (
                                                <span key={childIndex}>{child.text}</span>
                                            )
                                        ))}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <Image
                            src="/bg/quote.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className={`${styles.quote} dsv-image`}
                        />

                    </div>

                    <div className={styles.description_item}>
                        <Image
                            src={sectionData?.data?.image?.url ? domain + sectionData?.data?.image?.url : '/placeholder.png'}
                            alt="Изображение"
                            width={676}
                            height={640}
                            className={`${styles.large_bg} dsv-image`}
                        />

                        <div className={styles.info}>
                            <p className={styles.name}>Анастасия дубровина</p>
                            <div className={styles.border_left}></div>
                            <p className={styles.info_text}>Основатель клиники, главный врач, стаж более 20 лет</p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}

export default Founder;