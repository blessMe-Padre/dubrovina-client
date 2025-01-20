
import Image from "next/image";
import styles from "./vdsButton.module.css";

export default function VdsButton({ setPanel, setPanelBtn }) {
    const handleClick = () => {
        setPanel(true);
        setPanelBtn(false);
        speechSynthesis.speak(new SpeechSynthesisUtterance("версия сайта для слабовидящих "));
    }

    return (
        <button
            className={styles.button}
            onClick={handleClick}
        >
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2001_301)">
                    <path d="M15.5 25.0732C9.57712 25.0732 4.20594 21.8328 0.242559 16.5694C-0.080853 16.1382 -0.080853 15.5358 0.242559 15.1045C4.20594 9.83483 9.57712 6.59436 15.5 6.59436C21.4229 6.59436 26.7941 9.83483 30.7574 15.0982C31.0809 15.5294 31.0809 16.1318 30.7574 16.5631C26.7941 21.8328 21.4229 25.0732 15.5 25.0732ZM15.9249 9.32751C11.9932 9.0802 8.74639 12.3207 8.99371 16.2587C9.19663 19.5055 11.8283 22.1372 15.0751 22.3401C19.0068 22.5874 22.2536 19.3469 22.0063 15.4089C21.797 12.1685 19.1653 9.53678 15.9249 9.32751ZM15.7283 12.3333C13.6103 12.2002 11.86 13.9441 11.9995 16.0621C12.1073 17.8123 13.5278 19.2265 15.2781 19.3406C17.3961 19.4738 19.1463 17.7299 19.0068 15.6119C18.8927 13.8553 17.4722 12.4411 15.7283 12.3333Z" fill="#27272A" />
                </g>
                <defs>
                    <clipPath id="clip0_2001_301">
                        <rect width="31" height="31" fill="white" transform="matrix(1 0 0 -1 0 31.334)" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    )
}
