
import ContentPage from './ContentPage';
import styles from './style.module.scss';
import { Breadcrumbs } from '@/app/components';
import getData from '../../utils/getData';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Блог',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default async function page() {

    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/statis?populate=*`);
        data = response || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <>
            <Breadcrumbs
                secondLink="/blog"
                secondLabel="блог"
            // thirdLabel={`Специалист`}
            />

            <section className='section'>
                <div className="container">
                    <h1 className={`${styles.title} title title--black`}>полезные статьи для вас</h1>

                    <ContentPage data={data} />
                </div>
            </section>

        </>
    )
}
