'use client';
import { useEffect, useState } from 'react';

import styles from './../style.module.scss';
import Image from 'next/image';

import ContentRenderer from '../../../components/ContentRenderer/ContentRenderer ';

export default function ContentPage({ data }) {
    const [pageData, setPageData] = useState(data);
    const imageUrl = pageData?.image?.url ? `${process.env.NEXT_PUBLIC_DOMAIN}${pageData?.image?.url}` : '/placeholders/case.jpg';

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero_image}>
                    <Image
                        src={imageUrl}
                        alt='Dubrovina logo'
                        width={1920}
                        height={700}
                        className="dsv-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority

                    />
                </div>
                <div className="container">
                    <div className={styles.hero_wrapper}>
                        <div className={styles.category}>{pageData.category}</div>
                        <h1 className={styles.title}>{pageData.title}</h1>
                        <svg width="2" height="67" viewBox="0 0 2 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.939453 1L1.05901 65.9999" stroke="white" strokeOpacity="0.4" strokeLinecap="round" />
                        </svg>
                        <div className={styles.hero_text}>
                            <p>{pageData.date}</p>
                            <p>Время чтения: {pageData.reading_time}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className={styles.page_content}>
                    <ContentRenderer content={pageData.content} />
                </div>
            </div>

        </>
    )
}
