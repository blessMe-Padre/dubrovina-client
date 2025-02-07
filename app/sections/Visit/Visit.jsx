
import { Document } from '@/app/components';
import styles from './style.module.scss';
import getData from '../../utils/getData';

export default async function Visit() {

    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/sekcziya-vizit-k-stomatologu?populate=*`);
        data = response || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className='title title--black'>Не откладывайте визит
                    к стоматологу!</h2>

                <ul className={styles.visit_list}>

                    {data?.data?.list.length > 0 ? (
                        data.data.list.map((item, index) => (
                            <li key={index}>
                                <h3 className={styles.visit_title}>{item.title}</h3>
                                <p className={styles.visit_text}>{item.text}</p>
                            </li>
                        ))
                    ) : (
                        <p>Нет данных</p>
                    )}

                </ul>
            </div>
        </section>
    )
}
