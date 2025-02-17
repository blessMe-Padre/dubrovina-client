'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';

// /api/stranicza-politika

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/stranicza-politika?populate=*`;

const getData = async () => {
    try {
        const res = await fetch(url);
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
    const [pageData, setPageData] = useState(null);

    console.log(pageData);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setPageData(data);

        };

        fetchData();

    }, []);


    return (
        <div>ContentPage222</div>
    )
}
