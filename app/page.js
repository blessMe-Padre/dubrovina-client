
import styles from './page.module.css';

import { Loyalnost, MainHero, Map, Founder, VideoSection, Trust, Mission, Statistic, Consultation, Specialists, Advantages, Specialization } from './sections';


export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Image
        src={imageUrl}
        alt='Dubrovina logo'
        width={1439}
        height={850}
        className="dsv-image"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
      
        />
       */}
      <MainHero />
      <VideoSection />
      <Founder />
      <Trust />
      <Mission />
      <Statistic />
      <Advantages />
      <Specialists />
      <Specialization />
      <Consultation />
      <Loyalnost />
      <Map />
    </main>
  )
}
