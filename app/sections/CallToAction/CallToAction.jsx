'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";

import { Button, Popup } from '@/app/components';
import styles from './style.module.css';

const CallToAction = () => {
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
                            Хотите красивую улыбку?
                        </h3>
                        <div className='border_left_div '></div>

                        <p className={styles.desc}>
                            Оставьте контакты, в ближайшее время с вами свяжется администратор и проконсультируетпо условиям и стоимости лечения, подберёт врача и запишет вас на приём                        </p>

                        <Button
                            handleClick={handleClick}
                            href="#popup"
                            text="получить консультацию"
                            size='large'
                            color='black'
                        />
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

export default CallToAction;