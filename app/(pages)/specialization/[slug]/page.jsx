import React from 'react'

import getData from '@/app/utils/getData';
import ContentPage from './ContentPage';

const url = `${process.env.NEXT_PUBLIC_DOMAIN}`;

// Этот запрос возращает то что надо
// http://89.108.115.136:1338/api/speczializaczii?populate[speczializaczii][filters][id][$eq]=138

export async function generateMetadata({ params }) {
    const { slug } = params;
    let data = null;

    const response = await getData(`${url}/api/speczializaczii?populate[speczializaczii][filters][slug][$eq]=${slug}&populate[speczializaczii][populate]=*`);
    data = response?.data?.speczializaczii || null;

    return {
        title: data[0].Page.meta_title,
        description: data[0].Page.meta_description,
    }
}

export default async function page({ params }) {
    const { slug } = params;

    let data = null;
    let data_sub = null;
    let data_featured = null;

    try {
        const response = await getData(`${url}/api/speczializaczii?populate[speczializaczii][filters][slug][$eq]=${slug}&populate[speczializaczii][populate]=*`);
        data = response?.data?.speczializaczii || null;


        // const response_sub = await getData(`${url}/api/speczializaczii-podkategoriya?populate[speczializacziya_sub][filters][slug][$eq]=${slug}&populate[speczializacziya_sub][populate]=*`)
        // const response_sub = await getData(`${url}/api/speczializaczii-podkategoriya?populate[speczializacziya_cat][filters][id][$eq]=7&populate[speczializacziya_cat][populate][speczializacziya_sub][filters][slug][$eq]=${slug}`)
        // http://89.108.115.136:1338/api/speczializaczii-podkategoriya?populate[speczializacziya_cat][filters][id][$eq]=7&populate[speczializacziya_cat][populate]=*

      //  const response_sub = await getData(`${url}/api/speczializaczii-podkategoriya?populate[speczializacziya_cat][filters][slug][$eq]=lecheniye_zubov&populate[speczializacziya_cat][populate]=*`)

        const response_sub = await getData(`${url}/api/speczializaczii-podkategoriya?populate[speczializacziya_cat][filters][slug][$eq]=${slug}&populate[speczializacziya_cat][populate]=*`)
        // console.log(response_sub);

        data_sub = response_sub?.data?.speczializacziya_cat[0].speczializacziya_sub || null


        const response_featured = await getData(`${url}/api/speczializaczii-osobennosti?populate[speczializacziya_feauture][filters][slug][$eq]=${slug}&populate[speczializacziya_feauture][populate]=*`)
        data_featured = response_featured?.data?.speczializacziya_feauture[0].speczializacziya_feauture_single || null

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    if (!page) {
        notFound();
    }

    return (
        <ContentPage data={data} data_sub={data_sub} slug={slug} data_featured={data_featured} />
    )
}

export async function generateStaticParams() {
    try {
        const response = await fetch(`${url}/api/speczializaczii?populate[speczializaczii][fields][0]=slug`);

        const { data } = await response.json();

        // Если данные приходят в старой структуре (без attributes)
        return data?.data?.speczializaczii?.map((item) => ({
            slug: item.slug || 'fallback-slug'
        })) || [];
    }

    catch (error) {
        console.error('Ошибка загрузки параметров:', error);
        return [];
    }
}