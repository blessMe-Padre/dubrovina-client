
import { Document } from '@/app/components';
import styles from './style.module.scss';
import Image from 'next/image';


export default function DocumentSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className='title title--black'>документы</h2>

                <ul className={styles.documents_list}>
                    <li>
                        <Document
                            text="Лицензия № Л041-01137-77/00322452 от 28 июня 2018г"
                            link="/"
                        />
                    </li>
                    <li>
                        <Document
                            text="Лицензия № Л041-01137-77/00322452 от 28 июня 2018г"
                            link="/"
                        />
                    </li>
                    <li>
                        <Document
                            text="Лицензия № Л041-01137-77/00322452 от 28 июня 2018г"
                            link="/"
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}
