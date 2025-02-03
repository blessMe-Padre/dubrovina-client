
import Link from "next/link";
import styles from './style.module.scss';

import React from 'react'

export default function LinkButton({ link, text, color, position }) {
    let colorClass = '';

    switch (color) {
        case 'black':
            colorClass = styles.black;
            break;
        default:
            colorClass = styles.black;
    }

    let positionClass = '';

    switch (position) {
        case 'absolute':
            positionClass = styles.absolute;
            break;
        default:
            positionClass = styles.relative;
    }



    return (
        <Link
            href={link}
            className={`${styles.button} ${colorClass} ${positionClass}`}
            data-text={text}
        >
            <span className={styles.text}>{text}</span>
        </Link>
    )
}
