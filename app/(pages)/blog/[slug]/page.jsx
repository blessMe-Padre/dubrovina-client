
import Image from 'next/image';
import { Breadcrumbs } from '@/app/components';
import getData from './../../../utils/getData';

import ContentPage from './ContentPage';

export async function generateMetadata({ params }) {
    const { slug } = params;
    let page = null;
    const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/statis?populate=*&filters[title_slug][$eq]=${slug}`);
    page = response?.data?.[0] || null;

    return {
        title: `Клиника "Доктора Дубровиной" | Блог - ${page?.meta_title || ''}`,
        description: page?.meta_description || '',
    };
}

export default async function page({ params }) {
    const { slug } = params;

    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/statis?populate=*&filters[title_slug][$eq]=${slug}`);
        data = response?.data?.[0] || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <>
            <Breadcrumbs
                secondLink="/blog"
                secondLabel="блог"
                thirdLabel={`${data?.title}`}
            />

            <ContentPage data={data} />
        </>
    )
}
