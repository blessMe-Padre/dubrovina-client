import styles from './style.module.css';
import Image from 'next/image';


const data = [
    {
        title: 'Инновационное оборудование',
        text: 'Исключает ошибки,сохраняет даже самые безнадежные зубы',
    },
    {
        title: 'Комфорт и безболезненность',
        text: 'Убираем все страхи перед зубной болью и проводим лечение без нарушения гармонии пациента',
    },
    {
        title: 'Премиальный уровень лечения по разумным ценам',
        text: 'Мы не экономим на качественном уровне лечения и материалах',
    },
    {
        title: 'Сильная команда врачей',
        text: 'Решаем сложные проблемы комплексно, оптимальное решение и план лечения разрабатывают несколько специалистов',
    },
    {
        title: 'Прозрачное ценообразование',
        text: 'Отсутствие гипердиагнозов и навязанных процедур.Цены на сайте полностью совпадают с ценами в клинике',
    },
]


export default function Advantages() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={`${styles.title} title`}>преимущества клиники</h2>

                <ul className={styles.list}>
                    {
                        data.map((item, index) => (
                            <li key={index} className={styles.item}>
                                <h3 className={styles.item_title}>{item.title}</h3>
                                <p className={styles.item_text}>{item.text}</p>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </section>
    )
}

