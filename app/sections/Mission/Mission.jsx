import styles from './style.module.css';
import Image from 'next/image';
export default function Mission() {

    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <Image
                            src="/remove_from_server/image-1.jpg"
                            alt="Изображение"
                            width={960}
                            height={672}
                            className={`dsv-image`}
                        />
                        <div className={`${styles.descriptions} ${styles.descriptions_black}`}>
                            <h2 className={`title ${styles.title} ${styles.title_white}`}>Миссия</h2>
                            <div className='border_left_div'></div>
                            <p className={`${styles.text}`}>Наша миссия заключается в обеспечении высокого качества стоматологической помощи посредством честного и этического подхода к лечению. Мы стремимся улучшить здоровье и повысить качество жизни наших пациентов, опираясь на актуальные знания и многолетний опыт нашей команды</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image
                            src="/remove_from_server/image-2.jpg"
                            alt="Изображение"
                            width={960}
                            height={672}
                            className={`dsv-image`}
                        />

                        <div className={`${styles.descriptions} ${styles.descriptions_white}`}>
                            <h2 className={`title ${styles.title} ${styles.title_black}`}>Ценности</h2>
                            <div className='border_left_div'></div>
                            <p className={`${styles.text}`}>Нашими ценностями являются взвешенный и разумный подход к лечению, результативность, забота и искренний сервис, порядочность и доброжелательность</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

