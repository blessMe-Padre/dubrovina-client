'use client'
import { useEffect, useState } from "react";

import styles from './style.module.scss';
import Image from "next/image";
import Link from 'next/link';

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `${domain}/api/servisy?populate[Service][populate]=image`;


const getData = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке списка сервисов:", error);
        return [];
    }
};

export default function Services() {
    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setSectionData(data?.data?.Service);
        };

        fetchData();

    }, []);

    return (

        <section className={styles.section}>
            <div className="container">
                <h2 className="title title--black">исключительный сервис</h2>
                <p className={styles.sub_title}>Мы заботимся о своих пациентах</p>

                <div className={`${styles.wrapper}`}>
                    {sectionData?.length > 0 ? (
                        sectionData.map((service, index) => {
                            const imageUrl = service?.image?.url
                                ? `${process.env.NEXT_PUBLIC_DOMAIN}${service.image.url}`
                                : '/placeholder.png';

                            return (
                                <div className={styles.item} key={index}>
                                    <div className={styles.image_wrapper}>
                                        <Image
                                            src={imageUrl}
                                            alt='Dubrovina logo'
                                            width={466}
                                            height={308}
                                            className="dsv-image"
                                            placeholder="blur"
                                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+"
                                            priority
                                        />
                                    </div>
                                    <div className={styles.block}>
                                        <div className="border_left_div"></div>
                                        <p className={styles.text}>{service.title}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Загрузка...</p>
                    )}
                </div>

            </div>
        </section>
    )
}

