import styles from './style.module.css';

import arrow from '@/public/specialization/arrow.svg';

import Image from 'next/image';

import src from '@/public/specialization/spec_1.png';
import Link from 'next/link';

export default function Specialization() {

    const data = [
        {

        }
    ]

    return (
        <section className='section'>
            <div className='container'>
                <h2 className='title title--black'>наша специализация</h2>
                <p className={styles.subtitle}>Лечим зубы, как лечили бы себе</p>

                <div className={styles.specialization_wrapper}>
                    <div className={styles.item}>
                        <p className={styles.item_title}>Диагностика</p>
                        <div className={styles.img_wrapper}>
                            <Image src={src} alt='v' className={`dsv-image ${styles.img}`} />
                            <Link href={'/'} className={styles.item_link}>
                                <Image src={arrow} className={styles.arrow} alt='arrow' />
                            </Link>
                        </div>
                    </div>

                      <div className={`${styles.item} ${styles.item_black}`}>
                        <p className={`${styles.item_title} ${styles.item_title_white}`}>Диагностика</p>
                        <div className={styles.img_wrapper}>
                            <Image src={src} alt='v' className={`dsv-image ${styles.img}`} />
                            <Link href={'/'} className={styles.item_link}>
                                <Image src={arrow} className={styles.arrow} alt='arrow' />
                            </Link>
                        </div>
                    </div>

                      <div className={styles.item}>
                        <p className={styles.item_title}>Диагностика</p>
                        <div className={styles.img_wrapper}>
                            <Image src={src} alt='v' className={`dsv-image ${styles.img}`} />
                            <Link href={'/'} className={styles.item_link}>
                                <Image src={arrow} className={styles.arrow} alt='arrow' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}