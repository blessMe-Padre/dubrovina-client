
import { Breadcrumbs } from '@/app/components';

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/nashi-raboties`, {
            cache: 'no-store',
        });
        const data = await response.json();

        return data.data.map((page) => ({
            slug: page.slug.toString(), // Должен быть `string`
        }));
    } catch (error) {
        console.error('Ошибка загрузки параметров:', error);
        return []; // В случае ошибки вернем пустой массив
    }
}
