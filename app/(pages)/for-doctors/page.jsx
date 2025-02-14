import styles from './style.module.scss';
import Image from 'next/image';
import { Breadcrumbs, LinkButton, VacancyList } from "@/app/components";
import { Careful, DocumentSection, Memos, Visit } from '@/app/sections';

import getData from '../../utils/getData';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Для врачей',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default async function page() {
    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/dlya-vrachej?populate=*`);
        data = response || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <>
            <Breadcrumbs
                secondLink="/for-doctors"
                secondLabel="Для врачей"
            />

            <section className={styles.section}>
                <div className={styles.image_wrapper}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_DOMAIN}${data?.data?.image?.url}`}
                        alt='Dubrovina logo'
                        width={1920}
                        height={700}
                        className="dsv-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                    />
                </div>
            </section>

            <section className={styles.vacancy}>
                <div className="container">
                    <h2 className='title title--black'>актуальные вакансии</h2>
                    <VacancyList list={data?.data?.vacancie} />
                </div>
            </section>

        </>
    )
}
