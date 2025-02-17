
import Image from 'next/image';
import { Breadcrumbs, OurWorksList } from '@/app/components';
import styles from './style.module.scss';

import getData from '../../utils/getData';
import { Portfolio } from '@/app/sections';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Наши работы',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default async function page() {
    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/nashi-raboties?populate=*`);
        data = response || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <>
            <Breadcrumbs
                secondLink="/specialists"
                secondLabel="работы"
            // thirdLabel={`Специалист`}
            />

            <section className='section'>
                <div className="container">
                    <h1 className={`${styles.title} title title--black`}>ВЕРНУЛИ КРАСИВУЮ УЛЫБКУ БОЛЕЕ 5000 ПАЦИЕНтов</h1>
                </div>
                <Portfolio />

                <div className="container">
                    <OurWorksList data={data} />
                </div>
            </section>

        </>
    )
}
