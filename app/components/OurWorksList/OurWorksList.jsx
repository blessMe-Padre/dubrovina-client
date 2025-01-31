'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import getData from '../../utils/getData';

const PER_PAGE = 2; // Количество элементов на странице

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
            <h2>Наши работы</h2>

            {isLoading ? (
                <p>Загрузка...</p>
            ) : (
                <>
                    {data?.map(work => (
                        <div key={work.id}>
                            <h3>{work.title}</h3>
                            <p>{work.name}</p>
                        </div>
                    ))}

                    <div className="pagination">
                        {/* Кнопка "Предыдущая" */}
                        {currentPage > 1 && (
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                Предыдущая
                            </button>
                        )}

                        {/* Номера страниц */}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}

                        {/* Кнопка "Следующая" */}
                        {currentPage < totalPages && (
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                Следующая
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
