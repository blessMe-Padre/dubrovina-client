'use client';
import { useEffect, useState } from 'react';

import styles from './../style.module.scss';
import Image from 'next/image';

import ContentRenderer from '../../../components/ContentRenderer/ContentRenderer ';

export default function ContentPage({ data }) {
    const [pageData, setPageData] = useState(data);
    const [isLoading, setIsLoading] = useState(true);

    const imageUrl = pageData?.image?.url ? `${process.env.NEXT_PUBLIC_DOMAIN}${pageData?.image?.url}` : '/placeholders/case.jpg';

    return (
        <>
            <div className="container">
                <div className={styles.content}>
                    {data?.title}
                </div>
            </div>

        </>
    )
}
