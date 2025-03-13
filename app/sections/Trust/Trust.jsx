'use client'
import { motion } from "framer-motion";

import styles from './style.module.css';
import Image from 'next/image';
export default function Trust() {

    // Анимация для появления секции
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} title`}>почему нам доверяют</h2>
                <p className={`${styles.subtitle}`}>Мы возвращаем здоровье полости рта, ликвидируем комплексы и стеснение от несовершенной улыбки</p>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Image
                            src="/icons/trust/icon-1.svg"
                            alt="icon"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                        <h3 className={styles.item_title}>увеличение</h3>
                        <div className='border_left_div'></div>

                        <p className={styles.item_text}>Мы первая и единственная в городе
                            стоматологическая клиника,
                            оснащенная двумя операционными
                            микроскопами. Помимо этого каждый
                            врач имеет индивидуальную
                            бинокулярную оптику увеличением от
                            3.9 ДО 5.7 для точной и аккуратной
                            работы. Без увеличения и
                            дополнительного освещения никакое
                            лечение в клинике не проводится</p>
                    </li>

                    <li className={`${styles.item} ${styles.item_image_wrapper}`}>
                        <Image
                            src="/images/image-1.png"
                            alt="icon"
                            width={367}
                            height={367}
                            className={styles.icon}
                        />
                    </li>

                    <li className={`${styles.item} ${styles.item_black}`}>
                        <Image
                            src="/icons/trust/icon-2.svg"
                            alt="icon"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                        <h3 className={styles.item_title}>СОВЕРШЕНСТВОВАНИЕ</h3>
                        <div className='border_left_div'></div>

                        <p className={styles.item_text}>Все новинки материалов,
                            оборудования, методик и протоколов
                            лечения с проверенными отличными
                            показателями сразу же вводятся
                            в рабочий процесс</p>
                    </li>

                    <li className={`${styles.item} ${styles.item_gray1}`}>
                        <Image
                            src="/icons/trust/icon-3.svg"
                            alt="icon"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                        <h3 className={styles.item_title}>Оснащение</h3>
                        <div className='border_left_div'></div>

                        <p className={styles.item_text}>Мы не экономим на материалах и
                            инструментах. Привыкнув однажды
                            работать лучшим, спускаться в уровне,
                            а значит и в качестве уже непозволительно</p>
                    </li>

                    <li className={styles.item}>
                        <Image
                            src="/icons/trust/icon-4.svg"
                            alt="icon"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                        <h3 className={styles.item_title}>ПРОФЕССИОНАЛИЗМ</h3>
                        <div className='border_left_div'></div>

                        <p className={styles.item_text}>Каждое звено нашей команды-
                            профессионал своего дела и
                            ответственный человек. Сотрудники
                            постоянно обучаются новому и
                            совершенствуются в любимом деле.
                            Но главное - от санитарки до врача
                            каждый понимает, ценит и дорожит
                            доверием наших пациентов</p>
                    </li>

                    <li className={`${styles.item} ${styles.item_image_wrapper}`}>
                        <Image
                            src="/images/image-2.png"
                            alt="icon"
                            width={367}
                            height={367}
                            className={styles.icon}
                        />
                    </li>
                </ul>
            </div>
        </motion.section>
    )
}

