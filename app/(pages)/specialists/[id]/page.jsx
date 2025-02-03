import { Breadcrumbs } from '@/app/components';
import getData from '../../../utils/getData';
import ContentPage from './ContentPage';
import { OurWorks } from '@/app/sections';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export async function generateMetadata({ params }) {
    const { id } = params;
    let page = null;
    const response = await getData(`${domain}/api/speczialisties?populate=*&filters[id][$eq]=${id}`);
    page = response?.data?.[0] || null;
    // console.log(page)

    return {
        title: page.meta_title,
        description: page.meta_description,
    }
}

export default async function Page({ params }) {
    const { id } = params;
    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczialisties?populate=*&filters[id][$eq]=${id}`);
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
                secondLabel="Команда"
                thirdLabel={`Специалист`}
            />
            <ContentPage data={data} />

            <OurWorks />
        </>
    );
}

export async function generateStaticParams() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczialisties`);
        const data = await response.json();

        return data.data.map((specialist) => ({
            id: specialist.id.toString(), // Должен быть `string`
        }));
    } catch (error) {
        console.error('Ошибка загрузки параметров:', error);
        return []; // В случае ошибки вернем пустой массив
    }
}

