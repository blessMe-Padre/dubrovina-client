
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
                secondLink="/our-works"
                secondLabel="работы"
                thirdLabel={`${data?.title}`}
            />

            <ContentPage data={data} />
        </>
    )
}

export async function generateStaticParams() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/nashi-raboties`);
        const data = await response.json();

        return data.data.map((specialist) => ({
            id: specialist.id.toString(), // Должен быть `string`
        }));
    } catch (error) {
        console.error('Ошибка загрузки параметров:', error);
        return []; // В случае ошибки вернем пустой массив
    }
}
