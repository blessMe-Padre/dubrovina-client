
import Image from 'next/image';
import { Breadcrumbs } from '@/app/components';
import styles from './style.module.scss';

import getData from './../../../utils/getData';

import ContentPage from './ContentPage';

export default async function page({ params }) {
    const { slug } = params;

    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/nashi-raboties?populate=*&filters[slug][$eq]=${slug}`);
        data = response?.data?.[0] || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    if (!data) {
        return <h1>Страница не найдена</h1>; // Или можно использовать notFound()
    }

    return (
        <>
            <Breadcrumbs
                secondLink="/specialists"
                secondLabel="работы"
            // thirdLabel={`Специалист`}
            />

            <ContentPage data={data} />
        </>
    )
}
