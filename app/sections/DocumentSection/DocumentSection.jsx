
import { Document } from '@/app/components';
import styles from './style.module.scss';
import getData from '../../utils/getData';

export default async function DocumentSection() {

    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/my-documents?populate=*`);
        data = response || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className='title title--black'>документы</h2>

                <ul className={styles.documents_list}>

                    {data?.data?.length > 0 ? (
                        data.data.map((item, index) => (
                            <li key={index}>
                                <Document
                                    text={item.name}
                                    link={item?.my_file?.url}
                                />
                            </li>
                        ))
                    ) : (
                        <p>Нет загруженных документов</p>
                    )}

                </ul>
            </div>
        </section>
    )
}
