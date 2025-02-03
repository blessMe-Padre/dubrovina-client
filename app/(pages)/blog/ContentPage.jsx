'use client';
import { useEffect, useState } from 'react';

import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

// import ContentRenderer from '../../../components/ContentRenderer/ContentRenderer ';

export default function ContentPage({ data }) {
    const [pageData, setPageData] = useState(data);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Получаем список уникальных категорий
    const categories = [...new Set(pageData?.data?.map(item => item.category))];

    // Фильтруем статьи
    const filteredData = selectedCategory
        ? pageData?.data?.filter(item => item.category === selectedCategory)
        : pageData?.data;

    return (
        <>
            <div className={styles.section}>
                {/* Фильтры */}
                <ul className={styles.filters_list}>
                    <li>
                        <button onClick={() => setSelectedCategory(null)} className={!selectedCategory ? styles.active : ''}>
                            Все
                        </button>
                    </li>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setSelectedCategory(category)}
                                className={selectedCategory === category ? styles.active : ''}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Контент */}
                <ul className={styles.content}>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <li key={index}>
                                <Link href={`/blog/${item.title_slug}`}>
                                    <div>{item.category}</div>
                                    <div>{item.title}</div>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>Данные не найдены</p>
                    )}
                </ul>
            </div>
        </>
    );
}