import styles from './styles.module.css';

export default function Button({ size, color, text, handleClick }) {
    switch (size) {
        case "small":
            return (
              <button
                className={`${styles.button} ${styles.small} ${color === 'black' ? styles.black_bg : styles.white_bg}`}
                onClick={handleClick}
                data-text={text}
              >
                <span className={styles.text}>    
                    {text}
                </span>
              </button>
            );
        case "medium":
             return (
              <button
                className={`${styles.button} ${styles.medium} ${color === 'black' ? styles.black_bg : styles.white_bg}`}
                onClick={handleClick}
                data-text={text}
              >
                <span className={styles.text}>    
                    {text}
                </span>
              </button>
            );
        case "large":
            return (
              <button
                 className={`${styles.button} ${styles.large} ${color === 'black' ? styles.black_bg : styles.white_bg}`}
                onClick={handleClick}
                data-text={text}
              >
                <span className={styles.text}>    
                    {text}
                </span>
              </button>
            );
        default:
            return (
              <button
                className={`${styles.button} ${color === 'black' ? styles.black_bg : styles.white_bg}`}
                onClick={handleClick}
                data-text={text}
              >
                <span className={styles.text}>    
                    {text}
                </span>
              </button>
            );
    }
}