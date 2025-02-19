
import styles from './style.module.scss';
import Image from 'next/image';
import { Breadcrumbs } from "@/app/components";
import { Map } from '@/app/sections';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Контакты',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default function page() {

    return (
        <>
            <Breadcrumbs
                secondLink="/contacts"
                secondLabel="Контакты"
            />

            <section className={styles.section}>
                <h2 className={`${styles.title} title title--black`}>контакты</h2>
                <Map />
            </section>

        </>
    )
}
