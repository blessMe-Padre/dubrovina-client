import { Breadcrumbs, Form } from '@/app/components';
import getData from '../../../utils/getData';
import ContentPage from './ContentPage';
import { OurWorks } from '@/app/sections';

import Image from 'next/image';

import styles from './style.module.scss';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

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

            <div className="container relative">
                <section className={styles.consult_form}>
                    <div className={styles.consult_form_img}>
                        <Image
                            src='/images/image-4.jpg'
                            alt='Dubrovina logo'
                            width={1436}
                            height={800}
                            className="dsv-image"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                        />
                    </div>
                    <h2 className='title'>запись на консультацию</h2>
                    <p className={styles.consult_form_subtitle}>Оставьте контакты, администратор свяжется с Вами и подберет удобное время</p>

                    <Form
                        direction={'row'}
                        blur={'yes'}
                    />
                </section>
            </div>
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

