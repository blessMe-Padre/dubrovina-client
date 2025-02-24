'use client'

import Image from "next/image"

import { useState, useEffect } from "react";

import styles from './style.module.css';

import src_1 from '@/public/services/bg_1.png';
import src_2 from '@/public/services/bg_2.png';
import src_3 from '@/public/services/bg_3.png';
import pattern_2 from '@/public/services/“.png';

import { Breadcrumbs } from "@/app/components";

import { Sertificat, Loyalnost, Consultation, Specialization } from "@/app/sections";

export default function PageContent() {

    const [src, setSrc] = useState(src_1);

    useEffect(() => {
        if (window.innerWidth < 769) {
            setSrc(src_3);
        }

        else if (window.innerWidth > 769 && window.innerWidth < 1200) {
            setSrc(src_2);
        }

        else {
            setSrc(src_1);
        }
    }, [])


    return (
        <>

            <Breadcrumbs
                secondLink="/services"
                secondLabel="Услуги"
            />
            <section className="section first_section">
                <div>
                    <Image src={src} alt="bg" className={styles.bg} width={1920} height={600} />

                    <div className="container relative">
                        <div className={styles.wrapper}>
                            <h2 className="title title--black" style={{ textAlign: 'start' }}>НАША ФИЛОСОФИЯ</h2>
                            <div className={styles.pattern}></div>

                            <p className={styles.subtitle}>
                                Если не стремиться быть лучшим <br />
                                в своем деле, то зачем этим делом <br />
                                заниматься?
                            </p>

                            <Image className={styles.pattern_2} src={pattern_2} width={80} height={80} alt="image" />
                        </div>
                    </div>
                </div>
            </section>

            <Specialization />
            <Loyalnost />
            <Consultation />
            <Sertificat />

        </>
    )
}