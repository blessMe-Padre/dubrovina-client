
import { Breadcrumbs, OurWorksList } from '@/app/components';
import styles from './style.module.scss';
import { Portfolio } from '@/app/sections';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Наши работы',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default async function page() {
    return (
        <>
            <Breadcrumbs
                secondLink="/specialists"
                secondLabel="работы"
            // thirdLabel={`Специалист`}
            />

            <section className='section first_section'>
                <div className="container">
                    <h1 className={`${styles.title} title title--black`}>ВЕРНУЛИ КРАСИВУЮ УЛЫБКУ БОЛЕЕ 5000 ПАЦИЕНтов</h1>
                </div>
                <Portfolio />

                <div className="container">
                    <OurWorksList />
                </div>
            </section>
        </>
    )
}
