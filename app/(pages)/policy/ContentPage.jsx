'use client';
import { ContentRenderer } from '@/app/components';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/stranicza-politika?populate=*`;

const getData = async () => {
    try {
        const res = await fetch(url, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке меню:", error);
        return [];
    }
};

export default function ContentPage() {
    const [pageData, setPageData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setPageData(data?.data?.content);

        };
        fetchData();

    }, []);


    return (
        <div className={styles.page_content}>
            <ContentRenderer content={pageData} />
        </div>
    )
}
