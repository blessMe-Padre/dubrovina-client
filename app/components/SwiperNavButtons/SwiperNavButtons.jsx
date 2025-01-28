import { useSwiper } from "swiper/react";
import styles from './style.module.css'

const SwiperNavButtons = ({ addClass }) => {
    const swiper = useSwiper();

    return (
        <div className={`${styles.swiper_nav_btns} ${addClass} ${addClass ? styles[addClass] : ''
            }`}>
            <button className={styles.btn_prev} onClick={() => swiper.slidePrev()}>
                <svg width="74" height="50" viewBox="0 0 74 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.5" y="0.5" width="49" height="49" rx="24.5" transform="matrix(-1 0 0 1 72.0596 0)" stroke="#27272A" />
                    <path d="M0.322678 25.7071C-0.0678444 25.3166 -0.0678444 24.6834 0.322678 24.2929L6.68664 17.9289C7.07716 17.5384 7.71033 17.5384 8.10085 17.9289C8.49138 18.3195 8.49138 18.9526 8.10085 19.3431L2.444 25L8.10085 30.6569C8.49138 31.0474 8.49138 31.6805 8.10085 32.0711C7.71033 32.4616 7.07716 32.4616 6.68664 32.0711L0.322678 25.7071ZM46.0298 26H1.02979V24H46.0298V26Z" fill="#27272A" />
                </svg>
            </button>

            <button className={styles.btn_next} onClick={() => swiper.slideNext()}>
                <svg width="74" height="50" viewBox="0 0 74 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#27272A" />
                    <path d="M72.7369 25.7071C73.1274 25.3166 73.1274 24.6834 72.7369 24.2929L66.3729 17.9289C65.9824 17.5384 65.3492 17.5384 64.9587 17.9289C64.5682 18.3195 64.5682 18.9526 64.9587 19.3431L70.6156 25L64.9587 30.6569C64.5682 31.0474 64.5682 31.6805 64.9587 32.0711C65.3492 32.4616 65.9824 32.4616 66.3729 32.0711L72.7369 25.7071ZM27.0298 26H72.0298V24H27.0298V26Z" fill="#27272A" />
                </svg>
            </button>

        </div>
    )
}

export default SwiperNavButtons;

