'use client'
import { motion } from "framer-motion";
import Image from 'next/image';
import styles from './style.module.scss';

// Анимация для появления секции
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
};

export function AppealComponents({ data }) {

    const imageUrl = data?.data?.image?.url
        ? `${process.env.NEXT_PUBLIC_DOMAIN}${data.data.image.url}`
        : '/placeholder.png';

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className={styles.section}>
            <div className="container">
                <div className={styles.section_wrapper}>
                    <div className="relative">
                        <Image
                            src='/appeal/string.svg'
                            alt='Dubrovina'
                            width={720}
                            height={56}
                            className={styles.item_decor_1}
                        />
                        <Image
                            src='/appeal/white.svg'
                            alt='Dubrovina'
                            width={55}
                            height={95}
                            className={styles.item_decor_2}
                        />
                        <div
                            className={styles.item}
                            dangerouslySetInnerHTML={{ __html: data?.data?.description || 'данные не загружены' }}
                        />
                    </div>

                    <div className="relative">
                        <Image
                            src='/appeal/black.svg'
                            alt='Dubrovina'
                            width={55}
                            height={95}
                            className={styles.item_decor_3}
                        />
                        <div className={styles.image_wrapper}>
                            <Image
                                src={imageUrl}
                                alt='Dubrovina logo'
                                width={720}
                                height={700}
                                className="dsv-image"
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                            />

                            <div className={styles.info}>
                                <p className={styles.name}>Анастасия дубровина</p>
                                <div className={styles.border_left}></div>
                                <p className={styles.info_text}>Основатель клиники, главный врач, стаж более 20 лет</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
