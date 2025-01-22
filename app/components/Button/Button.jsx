import styles from "./styles.module.css";

export default function Button({ href, text, handleClick }) {
    return (
        <a
            href={href}
            className={styles.button}
            onClick={handleClick}
        >
            {text}
        </a>
    )
}
