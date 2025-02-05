'use client';

import { useState, useEffect } from "react";
import React from "react"
import styles from './style.module.scss';
import Image from "next/image";

import tab_btn from '@/public/icons/tab_btn.svg';


import { motion } from 'framer-motion';

export default function Tab({ data }) {



    const [openIndex, setOpenIndex] = useState(null);

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            height: 0,
        },
    };


    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {data.map((item, idx) => {
                            
                const imageUrl = item?.img?.url ? `${process.env.NEXT_PUBLIC_DOMAIN}${item.img.url}` : '';
                    
                return (
                    <div className={`${styles.item_wrapper} ${openIndex === idx ? styles.active : ''}`} key={idx}>
                        <div
                            onClick={() => handleClick(idx)}
                            key={idx}
                            className={`${styles.price_item_button} ${openIndex === idx ? `${styles.active}` : ''}`}>
                                
                                <Image
                                    src={imageUrl}
                                    width={80}
                                    height={80}
                                    className={styles.item_img}
                                />
                                
                                <h3 className={styles.title_custom}>{item.title}</h3>
                                
                                <div className={`${styles.button_decor}`}></div>
                        </div>
                        
                        <div className={styles.price_wrapper_wrapper}>
                            <motion.div
                                    layout
                                    variants={variants}
                                    initial={'hidden'}
                                    animate={openIndex === idx ? 'visible' : 'hidden'}
                                    className={`${styles.price_wrapper_wrapper} parallax-wrapper`}
                                    key={idx}
                                    >
                                {item?.speczializacziya_sub_price_item.map((price, price_index) => (
                                    <div className={styles.price_item} key={price_index}>
                                        <p className={styles.price_title}>
                                            {price.Name}
                                        </p>

                                        <p className={styles.price_count}>
                                            {price.Price}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}