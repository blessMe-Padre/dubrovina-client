
import Image from 'next/image';
import { Breadcrumbs, SpecialistList } from '@/app/components';
import styles from './style.module.scss';

import getData from '../../utils/getData';

export const metadata = {
    title: 'Клиника "Доктора Дубровиной" | Команда',
    description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};


export default async function page() {
    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/sekcziya-komanda?populate=*`);
        data = response?.data || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <>
            <Breadcrumbs
                secondLink="/specialists"
                secondLabel="Команда"
            // thirdLabel={`Специалист`}
            />

            <section className='section'>
                <div className="container">
                    <h1 className='title title--black'>{data?.title}</h1>
                    <p className={styles.subtitle}>{data?.subtitle}</p>

                    <div className="image_wrapper">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_DOMAIN}${data?.image?.url}`}
                            alt='logo'
                            width={1439}
                            height={839}
                            className="dsv-image"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                        />
                    </div>
                    <div className="image_wrapper">
                        <Image
                            src='/bg/dubrovina.svg'
                            alt='dubrovina'
                            width={1439}
                            height={112}
                            className="dsv-image"
                        />
                    </div>
                </div>
            </section>

            <SpecialistList />

        </>
    )
}
