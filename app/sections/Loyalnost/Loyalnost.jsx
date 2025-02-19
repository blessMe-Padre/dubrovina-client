'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";

import { Button, Popup } from '@/app/components';
import styles from './style.module.css';
import Image from 'next/image';

import bg from '@/public/loyalnost/bg.png';
import persent_img from '@/public/loyalnost/persent.png'

const Loyalnost = () => {
    const [popupActive, setPopupActive] = useState(false);
    const [opened, setOpened] = useState(false);

    const handleClick = () => {
        setPopupActive(true);
    }

    const handleOpenedClick = () => {
        setOpened(!opened);
        document.body.classList.toggle('blur');
        document.body.classList.toggle('lock');
    }

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
            className='section' style={{ marginBottom: "50px" }}>
            <div className='container'>

                <div className={styles.wrapper}>

                    <div className={styles.info}>
                        <h3 className={styles.title}>
                            ПРОГРАММА ЛОЯЛЬНОСТИ ДЛЯ ПАЦИЕНТОВ
                        </h3>

                        <p className={styles.desc}>
                            Вам нас рекомендовали, но Вы все еще не решились начать стоматологическое лечение? Сейчас самое время!
                        </p>

                        <p className={styles.info_text}>
                            Получите ПОСТОЯННУЮ СЕМЕЙНУЮ СКИДКУ <br /> 10% на лечение, написав нам
                        </p>

                        <Button
                            handleClick={handleClick}
                            href="#popup"
                            text="Получить скидку"
                            size='small'
                            color=''
                        />

                        <Image
                            width={400}
                            height={300}
                            objectFit='contain'
                            src={persent_img}
                            alt='%'
                            className={`${styles.pattern} dsv-image`}
                        />
                    </div>

                    <div className={styles.info_img}>
                        <Image src={bg} alt='bg' className={`dsv-image ${styles.img}`} />
                    </div>

                    <Popup
                        active={popupActive}
                        setActive={setPopupActive}
                    />
                </div>
            </div>
        </motion.section>
    )
}

export default Loyalnost;