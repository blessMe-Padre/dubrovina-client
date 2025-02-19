'use client';
import { useEffect, useState } from 'react';

import styles from './style.module.scss';
import Image from 'next/image';
import { Button, Popup } from '@/app/components';

export default function ContentPage({ data }) {
    const [pageData, setPageData] = useState(data);
    const [isLoading, setIsLoading] = useState(true);
    const [popupActive, setPopupActive] = useState(false);

    const imageUrl = pageData?.big_img?.url ? `${domain}${pageData.big_img.url}` : '/placeholders/specialist_id.jpg';

    const handleClick = () => {
        setPopupActive(true);
    }

    return (
        <>
            <div className={styles.section}>
                <div className="container">
                    <div className={styles.section_wrapper}>
                        <h2 className={styles.title}>Мы заботимся о своих пациентах!</h2>

                        <Button
                            color='white'
                            handleClick={handleClick}
                            href="#popup"
                            size='medium'
                            text='Задать вопросы' />

                        <div className={styles.image_wrapper}>
                            <Image
                                src='/images/image-7.png'
                                alt='img'
                                width={195}
                                height={190}
                                className="dsv-image"
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                            />
                        </div>

                        <div className={styles.description_block}>
                            <p>Пожалуйста, выполняйте все рекомендации, которые мы разработали для вас,
                                с учетом различных медицинских манипуляций! В случае возникновения вопросов обращайтесь
                                к администратору</p>
                        </div>
                    </div>
                </div>
            </div>
            <Popup active={popupActive} setActive={setPopupActive} />
        </>
    )
}
