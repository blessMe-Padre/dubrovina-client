'use client';
import { useEffect, useState } from 'react';

import styles from './style.module.scss';
import Image from 'next/image';
import { Button, Popup } from '@/app/components';

export default function page({ params }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [popupActive, setPopupActive] = useState(false);
    const { id } = params;

    const handleClick = () => {
        setPopupActive(true);
    }


    if (!page) {
        notFound();
    }

    return (
        <div className="container">
            Специалист с id = {id}
            <div className='section'>
                <div className={styles.image_wrapper}>
                    <Image
                        src='/placeholders/specialist_id.jpg'
                        alt='Dubrovina logo'
                        width={1439}
                        height={850}
                        className="dsv-image"
                    />
                </div>

                <header className={styles.header}>
                    <div>
                        <h1 className={styles.title}>дубровина екатерина сергеевна</h1>
                        <p className={styles.subtitle}>Ведущий ортопед, хирург имплантолог клиники</p>
                    </div>
                    <Button
                        color='black'
                        handleClick={handleClick}
                        href="#popup"
                        size='medium'
                        text='Записаться'></Button>
                </header>
            </div>

            <Popup active={popupActive} setActive={setPopupActive} />
        </div>
    )
}
