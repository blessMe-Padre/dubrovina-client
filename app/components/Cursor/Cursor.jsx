'use client'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className={styles.custom_cursor}
            ref={cursorRef}
        />
    );
}