
import styles from './page.module.css';

import { Loyalnost, MainHero, Map, Founder, VideoSection, Trust, Mission, Statistic, Consultation, Specialists, Advantages, Specialization } from './sections';

export const metadata = {
  title: 'Клиника "Доктора Дубровиной" | Главная',
  description: "опытные специалисты решат даже самые сложные стоматологические задачи",
};

export default function Home() {
  return (
    <main className={styles.main}>
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
