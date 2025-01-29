'use client'

import { useState, useEffect } from 'react';

import styles from './style.module.css';

import { SpecializationCard } from '@/app/components';


const domain = 'http://89.108.115.136:1338';
const url = `${domain}/api/speczializacziis?populate=*`;

const getData = async () => {
    try {
        const response = await fetch(url, {
            next: {
                revalidate: 30000
            }
        });

        if(!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const result = await response.json();
        return result;
    }  catch (error) {
        console.error('Ошибка при загрузке Специализаций компании', error);
        return [];
    }
}

export default function Specialization() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setData(data.data);
            console.log(data.data)
        }

        fetchData();
    }, [])

    return (
        <section className='section'>
            <div className='container'>
                <h2 className='title title--black'>наша специализация</h2>
                <p className={styles.subtitle}>Лечим зубы, как лечили бы себе</p>

                <div className={styles.specialization_wrapper}>
                    {data[0]?.speczializacziya.map((item, idx) => (
                        <SpecializationCard    
                            key={idx}       
                            href={`${item.link}`}
                            title={item.title}
                            img={item.img}
                        />
                    ))}
                  
                </div>
            </div>
        </section>
    )
}