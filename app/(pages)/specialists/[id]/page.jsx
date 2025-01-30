import getData from '../../../utils/getData';
import ContentPage from './ContentPage';

const domain = 'http://89.108.115.136:1338';

export async function generateMetadata({ params }) {
    const { id } = params;
    let page = null;
    const response = await getData(`${domain}/api/speczialisties?populate=*&filters[id][$eq]=${id}`);
    page = response?.data?.[0] || null;

    return {
        title: page.meta_title,
        description: page.meta_description,
    }
}

export default async function Page({ params }) {
    const { id } = params;
    let data = null;
    try {
        const response = await getData(`${domain}/api/speczialisties?populate=*&filters[id][$eq]=${id}`);
        data = response?.data?.[0] || null;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    if (!data) {
        return <h1>Страница не найдена</h1>; // Или можно использовать notFound()
    }

    return (
        <div className="container">
            <ContentPage data={data} />
        </div>
    );
}
