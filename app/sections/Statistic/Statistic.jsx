import styles from './style.module.css';
import Image from 'next/image';
export default function Statistic() {

    return (
        <section className={styles.section}>
            <div className="container">
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.count}>18+</div>
                        <p className={styles.text}>средний стаж
                            врачей</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.count}>98%</div>
                        <p className={styles.text}> пациентов
                            по рекомендации</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.count}>18+</div>
                        <p className={styles.text}>имплантаций
                            в год</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

