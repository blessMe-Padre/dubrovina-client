'use client'
import Image from 'next/image';
import styles from './style.module.css';


const MainHero = () => {
    return (
        <div>
            <div className={styles.section}>
                <Image
                    aria-hidden
                    src="/delete/hero-bg-l.jpg"
                    alt="Изображение"
                    width={1920}
                    height={973}
                    className={`${styles.bg} dsv-image`}
                />
                <div className="container relative">
                    <div className={styles.hero_wrapper}>
                        <h1 className={styles.title}>Экспертный подход и&nbsp;премиальное качество</h1>
                        <p className={styles.subtitle}>Стоматологическое лечение с душой в Находке</p>
                    </div>

                    <div className={`${styles.hero_item} ${styles.hero_item_1}`}>
                        <Image
                            src="/icons/plus.svg"
                            alt="плюс"
                            width={30}
                            height={30}
                        />
                        <span>Превосходные результаты</span>
                    </div>
                    <div className={`${styles.hero_item} ${styles.hero_item_2}`}>
                        <Image
                            src="/icons/plus.svg"
                            alt="плюс"
                            width={30}
                            height={30}
                        />
                        <span>Цифровое оснащение клиники</span>
                    </div>
                    <div className={`${styles.hero_item} ${styles.hero_item_3}`}>
                        <Image
                            src="/icons/plus.svg"
                            alt="плюс"
                            width={30}
                            height={30}
                        />
                        <span>Исключительный сервис</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainHero;