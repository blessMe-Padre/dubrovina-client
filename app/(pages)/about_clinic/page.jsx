import { Breadcrumbs } from '@/app/components';
import styles from './style.module.scss';

import { VideoSection, Mission, Statistic, Advantages, Consultation, Map, Trust, Appeal } from '@/app/sections';

export const metadata = {
    title: "Дубровина | О клинике",
    description: "Клиника Дубровина",
}

export default function page() {
    return (
        <>
            <Breadcrumbs
                secondLink="/about_clinic"
                secondLabel="О клинике"
            />
            <VideoSection all_width={true} />
            <Appeal />
            <Mission />
            <Statistic />
            <Advantages />
            <Trust />
            <Consultation />
            <Map />
        </>
    )
}
