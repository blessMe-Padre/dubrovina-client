'use client'
import Image from 'next/image';
import styles from './style.module.scss';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ClientComponent() {
    // Создаем ref для элемента, который будет отслеживаться
    const ref = useRef(null);

    // Хук useScroll отслеживает прокрутку страницы
    const { scrollYProgress } = useScroll({
        target: ref, // Указываем целевой элемент
    });

    // Используем useTransform для создания анимации на основе прокрутки
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Измените значения для настройки эффекта

    return (
        <section className={`${styles.section}`}>
            <div className={styles.image_wrapper}>
                <motion.div
                    style={{
                        y, // Применяем анимацию по оси Y
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    <Image
                        src='/images/image-5.jpg'
                        alt='Dubrovina logo'
                        width={1439}
                        height={850}
                        className="dsv-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                    />
                </motion.div>
            </div>
            <div className={styles.section_block}>
                <h1 className='title'>лечение без страха</h1>
                <p className={styles.section_text}>Если вы испытываете страх перед визитом
                    к стоматологу. Мы сделаем всё возможное, чтобы помочь вам справиться с дискомфортными ощущениями</p>
            </div>
        </section>
    )
}
