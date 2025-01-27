import Image from 'next/image';
import styles from './page.module.css';
import { Loyalnost, MainHero, Map, Founder, VideoSection, Trust, Mission, Consultation } from './sections';


export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className='container'>
        <p className={styles.text_1}>ЗАПИШИТЕСЬ НА консультацию сейчас и получите постоянную семейную скидку 10%</p>
        <p className={styles.text_2}>ЗАПИШИТЕСЬ НА консультацию сейчас и получите постоянную семейную скидку 10%</p>
        <p className={styles.text_3}>ЗАПИШИТЕСЬ НА консультацию сейчас и получите постоянную семейную скидку 10%</p>
        <Image
          src='/hero.jpg'
          alt='Dubrovina logo'
          width={674}
          height={740}
          className="dsv-image"
        />
      </div> */}

      <MainHero />
      <VideoSection />
      <Founder />
      <Trust />
      <Mission />
      <Consultation />
      <Loyalnost />
      <Map />
    </main>
  )
}
