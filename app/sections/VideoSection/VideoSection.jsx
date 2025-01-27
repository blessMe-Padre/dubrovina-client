'use client'

import styles from './style.module.css';
export default function VideoSection() {

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
        <div className="container video_container">
            <div className={styles.video}>
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
            </div>
        </div>
    )
}

