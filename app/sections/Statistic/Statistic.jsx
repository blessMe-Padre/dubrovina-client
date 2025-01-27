'use client'

import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import styles from './style.module.css';
export default function Statistic() {

    const count = useMotionValue(10);
    const to = 18;
    const rounded = useTransform(count, (latest) => {
        return Math.round(latest);
    });

    const count2 = useMotionValue(90);
    const to2 = 98;
    const rounded2 = useTransform(count2, (latest) => {
        return Math.round(latest);
    });

    const count3 = useMotionValue(680);
    const to3 = 700;
    const rounded3 = useTransform(count3, (latest) => {
        return Math.round(latest);
    });

    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration: 2, ease: "easeInOut" });
            animate(count2, to2, { duration: 2, ease: "easeInOut" });
            animate(count3, to3, { duration: 1, ease: "easeInOut" });
        }
    }, [inView]);

    return (
        <section className={styles.section}>
            <div className="container">
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.count}>
                            <motion.span
                                className={styles.count_1}
                                ref={ref}>
                                {rounded}
                            </motion.span>+
                        </div>
                        <p className={styles.text}>средний стаж
                            врачей</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.count}>
                            <motion.span
                                className={styles.count_2}
                                ref={ref}>
                                {rounded2}
                            </motion.span>%
                        </div>
                        <p className={styles.text}> пациентов
                            по рекомендации</p>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.count}>
                            <motion.span
                                className={styles.count_3}
                                ref={ref}>
                                {rounded3}
                            </motion.span>+
                        </div>
                        <p className={styles.text}>имплантаций
                            в год</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

