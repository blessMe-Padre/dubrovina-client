'use client'

import styles from './style.module.scss';

import { Button, Popup } from '@/app/components';

import src from '@/public/loyalnost/present.png';

import Image from 'next/image';

import { useState } from'react';

export default function Sertificat() {

    const [popupActive, setPopupActive] = useState(false);
    

    const handleClick = () => {
        setPopupActive(true);
    }


    return (
        <section className='section'>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        ПОРАДУЙТЕ СВОИХ <br /> БЛИЗКИХ ЗАБОТОЙ!
                    </h2>

                    <p className={styles.info_text}>
                        На любой праздник или без повода Вы можете преподнести им прекрасный подарок - красивый и стильный бессрочный сертификат любым номиналом на все услуги нашей клиники с семейной скидкой!
                    </p>

                    <Button
                        color='black'
                        handleClick={handleClick}
                        href="#popup"
                        size='medium'
                        text='ПРИОБРЕСТИ СЕРТИФИКАТ'>
                    </Button>

                    <Popup active={popupActive} setActive={setPopupActive} />
                    
                    <div className={styles.btn_wrapper}>
                        <Image
                            className={styles.image}
                            src={src}
                            alt='Логотип'
                            width={1300}
                            height={750}
                            />
                    </div>

                </div>
            </div>
        </section>
    )
}