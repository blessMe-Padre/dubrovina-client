'use client'
import { motion } from "framer-motion";

import styles from './style.module.css';
export default function VideoSection({ all_width, firstSection }) {

    // Анимация для появления секции
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
    };

    const handleClick = () => {
        const video = document.querySelector('.video');
        const caption = document.querySelector('.caption');
        video.setAttribute('controls', 'true');
        caption.style.display = 'none';
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    return (
        <div className={`${all_width === true ? '' : 'container'} video_container`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className={`${styles.video} ${firstSection === true ? 'first_section' : ''}`}>
                <video preload="metadata" poster="./video/poster.webp"
                    className="video">
                    <source src="./video/video.webm" type="video/webm" />
                    <source src="./video/video.mp4" type="video/mp4" />
                </video>

                <div className={`${styles.caption} caption`}>
                    <h1 className={`${styles.caption__title}`}>комфортное пространство, где главное – забота о здоровье пациентов</h1>
                    <button
                        onClick={handleClick}
                        className={styles.button}>
                        <img src='./icons/play.svg' width={100} height={100} />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

