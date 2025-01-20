import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container'>
        <p>ЗАПИШИТЕСЬ НА консультацию сейчас и получите постоянную семейную скидку 10%</p>
        <p>ЗАПИШИТЕСЬ НА консультацию сейчас и получите постоянную семейную скидку 10%</p>
        <p>ЗАПИШИТЕСЬ НА консультацию сейчас и получите постоянную семейную скидку 10%</p>
        <Image
          src='/hero.jpg'
          alt='Dubrovina logo'
          width={674}
          height={740}
          className="dsv-image"
        />
      </div>
    </main>
  )
}
