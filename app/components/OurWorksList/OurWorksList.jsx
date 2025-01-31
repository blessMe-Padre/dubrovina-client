'use client'

import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import getData from '../../utils/getData';
import { OurWorksCard } from '@/app/components';

const PER_PAGE = 3; // Количество элементов на странице

export default function OurWorksList() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [data, setData] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    // Получаем номер страницы из URL
    const currentPage = Number(searchParams.get('page')) || 1;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/nashi-raboties?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${PER_PAGE}`);
                setData(response.data);
                setTotalPages(response.meta.pagination.pageCount);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentPage]); // Перезагрузка данных при изменении страницы в URL

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            // Обновляем URL без перезагрузки страницы
            router.push(`?page=${newPage}`, { scroll: false });
        }
    };

    return (
        <div>
            <ul className={styles.list}>
                {data?.map((item, index) => (
                    <li key={index}>
                        <OurWorksCard item={item}
                        />
                    </li>
                ))}
            </ul>
            <div className={styles.pagination}>
                {/* Кнопка "Предыдущая" */}
                <button className={styles.pagination_button} onClick={() => handlePageChange(currentPage - 1)}>
                    <svg width="74" height="50" viewBox="0 0 74 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.5" y="0.5" width="49" height="49" rx="24.5" transform="matrix(-1 0 0 1 72.0596 0)" stroke="#27272A" />
                        <path d="M0.322678 25.7071C-0.0678444 25.3166 -0.0678444 24.6834 0.322678 24.2929L6.68664 17.9289C7.07716 17.5384 7.71033 17.5384 8.10085 17.9289C8.49138 18.3195 8.49138 18.9526 8.10085 19.3431L2.444 25L8.10085 30.6569C8.49138 31.0474 8.49138 31.6805 8.10085 32.0711C7.71033 32.4616 7.07716 32.4616 6.68664 32.0711L0.322678 25.7071ZM46.0298 26H1.02979V24H46.0298V26Z" fill="#27272A" />
                    </svg>
                </button>

                {/* Номера страниц */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`${styles.page_link} ${currentPage === index + 1 ? `${styles.active}` : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Кнопка "Следующая" */}

                <button className={styles.pagination_button} onClick={() => handlePageChange(currentPage + 1)}>
                    <svg width="74" height="50" viewBox="0 0 74 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#27272A" />
                        <path d="M72.7369 25.7071C73.1274 25.3166 73.1274 24.6834 72.7369 24.2929L66.3729 17.9289C65.9824 17.5384 65.3492 17.5384 64.9587 17.9289C64.5682 18.3195 64.5682 18.9526 64.9587 19.3431L70.6156 25L64.9587 30.6569C64.5682 31.0474 64.5682 31.6805 64.9587 32.0711C65.3492 32.4616 65.9824 32.4616 66.3729 32.0711L72.7369 25.7071ZM27.0298 26H72.0298V24H27.0298V26Z" fill="#27272A" />
                    </svg>
                </button>

            </div>

        </div>
    );
}
