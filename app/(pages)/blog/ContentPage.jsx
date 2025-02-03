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

                <ul className={styles.filters_list}>
                    <li>
                        <button onClick={() => setSelectedCategory(null)}
                            className={`${styles.button} ${!selectedCategory ? styles.active : ''}`}
                        >
                            Все
                        </button>
                    </li>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setSelectedCategory(category)}
                                className={`${styles.button} ${selectedCategory === category ? styles.active : ''}`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                <ul className={styles.article_list}>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <li key={index} className={styles.article}>
                                <Link href={`/blog/${item.title_slug}`}
                                    className={styles.article_wrapper}
                                >
                                    <div className={styles.image_wrapper}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_DOMAIN}${item?.image_poster?.url}`}
                                            alt='Dubrovina logo'
                                            width={466}
                                            height={631}
                                            className="dsv-image"
                                            placeholder="blur"
                                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority

                                        />
                                    </div>
                                    <div className={styles.article_category}>{item.category}</div>
                                    <div className={styles.article_block}>
                                        <div className={styles.article_title}>{item.title}</div>
                                        <div className={styles.article_date}>{item.date}</div>
                                    </div>
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